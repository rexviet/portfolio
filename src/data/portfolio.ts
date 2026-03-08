export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  company: string;
  teamSize: string;
  techStack: string[];
  description: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SystemDesign {
  title: string;
  description: string;
  problem: string;
  benefits: string[];
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export const bio = {
  title: "Backend Leader & DevOps Engineer",
  description: "Với hơn 7 năm kinh nghiệm thực chiến trong việc xây dựng và vận hành các hệ thống backend quy mô lớn, tôi chuyên sâu vào kiến trúc Microservices, tối ưu hóa hạ tầng Cloud và đảm bảo tính nhất quán của dữ liệu. Tôi đam mê giải quyết các bài toán hóc búa về scalability và performance, đồng thời luôn chú trọng vào việc xây dựng CI/CD flow mượt mà để tăng tốc độ phát triển phần mềm.",
};

export const stats: Stat[] = [
  { label: "Years of Experience", value: "7+", icon: "Calendar" },
  { label: "Projects Completed", value: "15+", icon: "Briefcase" },
  { label: "Highest Users Served", value: "300K+", icon: "Users" },
  { label: "Highest TVL Managed", value: "$58M+", icon: "TrendingUp" },
];

export const socials: Social[] = [
  { platform: "GitHub", url: "https://github.com/rexviet", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/vietphuong/", icon: "Linkedin" },
  { platform: "Email", url: "mailto:viet.phung@live.com", icon: "Mail" },
];

export const experiences: Experience[] = [
  {
    company: "Pandora Digital",
    role: "Backend Leader",
    period: "12/2022 - 01/2024",
    description: [
      "Responsible and makes decisions about system design, codebase design",
      "Build POC to demonstrate the feasibility of the solutions",
      "Estimate infrastructure cost and setup CI/CD flows",
      "Design and develop microservices system from scratch",
      "Mentoring and review code for members",
      "Co-op with Project Owner to manage project progress",
      "Manage AWS resources"
    ]
  },
  {
    company: "Pandora Digital",
    role: "Backend Developer, DevOps Engineer",
    period: "12/2021 - 12/2022",
    description: [
      "Participate in system design, codebase design",
      "Build POC to demonstrate the feasibility of the solutions",
      "Maintain and develop new features for current project (DEX with highest TVL $58.11M)",
      "Sync data from blockchain to database",
      "Work closely with SA and team leaders to enhance CI/CD flows and manage cloud resources (Azure)"
    ]
  },
  {
    company: "Everfit",
    role: "Backend Leader, DevOps Engineer",
    period: "02/2020 - 03/2022",
    description: [
      "Responsible for system design, codebase design",
      "Maintain and develop new features for current project",
      "Design and develop microservices system",
      "Maintain and develop CI/CD flows",
      "Mentoring and review code for members",
      "Work closely with Tech Lead and C-Levels to manage and optimize cost for Cloud Resources (Save 25% cost for company)"
    ]
  },
  {
    company: "Synova Solutions",
    role: "Backend Developer, DevOps Engineer",
    period: "08/2018 - 12/2019",
    description: [
      "Design and develop RESTful API, Socket API",
      "Setup and config servers for environments: Develop, Testing, Staging, Production",
      "Dockerization environments for team members working",
      "Setup CI/CD flows"
    ]
  },
  {
    company: "Tesse",
    role: "Backend Developer, DevOps Engineer",
    period: "12/2016 - 08/2018",
    description: [
      "Practicípate in system design, codebase design",
      "Develop RESTful API, Socket API, write unit tests and documents",
      "Load balancing, scaling system",
      "Responsible for scaling out system to serve a spike of 300,000 active users"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "TingMe",
    role: "Technical Leader",
    period: "12/2022 - 01/2024",
    company: "Pandora Digital",
    teamSize: "10",
    techStack: ["NodeJS (NestJS)", "Postgres", "MongoDB", "Redis", "Elasticsearch", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "AWS (EC2, VPC, S3, SNS, SQS)"],
    description: [
      "Responsible and makes decisions about system design, codebase design",
      "Build POC to demonstrate the feasibility of the solutions",
      "Design and develop microservices system from scratch",
      "Setup CI/CD flows and manage AWS resources"
    ]
  },
  {
    title: "Pandora",
    role: "Backend Developer",
    period: "12/2021 - 12/2022",
    company: "Pandora Digital",
    teamSize: "15",
    techStack: ["NodeJS (NestJS)", "Postgres", "GraphNode", "Redis", "Azure App Service"],
    description: [
      "Participate in system design, codebase design",
      "Maintain and develop new features for current project (DEX exchange)",
      "Sync data from blockchain to database",
      "Design and develop microservices system"
    ]
  },
  {
    title: "Plant vs Undead",
    role: "Freelance Backend Developer",
    period: "12/2021 - 06/2022",
    company: "Uptivistic",
    teamSize: "20",
    techStack: ["NodeJS", "SocketIO", "MongoDB", "Redis", "GraphNode", "Terraform", "Jenkins", "AWS (ECS, ECR, S3, SNS, SQS)"],
    description: [
      "Maintain and develop new features for current project",
      "Sync data from blockchain to database",
      "Design and develop microservices system"
    ]
  },
  {
    title: "Everfit",
    role: "Backend Leader",
    period: "02/2020 - 03/2022",
    company: "Everfit",
    teamSize: "10",
    techStack: ["NodeJS", "SocketIO", "MongoDB", "Redis", "Stripe", "Jenkins", "Docker Swarm", "AWS"],
    description: [
      "Practicípate in system design, codebase design",
      "Build POC to demonstrate the feasibility of the solutions",
      "Design and develop microservices system",
      "Maintain and develop CI/CD flows",
      "Support and guide and review code for members"
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    skills: ["NodeJS (NestJS, Express)", "TypeScript", "JavaScript", "Go", "Python"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL", "DynamoDB"]
  },
  {
    category: "Architecture & Microservices",
    skills: ["Microservices", "gRPC", "Message Queues (SNS/SQS, RabbitMQ)", "Event-Driven", "RESTful API", "Socket.io"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS (EC2, EKS, Lambda, S3)", "Docker & Kubernetes", "Terraform", "CI/CD (GitHub Actions, Jenkins)", "Azure"]
  },
  {
    category: "System Design Patterns",
    skills: ["Transactional Outbox", "CQRS", "Saga Pattern", "API Gateway", "Caching Strategies"]
  }
];

export const systemDesigns: SystemDesign[] = [
  {
    title: "Transactional Outbox Pattern",
    description: "Đảm bảo tính nhất quán dữ liệu giữa Database và Message Broker (Kafka/SNS/SQS).",
    problem: "Mất mát tin nhắn khi hệ thống crash sau khi commit DB nhưng chưa kịp publish message.",
    benefits: ["Exactly-once processing guarantee", "Reliable event-driven communication", "Decoupled services"]
  },
  {
    title: "CQRS (Command Query Responsibility Segregation)",
    description: "Tách biệt luồng ghi (Command) và luồng đọc (Query) để tối ưu hiệu năng.",
    problem: "Database contention khi lượng read/write đồng thời quá lớn và yêu cầu query phức tạp.",
    benefits: ["Scalability of read/write independently", "Optimized data schemas for queries", "Security and validation separation"]
  },
  {
    title: "Scalable Microservices Architecture",
    description: "Thiết kế hệ thống chịu tải cao với autoscaling và service discovery.",
    problem: "Monolithic bottleneck và khó khăn trong việc mở rộng các module cụ thể.",
    benefits: ["High availability", "Fault tolerance", "Easy deployment and scaling"]
  }
];
