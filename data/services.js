export const services = [
  {
    id: "ec2",
    name: "Amazon EC2",
    category: "Compute",
    explanation: "Virtual servers in the cloud. Think of it as renting a computer in an AWS data center.",
    useCase: "Hosting web applications or running backend scripts.",
    icon: "Server"
  },
  {
    id: "s3",
    name: "Amazon S3",
    category: "Storage",
    explanation: "Scalable object storage. It is like an infinite hard drive for files, images, and backups.",
    useCase: "Storing user uploads, backups, or hosting static websites.",
    icon: "HardDrive"
  },
  {
    id: "lambda",
    name: "AWS Lambda",
    category: "Compute",
    explanation: "Run code without provisioning servers. You only pay for the compute time you consume.",
    useCase: "Running backend logic triggered by events (like file uploads or HTTP requests).",
    icon: "Zap"
  },
  {
    id: "rds",
    name: "Amazon RDS",
    category: "Database",
    explanation: "Managed relational database service. Supports MySQL, PostgreSQL, etc.",
    useCase: "Storing structured application data that requires complex queries.",
    icon: "Database"
  },
  {
    id: "dynamodb",
    name: "Amazon DynamoDB",
    category: "Database",
    explanation: "Fast, flexible NoSQL database service for single-digit millisecond performance at any scale.",
    useCase: "Storing unstructured or semi-structured data, user profiles, or gaming state.",
    icon: "DatabaseZap"
  },
  {
    id: "bedrock",
    name: "Amazon Bedrock",
    category: "AI & Machine Learning",
    explanation: "Fully managed service that makes foundation models (FMs) available via an API.",
    useCase: "Building generative AI applications without managing infrastructure.",
    icon: "BrainCircuit"
  }
];
