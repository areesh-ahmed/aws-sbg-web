export const services = [
  
  {
    id: "athena",
    name: "Amazon Athena",
    category: "Analytics",
    explanation: "Interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL.",
    useCase: "Running ad-hoc SQL queries on data lakes without provisioning database infrastructure.",
    icon: "Database"
  },
  {
    id: "emr",
    name: "Amazon EMR",
    category: "Analytics",
    explanation: "Easily run big data frameworks like Apache Spark, Hive, and Presto for large-scale data processing.",
    useCase: "Processing petabyte-scale data pipelines, machine learning feature engineering, and log analysis.",
    icon: "Server"
  },
  {
    id: "glue",
    name: "AWS Glue",
    category: "Analytics",
    explanation: "Simple, scalable, and serverless data integration service to discover, prepare, and combine data.",
    useCase: "Automated ETL (Extract, Transform, Load) pipelines to catalog and clean data for analytics.",
    icon: "Zap"
  },
  {
    id: "msk",
    name: "Amazon MSK",
    category: "Analytics",
    explanation: "Fully managed Apache Kafka service that makes it easy to build and run applications that process streaming data.",
    useCase: "Ingesting and streaming real-time event logs, sensor telemetry, and messaging streams.",
    icon: "Zap"
  },
  {
    id: "opensearch",
    name: "Amazon OpenSearch Service",
    category: "Analytics",
    explanation: "Real-time search, vector database, and log analytics engine powered by open-source OpenSearch.",
    useCase: "Powering website search bars, application performance monitoring, and security log analytics.",
    icon: "Database"
  },
  {
    id: "quicksight",
    name: "Amazon QuickSight",
    category: "Analytics",
    explanation: "Cloud-powered Business Intelligence (BI) service that makes it easy to deliver insights across your organization.",
    useCase: "Creating interactive BI dashboards, visual reports, and embedded analytics for stakeholders.",
    icon: "BrainCircuit"
  },
  {
    id: "redshift",
    name: "Amazon Redshift",
    category: "Analytics",
    explanation: "Fast, simple, cost-effective data warehousing service designed for large-scale enterprise analytics.",
    useCase: "Aggregating complex business datasets to perform high-speed analytical queries and reporting.",
    icon: "Database"
  },

  // --- APPLICATION INTEGRATION ---
  {
    id: "api-gateway",
    name: "AWS API Gateway",
    category: "Application Integration",
    explanation: "Fully managed service to create, publish, maintain, monitor, and secure RESTful and WebSocket APIs at scale.",
    useCase: "Exposing serverless AWS Lambda functions or HTTP microservices to web and mobile clients.",
    icon: "Zap"
  },
  {
    id: "appflow",
    name: "Amazon AppFlow",
    category: "Application Integration",
    explanation: "Fully managed integration service to securely transfer data between SaaS applications and AWS services.",
    useCase: "Automating data flow from Salesforce, Slack, or ServiceNow into Amazon S3 or Redshift.",
    icon: "Zap"
  },
  {
    id: "appsync",
    name: "AWS AppSync",
    category: "Application Integration",
    explanation: "Connects web and mobile applications to real-time events, data stores, and AI models using GraphQL.",
    useCase: "Building offline-first mobile apps, real-time collaborative whiteboards, and GraphQL APIs.",
    icon: "Zap"
  },
  {
    id: "eventbridge",
    name: "AWS EventBridge",
    category: "Application Integration",
    explanation: "Serverless event bus service to connect applications using data from SaaS apps, microservices, and AWS.",
    useCase: "Building decoupled, event-driven architectures triggered by real-time state changes.",
    icon: "Zap"
  },
  {
    id: "mq",
    name: "Amazon MQ",
    category: "Application Integration",
    explanation: "Managed message broker service for Apache ActiveMQ and RabbitMQ that simplifies migration to the cloud.",
    useCase: "Migrating existing enterprise message brokers to AWS without rewriting application code.",
    icon: "Server"
  },
  {
    id: "sns",
    name: "Amazon SNS",
    category: "Application Integration",
    explanation: "Pub/sub messaging service for microservice coordination, push notifications, SMS, and email broadcasting.",
    useCase: "Fan-out event notifications to multiple subscribers and sending SMS or mobile push alerts.",
    icon: "Zap"
  },
  {
    id: "sqs",
    name: "Amazon SQS",
    category: "Application Integration",
    explanation: "Fully managed message queuing service for decoupling and scaling distributed microservices.",
    useCase: "Asynchronous task processing queues to smooth out sudden application traffic spikes.",
    icon: "Zap"
  },
  {
    id: "step-functions",
    name: "AWS Step Functions",
    category: "Application Integration",
    explanation: "Visual workflow orchestrator to coordinate distributed applications and microservices using state machines.",
    useCase: "Orchestrating complex multi-step data pipelines, order fulfillment, and automated error handling.",
    icon: "Zap"
  },

  // --- ARTIFICIAL INTELLIGENCE ---
  {
    id: "bedrock",
    name: "Amazon Bedrock",
    category: "Artificial Intelligence",
    explanation: "Fully managed platform offering API access to leading foundation models (FMs) for building Generative AI apps.",
    useCase: "Building enterprise AI assistants, custom RAG systems, and generative text/image applications.",
    icon: "BrainCircuit"
  },
  {
    id: "bedrock-agentcore",
    name: "Amazon Bedrock AgentCore",
    category: "Artificial Intelligence",
    explanation: "Agentic AI platform to build, deploy, and scale autonomous AI agents to production using any framework.",
    useCase: "Creating autonomous multi-step AI agents that execute complex workflows across enterprise tools.",
    icon: "BrainCircuit"
  },
  {
    id: "inferentia",
    name: "AWS Inferentia",
    category: "Artificial Intelligence",
    explanation: "Custom-designed machine learning inference chips engineered for low latency and high cost efficiency.",
    useCase: "Deploying high-throughput deep learning model inference at the lowest compute cost.",
    icon: "BrainCircuit"
  },
  {
    id: "amazon-q",
    name: "Amazon Q",
    category: "Artificial Intelligence",
    explanation: "Generative AI-powered assistant designed for business work, coding help, research, and data insights.",
    useCase: "Answering business questions using internal documents and assisting engineers with architecture.",
    icon: "BrainCircuit"
  },
  {
    id: "nova",
    name: "Amazon Nova",
    category: "Artificial Intelligence",
    explanation: "State-of-the-art foundation models offering frontier intelligence, multi-modal reasoning, and top speed.",
    useCase: "Powering advanced natural language understanding, vision analysis, and reasoning applications.",
    icon: "BrainCircuit"
  },
  {
    id: "sagemaker",
    name: "Amazon SageMaker",
    category: "Artificial Intelligence",
    explanation: "Comprehensive managed ML service to build, train, tune, and deploy machine learning models at scale.",
    useCase: "Training custom deep learning algorithms, fraud detection models, and recommendation engines.",
    icon: "BrainCircuit"
  },
  {
    id: "trainium",
    name: "AWS Trainium",
    category: "Artificial Intelligence",
    explanation: "High-performance, low-cost AI silicon purpose-built for deep learning and LLM model training.",
    useCase: "Training massive multi-billion parameter foundation models efficiently.",
    icon: "BrainCircuit"
  },

  // --- BUSINESS APPLICATIONS ---
  {
    id: "connect",
    name: "Amazon Connect",
    category: "Business Applications",
    explanation: "AI-native cloud contact center solution for delivering personalized, high-quality customer service.",
    useCase: "Setting up omni-channel customer support call centers with automated AI voice/chat bots.",
    icon: "BrainCircuit"
  },
  {
    id: "ses",
    name: "Amazon SES",
    category: "Business Applications",
    explanation: "Cost-effective, flexible, and scalable email service for sending transactional and marketing emails.",
    useCase: "Sending password resets, order confirmations, newsletters, and high-volume notifications.",
    icon: "Zap"
  },
  {
    id: "supply-chain",
    name: "AWS Supply Chain",
    category: "Business Applications",
    explanation: "AI-powered application that improves inventory visibility and supply chain planning to mitigate risks.",
    useCase: "Managing logistics, inventory tracking, demand forecasting, and vendor coordination.",
    icon: "BrainCircuit"
  },
  {
    id: "wickr",
    name: "AWS Wickr",
    category: "Business Applications",
    explanation: "End-to-end encrypted messaging, voice/video calling, and file sharing service for security-conscious teams.",
    useCase: "Ensuring secure, compliant internal communications for enterprise and government teams.",
    icon: "HardDrive"
  },
  {
    id: "workspaces",
    name: "Amazon WorkSpaces",
    category: "Business Applications",
    explanation: "Managed virtual desktop service in the cloud (DaaS) allowing secure remote access from any device.",
    useCase: "Providing remote employees and contractors secure, persistent desktop environments in the cloud.",
    icon: "Server"
  },

  // --- COMPUTE ---
  {
    id: "ec2",
    name: "Amazon EC2",
    category: "Compute",
    explanation: "Virtual servers in the cloud providing resizable compute capacity for virtually any application workload.",
    useCase: "Hosting web applications, API servers, game servers, or custom compute jobs.",
    icon: "Server"
  },
  {
    id: "elastic-beanstalk",
    name: "AWS Elastic Beanstalk",
    category: "Compute",
    explanation: "Platform as a Service (PaaS) to deploy, manage, and scale full-stack web applications effortlessly.",
    useCase: "Uploading code (Java, Node.js, Python, PHP) and letting AWS automatically handle provisioning and scaling.",
    icon: "Server"
  },
  {
    id: "ecs",
    name: "Amazon ECS",
    category: "Compute",
    explanation: "Fully managed AWS-native container orchestration service for running highly scalable Docker containers.",
    useCase: "Deploying and scaling containerized microservices across AWS infrastructure.",
    icon: "Server"
  },
  {
    id: "eks",
    name: "Amazon EKS",
    category: "Compute",
    explanation: "Managed Kubernetes service to run Kubernetes containerized applications without installing K8s control planes.",
    useCase: "Running standardized Kubernetes microservices workloads in a production cloud environment.",
    icon: "Server"
  },
  {
    id: "lambda",
    name: "AWS Lambda",
    category: "Compute",
    explanation: "Serverless compute service that runs code automatically in response to events without managing servers.",
    useCase: "Executing backend logic triggered by S3 file uploads, DynamoDB streams, or HTTP requests.",
    icon: "Zap"
  },
  {
    id: "fargate",
    name: "AWS Fargate",
    category: "Compute",
    explanation: "Serverless compute engine for containers that works seamlessly with Amazon ECS and Amazon EKS.",
    useCase: "Running containerized tasks on demand without managing virtual machine clusters or node scaling.",
    icon: "Zap"
  },
  {
    id: "lightsail",
    name: "AWS Lightsail",
    category: "Compute",
    explanation: "Easy-to-use virtual private server (VPS) with pre-configured compute, storage, and networking.",
    useCase: "Launching WordPress sites, developer sandbox environments, or small web applications.",
    icon: "Server"
  },
  {
    id: "app-runner",
    name: "AWS App Runner",
    category: "Compute",
    explanation: "Fully managed service that makes it easy to build, deploy, and run containerized web apps at scale.",
    useCase: "Automatically building and deploying web services straight from Git repositories.",
    icon: "Zap"
  },

  // --- DATABASES ---
  {
    id: "aurora",
    name: "Amazon Aurora",
    category: "Databases",
    explanation: "High-performance serverless relational database engine compatible with MySQL and PostgreSQL.",
    useCase: "Mission-critical enterprise web apps demanding up to 5x MySQL performance and automated failover.",
    icon: "Database"
  },
  {
    id: "documentdb",
    name: "Amazon DocumentDB",
    category: "Databases",
    explanation: "Fully managed MongoDB-compatible document database service built for enterprise scale.",
    useCase: "Storing, indexing, and querying JSON document structures for modern web apps.",
    icon: "Database"
  },
  {
    id: "dynamodb",
    name: "Amazon DynamoDB",
    category: "Databases",
    explanation: "Serverless, single-digit millisecond key-value and document NoSQL database for workloads at any scale.",
    useCase: "Storing user profiles, e-commerce shopping carts, gaming data, and real-time app state.",
    icon: "DatabaseZap"
  },
  {
    id: "elasticache",
    name: "Amazon ElastiCache",
    category: "Databases",
    explanation: "In-memory caching service compatible with Redis and Memcached for sub-millisecond response times.",
    useCase: "Caching database queries, managing user session states, and real-time leaderboards.",
    icon: "DatabaseZap"
  },
  {
    id: "memorydb",
    name: "Amazon MemoryDB",
    category: "Databases",
    explanation: "Redis-compatible, durable in-memory database built for fast microservice applications.",
    useCase: "Ultra-fast primary database performance with multi-AZ transactional durability.",
    icon: "DatabaseZap"
  },
  {
    id: "neptune",
    name: "Amazon Neptune",
    category: "Databases",
    explanation: "Serverless graph database service optimized for storing and querying highly connected datasets.",
    useCase: "Building social network graphs, fraud detection networks, and knowledge graphs.",
    icon: "Database"
  },
  {
    id: "rds",
    name: "Amazon RDS",
    category: "Databases",
    explanation: "Managed relational database service for MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server.",
    useCase: "Standard relational data storage with automated backups, multi-AZ high availability, and patching.",
    icon: "Database"
  },

  // --- DEVELOPER TOOLS ---
  {
    id: "q-developer",
    name: "Amazon Q Developer",
    category: "Developer Tools",
    explanation: "Generative AI-powered coding assistant that helps engineers write, debug, and explain code.",
    useCase: "Accelerating software development, generating unit tests, and refactoring legacy codebases.",
    icon: "BrainCircuit"
  },
  {
    id: "amplify",
    name: "AWS Amplify",
    category: "Developer Tools",
    explanation: "Complete toolkit and cloud backend framework to easily build, deploy, and host web and mobile apps.",
    useCase: "Hosting Next.js/React frontend apps and connecting serverless authentication and APIs.",
    icon: "Zap"
  },
  {
    id: "cdk",
    name: "AWS CDK",
    category: "Developer Tools",
    explanation: "Cloud Development Kit to define cloud infrastructure as code using TypeScript, Python, Java, or Go.",
    useCase: "Writing object-oriented code to define and deploy complex AWS infrastructure templates.",
    icon: "Server"
  },
  {
    id: "cloudformation",
    name: "AWS CloudFormation",
    category: "Developer Tools",
    explanation: "Infrastructure as Code service to model, automate, and manage AWS resources using JSON or YAML.",
    useCase: "Automating repeatable cloud environment deployments across multiple AWS accounts.",
    icon: "Server"
  },
  {
    id: "cli",
    name: "AWS CLI",
    category: "Developer Tools",
    explanation: "Unified Command Line Interface to interact with and control all AWS services directly from terminal.",
    useCase: "Automating administration tasks, deployment scripts, and resource querying in terminal.",
    icon: "Server"
  },

  // --- GAME TECH ---
  {
    id: "gamelift",
    name: "Amazon GameLift",
    category: "Game Tech",
    explanation: "Dedicated game server hosting purpose-built to deploy and scale low-latency multiplayer games.",
    useCase: "Managing session-based multiplayer game server fleets with automatic global scaling.",
    icon: "Server"
  },

  // --- MANAGEMENT & GOVERNANCE ---
  {
    id: "cloudtrail",
    name: "AWS CloudTrail",
    category: "Management & Governance",
    explanation: "Tracks user activity and API operations across AWS accounts for governance, compliance, and auditing.",
    useCase: "Auditing security actions, logging API transactions, and tracking infrastructure changes.",
    icon: "Server"
  },
  {
    id: "cloudwatch",
    name: "Amazon CloudWatch",
    category: "Management & Governance",
    explanation: "Observability and monitoring service providing real-time metrics, logs, and automated alarm alerts.",
    useCase: "Monitoring EC2 CPU usage, aggregating application log streams, and setting high-load alerts.",
    icon: "Server"
  },
  {
    id: "config",
    name: "AWS Config",
    category: "Management & Governance",
    explanation: "Continuously monitors and records AWS resource configurations for compliance and security auditing.",
    useCase: "Ensuring all S3 buckets remain private and verifying compliance against security baselines.",
    icon: "HardDrive"
  },
  {
    id: "organizations",
    name: "AWS Organizations",
    category: "Management & Governance",
    explanation: "Centralized management and policy enforcement across multiple AWS accounts in an enterprise.",
    useCase: "Consolidating billing and enforcing Service Control Policies (SCPs) across team accounts.",
    icon: "HardDrive"
  },
  {
    id: "systems-manager",
    name: "AWS Systems Manager",
    category: "Management & Governance",
    explanation: "Operations management hub to automate operational tasks, patch OS instances, and manage nodes.",
    useCase: "Automating software updates and securely remoting into EC2 instances without SSH keys.",
    icon: "Server"
  },

  // --- NETWORKING & CONTENT DELIVERY ---
  {
    id: "cloudfront",
    name: "Amazon CloudFront",
    category: "Networking & Content Delivery",
    explanation: "Global Content Delivery Network (CDN) that delivers data, videos, and APIs securely with low latency.",
    useCase: "Caching static website assets globally and accelerating dynamic API responses.",
    icon: "Zap"
  },
  {
    id: "direct-connect",
    name: "AWS Direct Connect",
    category: "Networking & Content Delivery",
    explanation: "Dedicated private network connection from on-premises datacenters straight into AWS.",
    useCase: "High-speed, low-latency private connectivity bypassing the public internet for enterprise data.",
    icon: "Server"
  },
  {
    id: "elb",
    name: "AWS Elastic Load Balancing",
    category: "Networking & Content Delivery",
    explanation: "Automatically distributes incoming web and application traffic across multiple backend targets.",
    useCase: "Achieving application high availability by balancing HTTP/HTTPS and TCP traffic across targets.",
    icon: "Server"
  },
  {
    id: "route53",
    name: "Amazon Route 53",
    category: "Networking & Content Delivery",
    explanation: "Highly available and scalable cloud Domain Name System (DNS) web service and domain registrar.",
    useCase: "Routing domain traffic, latency-based routing, and performing website health checks.",
    icon: "Zap"
  },
  {
    id: "vpc",
    name: "Amazon VPC",
    category: "Networking & Content Delivery",
    explanation: "Virtual Private Cloud providing logically isolated virtual network space to launch AWS resources.",
    useCase: "Defining private subnets, security groups, route tables, and Internet Gateways for cloud setups.",
    icon: "Server"
  },
  {
    id: "vpn",
    name: "AWS Client VPN",
    category: "Networking & Content Delivery",
    explanation: "Managed OpenVPN-based service that lets remote users securely connect to AWS networks.",
    useCase: "Granting remote developers secure access to private VPC resources.",
    icon: "HardDrive"
  },

  // --- SECURITY & IDENTITY ---
  {
    id: "cognito",
    name: "Amazon Cognito",
    category: "Security & Identity",
    explanation: "Customer identity and access management providing user sign-up, sign-in, and OAuth authentication.",
    useCase: "Adding user registration, login, and social sign-in (Google, Apple) to mobile and web apps.",
    icon: "HardDrive"
  },
  {
    id: "guardduty",
    name: "Amazon GuardDuty",
    category: "Security & Identity",
    explanation: "Intelligent threat detection service that continuously monitors AWS accounts and workloads for malicious activity.",
    useCase: "Detecting compromised EC2 instances, unauthorized S3 bucket access, and unusual API calls.",
    icon: "HardDrive"
  },
  {
    id: "iam",
    name: "AWS IAM",
    category: "Security & Identity",
    explanation: "Identity and Access Management service to securely control granular access permissions to AWS resources.",
    useCase: "Creating users, groups, roles, and JSON policies to restrict access based on least privilege.",
    icon: "HardDrive"
  },
  {
    id: "kms",
    name: "AWS KMS",
    category: "Security & Identity",
    explanation: "Key Management Service to create, rotate, and control cryptographic keys used to encrypt data.",
    useCase: "Encrypting S3 objects, EBS volumes, and RDS databases with customer-managed keys.",
    icon: "HardDrive"
  },
  {
    id: "secrets-manager",
    name: "AWS Secrets Manager",
    category: "Security & Identity",
    explanation: "Helps you store, rotate, manage, and retrieve database credentials, API keys, and secrets securely.",
    useCase: "Storing database passwords securely and automatically rotating them without downtime.",
    icon: "HardDrive"
  },
  {
    id: "security-hub",
    name: "AWS Security Hub",
    category: "Security & Identity",
    explanation: "Unified security posture management service that aggregates security findings across AWS accounts.",
    useCase: "Centralizing security alerts from GuardDuty, Inspector, and IAM Access Analyzer in one dashboard.",
    icon: "HardDrive"
  },
  {
    id: "shield",
    name: "AWS Shield",
    category: "Security & Identity",
    explanation: "Managed Distributed Denial of Service (DDoS) protection service for applications running on AWS.",
    useCase: "Protecting web applications against large-scale layer 3, 4, and 7 DDoS attacks.",
    icon: "HardDrive"
  },
  {
    id: "waf",
    name: "AWS WAF",
    category: "Security & Identity",
    explanation: "Web Application Firewall that helps protect web apps from common web exploits, SQL injections, and bots.",
    useCase: "Filtering HTTP traffic and blocking malicious request patterns before they reach servers.",
    icon: "HardDrive"
  },

  // --- STORAGE ---
  {
    id: "s3",
    name: "Amazon S3",
    category: "Storage",
    explanation: "Industry-leading scalable object storage for data lakes, backups, archives, and web assets.",
    useCase: "Storing media files, user uploads, application logs, backups, and hosting static websites.",
    icon: "HardDrive"
  },
  {
    id: "ebs",
    name: "Amazon EBS",
    category: "Storage",
    explanation: "High-performance persistent block storage volumes designed specifically for Amazon EC2 instances.",
    useCase: "Primary storage for operating systems, relational databases, and enterprise file systems.",
    icon: "HardDrive"
  },
  {
    id: "efs",
    name: "Amazon EFS",
    category: "Storage",
    explanation: "Serverless, elastic file system for Linux compute workloads that automatically grows and shrinks.",
    useCase: "Shared file system accessible simultaneously across hundreds of EC2 instances and containers.",
    icon: "HardDrive"
  },
  {
    id: "backup",
    name: "AWS Backup",
    category: "Storage",
    explanation: "Fully managed policy-based service that centralizes and automates data protection across AWS services.",
    useCase: "Scheduling automated backups and compliance retention rules across EBS, RDS, DynamoDB, and S3.",
    icon: "HardDrive"
  },
  {
    id: "storage-gateway",
    name: "AWS Storage Gateway",
    category: "Storage",
    explanation: "Hybrid cloud storage service connecting on-premises software appliances with cloud storage.",
    useCase: "Providing local datacenters low-latency file, volume, and virtual tape backup into Amazon S3.",
    icon: "HardDrive"
  }
];
