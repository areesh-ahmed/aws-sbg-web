# Changes Summary: AWS Services Catalog Update (`changes-service.md`)

## Overview & Context
This document records the background, context, and structural modifications made to the **AWS Services Catalog** ([`data/services.js`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/data/services.js)) for the AWS Student Builder Group website.

---

## Chronology of Changes

### 1. Initial State
- The `/services` page originally contained 6 mock service entries in [`data/services.js`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/data/services.js).

### 2. Phase 1: Core AWS Expansion
- Expanded [`data/services.js`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/data/services.js) to 42 foundational AWS cloud services across 9 categories.

### 3. Phase 2: Live AWS Products Scraping & Expansion
- Fetched and parsed the official AWS products directory live from [https://aws.amazon.com/products/](https://aws.amazon.com/products/).
- Expanded the dataset to **72 official AWS Services** across **12 domain categories**, aligning 1:1 with official AWS product classifications and explanations.

---

## Service Data Schema

Each service item in [`data/services.js`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/data/services.js) follows this structure:

```js
{
  id: "ec2", // Unique string identifier slug
  name: "Amazon EC2", // Official AWS product name
  category: "Compute", // Official AWS domain category
  explanation: "Virtual servers in the cloud...", // Beginner-friendly technical overview
  useCase: "Hosting web applications...", // Practical engineering use case
  icon: "Server" // Icon mapping key for UI cards
}
```

---

## Complete Catalog Breakdown (72 Services Across 12 Categories)

### 1. Analytics (7 Services)
- **Amazon Athena** (`athena`): Interactive SQL queries directly over Amazon S3 data lakes.
- **Amazon EMR** (`emr`): Big data processing using Apache Spark, Hive, and Presto.
- **AWS Glue** (`glue`): Serverless data integration and ETL cataloging pipelines.
- **Amazon MSK** (`msk`): Managed Apache Kafka streaming data cluster.
- **Amazon OpenSearch Service** (`opensearch`): Vector database, application search, and log analytics.
- **Amazon QuickSight** (`quicksight`): Serverless BI dashboards and visual analytics.
- **Amazon Redshift** (`redshift`): High-performance cloud data warehousing.

### 2. Application Integration (8 Services)
- **AWS API Gateway** (`api-gateway`): Serverless RESTful & WebSocket API management.
- **Amazon AppFlow** (`appflow`): No-code data transfer between SaaS apps and AWS.
- **AWS AppSync** (`appsync`): Real-time GraphQL API backend for mobile and web.
- **AWS EventBridge** (`eventbridge`): Serverless event bus for decoupled microservices.
- **Amazon MQ** (`mq`): Managed Apache ActiveMQ & RabbitMQ message broker.
- **Amazon SNS** (`sns`): High-throughput Pub/Sub messaging and push notifications.
- **Amazon SQS** (`sqs`): Fully managed message queue for asynchronous task processing.
- **AWS Step Functions** (`step-functions`): Visual state-machine workflow orchestration.

### 3. Artificial Intelligence (7 Services)
- **Amazon Bedrock** (`bedrock`): Managed API access to top Generative AI foundation models.
- **Amazon Bedrock AgentCore** (`bedrock-agentcore`): Agentic AI platform to deploy autonomous AI agents.
- **AWS Inferentia** (`inferentia`): High-performance, low-cost ML inference silicon.
- **Amazon Q** (`amazon-q`): Generative AI assistant for developers and enterprise research.
- **Amazon Nova** (`nova`): State-of-the-art multi-modal foundation models.
- **Amazon SageMaker** (`sagemaker`): End-to-end Machine Learning training and deployment platform.
- **AWS Trainium** (`trainium`): Purpose-built AI chips for training LLMs and deep learning.

### 4. Business Applications (5 Services)
- **Amazon Connect** (`connect`): AI-native omni-channel cloud contact center.
- **Amazon SES** (`ses`): High-scale transactional and marketing email service.
- **AWS Supply Chain** (`supply-chain`): AI-driven supply chain inventory visibility and planning.
- **AWS Wickr** (`wickr`): End-to-end encrypted enterprise messaging and calls.
- **Amazon WorkSpaces** (`workspaces`): Desktop as a Service (DaaS) virtual cloud desktops.

### 5. Compute (8 Services)
- **Amazon EC2** (`ec2`): Scalable virtual machine instances in the cloud.
- **AWS Elastic Beanstalk** (`elastic-beanstalk`): Platform as a Service (PaaS) web app deployment.
- **Amazon ECS** (`ecs`): AWS-native managed Docker container orchestration.
- **Amazon EKS** (`eks`): Managed Kubernetes cluster service.
- **AWS Lambda** (`lambda`): Serverless event-driven compute engine.
- **AWS Fargate** (`fargate`): Serverless compute engine for ECS & EKS containers.
- **AWS Lightsail** (`lightsail`): Simple Virtual Private Servers (VPS) for web apps.
- **AWS App Runner** (`app-runner`): Fully managed containerized web application runner.

### 6. Databases (7 Services)
- **Amazon Aurora** (`aurora`): High-performance serverless MySQL and PostgreSQL.
- **Amazon DocumentDB** (`documentdb`): Managed MongoDB-compatible document database.
- **Amazon DynamoDB** (`dynamodb`): Serverless single-digit millisecond NoSQL key-value database.
- **Amazon ElastiCache** (`elasticache`): In-memory caching for Redis and Memcached.
- **Amazon MemoryDB** (`memorydb`): Durable, ultra-fast in-memory Redis-compatible database.
- **Amazon Neptune** (`neptune`): Graph database service for connected data graphs.
- **Amazon RDS** (`rds`): Managed relational database for MySQL, PostgreSQL, Oracle, SQL Server.

### 7. Developer Tools (5 Services)
- **Amazon Q Developer** (`q-developer`): Generative AI coding assistant for IDEs.
- **AWS Amplify** (`amplify`): Frontend hosting and serverless web/mobile backend framework.
- **AWS CDK** (`cdk`): Cloud Development Kit for IaC in TypeScript, Python, Java, Go.
- **AWS CloudFormation** (`cloudformation`): IaC engine using JSON and YAML templates.
- **AWS CLI** (`cli`): Command Line Interface for AWS resource management.

### 8. Game Tech (1 Service)
- **Amazon GameLift** (`gamelift`): Managed multiplayer game server hosting fleets.

### 9. Management & Governance (5 Services)
- **AWS CloudTrail** (`cloudtrail`): Governance auditing and API operation logging.
- **Amazon CloudWatch** (`cloudwatch`): Real-time metrics monitoring, log aggregation, and alerts.
- **AWS Config** (`config`): Resource configuration tracking and compliance auditing.
- **AWS Organizations** (`organizations`): Centralized multi-account policies and consolidated billing.
- **AWS Systems Manager** (`systems-manager`): Unified operations hub for OS patching and management.

### 10. Networking & Content Delivery (6 Services)
- **Amazon CloudFront** (`cloudfront`): Global Content Delivery Network (CDN) edge cache.
- **AWS Direct Connect** (`direct-connect`): Dedicated private network link to AWS datacenters.
- **AWS Elastic Load Balancing** (`elb`): Traffic load balancing across backend targets.
- **Amazon Route 53** (`route53`): Global DNS domain routing and health checks.
- **Amazon VPC** (`vpc`): Logically isolated Virtual Private Cloud network space.
- **AWS Client VPN** (`vpn`): OpenVPN-based secure remote VPC access.

### 11. Security & Identity (8 Services)
- **Amazon Cognito** (`cognito`): User authentication, user pools, and OAuth sign-in.
- **Amazon GuardDuty** (`guardduty`): Intelligent threat detection for AWS accounts and workloads.
- **AWS IAM** (`iam`): Identity and Access Management for granular access control.
- **AWS KMS** (`kms`): Key Management Service for data encryption key lifecycle.
- **AWS Secrets Manager** (`secrets-manager`): Centralized database password and API key secret rotation.
- **AWS Security Hub** (`security-hub`): Centralized security posture dashboard.
- **AWS Shield** (`shield`): Managed DDoS protection service.
- **AWS WAF** (`waf`): Web Application Firewall filtering malicious HTTP traffic.

### 12. Storage (5 Services)
- **Amazon S3** (`s3`): Scalable object storage for files, backups, and analytics.
- **Amazon EBS** (`ebs`): Persistent block storage volumes for EC2 instances.
- **Amazon EFS** (`efs`): Elastic serverless NFS file system for Linux compute.
- **AWS Backup** (`backup`): Automated policy-driven backup management across AWS services.
- **AWS Storage Gateway** (`storage-gateway`): Hybrid cloud storage integration with local datacenters.

---

## Architectural Integrity
- **Zero UI Component Modifications**: [`ServicesLayout.jsx`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/components/ServicesLayout.jsx), [`ServiceCard.jsx`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/components/ServiceCard.jsx), and [`app/services/page.js`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/app/services/page.js) remained **100% untouched**.
- **Dynamic Category Population**: [`ServicesLayout.jsx`](file:///c:/Users/vedan/Desktop/Github/aws-sbg-web/components/ServicesLayout.jsx) automatically extracts unique categories (`[...new Set(services.map(s => s.category))]`), generating sidebar tabs dynamically for all 12 categories.
