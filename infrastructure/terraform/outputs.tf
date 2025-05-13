output "eks_cluster_endpoint" {
  description = "Endpoint for EKS cluster"
  value       = module.eks.cluster_endpoint
}

output "eks_cluster_name" {
  description = "Name of the EKS cluster"
  value       = module.eks.cluster_name
}

output "rds_endpoint" {
  description = "Endpoint for the RDS instance"
  value       = aws_db_instance.postgres.endpoint
}

output "redis_endpoint" {
  description = "Endpoint for the Redis cluster"
  value       = aws_elasticache_cluster.redis.cache_nodes[0].address
}

output "s3_bucket_name" {
  description = "Name of the S3 bucket for media storage"
  value       = aws_s3_bucket.media_storage.id
}

output "vpc_id" {
  description = "ID of the VPC"
  value       = module.vpc.vpc_id
}

output "private_subnets" {
  description = "List of private subnet IDs"
  value       = module.vpc.private_subnets
}

output "public_subnets" {
  description = "List of public subnet IDs"
  value       = module.vpc.public_subnets
}

output "route53_nameservers" {
  description = "Nameservers for the Route53 zone"
  value       = aws_route53_zone.main.name_servers
}

output "app_url" {
  description = "URL for the frontend application"
  value       = "https://app.${var.domain_name}"
}

output "api_url" {
  description = "URL for the backend API"
  value       = "https://api.${var.domain_name}"
}

output "kubeconfig_command" {
  description = "Command to configure kubectl"
  value       = "aws eks update-kubeconfig --region ${var.aws_region} --name ${module.eks.cluster_name}"
}
