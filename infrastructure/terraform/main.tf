terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
  backend "s3" {
    bucket = "video-automation-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC Configuration
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "video-automation-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["${var.aws_region}a", "${var.aws_region}b", "${var.aws_region}c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = false

  tags = {
    Environment = var.environment
    Project     = "video-automation"
  }
}

# EKS Cluster
module "eks" {
  source = "terraform-aws-modules/eks/aws"

  cluster_name    = "video-automation-cluster"
  cluster_version = "1.28"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    general = {
      desired_size = 2
      min_size     = 1
      max_size     = 4

      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"
    }
  }

  tags = {
    Environment = var.environment
    Project     = "video-automation"
  }
}

# RDS Instance
resource "aws_db_instance" "postgres" {
  identifier        = "video-automation-db"
  engine            = "postgres"
  engine_version    = "14"
  instance_class    = "db.t3.medium"
  allocated_storage = 20

  db_name  = "video_automation"
  username = var.db_username
  password = var.db_password

  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.rds.name

  backup_retention_period = 7
  multi_az               = true

  tags = {
    Environment = var.environment
    Project     = "video-automation"
  }
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "video-automation-redis"
  engine              = "redis"
  node_type           = "cache.t3.micro"
  num_cache_nodes     = 1
  parameter_group_name = "default.redis7"
  port                = 6379
  security_group_ids  = [aws_security_group.redis.id]
  subnet_group_name   = aws_elasticache_subnet_group.redis.name

  tags = {
    Environment = var.environment
    Project     = "video-automation"
  }
}

# S3 Bucket for Media Storage
resource "aws_s3_bucket" "media_storage" {
  bucket = "video-automation-media-${var.environment}"

  tags = {
    Environment = var.environment
    Project     = "video-automation"
  }
}

resource "aws_s3_bucket_versioning" "media_storage" {
  bucket = aws_s3_bucket.media_storage.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Route53 DNS Configuration
resource "aws_route53_zone" "main" {
  name = var.domain_name

  tags = {
    Environment = var.environment
    Project     = "video-automation"
  }
}

resource "aws_route53_record" "app" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "app.${var.domain_name}"
  type    = "A"

  alias {
    name                   = module.eks.cluster_endpoint
    zone_id                = module.eks.cluster_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "api" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "api.${var.domain_name}"
  type    = "A"

  alias {
    name                   = module.eks.cluster_endpoint
    zone_id                = module.eks.cluster_zone_id
    evaluate_target_health = true
  }
}
