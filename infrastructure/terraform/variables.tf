variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (e.g., prod, staging, dev)"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Base domain name for the application"
  type        = string
  default     = "video-automation.com"
}

variable "db_username" {
  description = "Username for the RDS instance"
  type        = string
  sensitive   = true
}

variable "db_password" {
  description = "Password for the RDS instance"
  type        = string
  sensitive   = true
}

variable "eks_node_instance_types" {
  description = "List of instance types for EKS node groups"
  type        = list(string)
  default     = ["t3.medium"]
}

variable "eks_node_group_scaling" {
  description = "Scaling configuration for EKS node groups"
  type = object({
    desired_size = number
    min_size     = number
    max_size     = number
  })
  default = {
    desired_size = 2
    min_size     = 1
    max_size     = 4
  }
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "rds_instance_class" {
  description = "Instance class for RDS"
  type        = string
  default     = "db.t3.medium"
}

variable "redis_node_type" {
  description = "Node type for ElastiCache Redis"
  type        = string
  default     = "cache.t3.micro"
}

variable "tags" {
  description = "Common tags for all resources"
  type        = map(string)
  default = {
    Project     = "video-automation"
    ManagedBy   = "terraform"
  }
}
