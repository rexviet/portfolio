import { Language, LocalizedText, getLocalizedText } from '../i18n/types'

const l = (vi: string, en: string): LocalizedText => ({ vi, en })

export interface Experience {
  company: LocalizedText
  role: LocalizedText
  period: string
  location?: LocalizedText
  description: LocalizedText[]
}

export interface Project {
  title: LocalizedText
  role: LocalizedText
  period: string
  company: LocalizedText
  teamSize: string
  techStack: string[]
  description: LocalizedText[]
}

export interface SkillGroup {
  category: LocalizedText
  icon: 'code' | 'database' | 'architecture' | 'cloud' | 'patterns'
  skills: string[]
}

export interface SystemDesign {
  title: LocalizedText
  description: LocalizedText
  problem: LocalizedText
  benefits: LocalizedText[]
}

export interface Stat {
  label: LocalizedText
  value: string
  icon: string
}

export interface Social {
  platform: 'github' | 'email'
  label: LocalizedText
  url: string
  icon: 'Github' | 'Mail'
}

export const bio = {
  title: l('AI Native Engineer | Backend, Platform & DevOps', 'AI Native Engineer | Backend, Platform & DevOps'),
  description: l(
    'Kỹ sư backend và platform với hơn 8 năm kinh nghiệm xây dựng distributed systems, event-driven microservices, cloud infrastructure và CI/CD platform. Chuyên sâu Node.js, TypeScript, AWS và system design cho các sản phẩm SaaS, fitness, blockchain và media. Hiện tập trung chuyển dịch sang AI-native engineering thông qua workflow automation, rapid prototyping và agentic product exploration.',
    'Backend and platform engineer with 8+ years of experience building distributed systems, event-driven microservices, cloud infrastructure, and CI/CD platforms. Strong foundation in Node.js, TypeScript, AWS, DevOps, and scalable system design across SaaS, fitness, blockchain, and media products. Currently repositioning toward AI-native engineering through workflow automation, rapid prototyping, and agentic product exploration.'
  )
}

export const stats: Stat[] = [
  { label: l('Năm kinh nghiệm', 'Years of Experience'), value: '8+', icon: 'Calendar' },
  { label: l('Dự án hoàn thành', 'Projects Completed'), value: '15+', icon: 'Briefcase' },
  { label: l('Người dùng phục vụ cao nhất', 'Highest Users Served'), value: '300K+', icon: 'Users' },
  { label: l('TVL cao nhất quản lý', 'Highest TVL Managed'), value: '$58.11M', icon: 'TrendingUp' }
]

export const socials: Social[] = [
  { platform: 'github', label: l('GitHub', 'GitHub'), url: 'https://github.com/rexviet', icon: 'Github' },
  { platform: 'email', label: l('Email', 'Email'), url: 'mailto:rexviet@gmail.com', icon: 'Mail' }
]

export const experiences: Experience[] = [
  {
    company: l('Nghiên cứu độc lập & khám phá side hustle', 'Independent Research & Side Hustle Exploration'),
    role: l('Finance Domain / Product Discovery', 'Finance Domain / Product Discovery'),
    period: '02/2024 - Present',
    location: l('TP. Hồ Chí Minh, Việt Nam', 'Ho Chi Minh City, Vietnam'),
    description: [
      l('Nghiên cứu và kiểm chứng các cơ hội side hustle trong lĩnh vực tài chính, bao gồm problem discovery, market mapping và monetization experiments.', 'Researched and validated side-hustle opportunities in the finance domain, including problem discovery, market mapping, and monetization experiments.'),
      l('Thử nghiệm các workflow thiên về tự động hóa và ý tưởng sản phẩm tinh gọn để tăng hiệu quả nghiên cứu, triển khai và ra quyết định.', 'Explored automation-heavy workflows and lean product ideas to improve research, execution, and decision-making efficiency.'),
      l('Nâng cao tư duy sản phẩm, tốc độ thử nghiệm và khả năng tìm kiếm cơ hội phần mềm ở giao điểm giữa tài chính và AI-native workflows.', 'Deepened product thinking, rapid experimentation, and software opportunity exploration at the intersection of finance and AI-native workflows.')
    ]
  },
  {
    company: l('Pandora Digital', 'Pandora Digital'),
    role: l('Backend Lead', 'Backend Lead'),
    period: '12/2022 - 01/2024',
    description: [
      l('Chịu trách nhiệm và ra quyết định về thiết kế hệ thống, thiết kế codebase.', 'Responsible for system design and codebase design decisions.'),
      l('Xây dựng POC để chứng minh tính khả thi của giải pháp.', 'Built POCs to validate solution feasibility.'),
      l('Ước tính chi phí hạ tầng và thiết lập CI/CD flow.', 'Estimated infrastructure costs and set up CI/CD flows.'),
      l('Thiết kế và phát triển hệ thống microservices từ đầu.', 'Designed and developed microservices architecture from scratch.'),
      l('Mentor và review code cho thành viên.', 'Mentored team members and reviewed code.'),
      l('Phối hợp với Project Owner để quản lý tiến độ dự án.', 'Collaborated with Project Owner to manage delivery progress.'),
      l('Quản lý tài nguyên AWS.', 'Managed AWS resources.')
    ]
  },
  {
    company: l('Pandora Digital', 'Pandora Digital'),
    role: l('Backend Engineer / DevOps Engineer', 'Backend Engineer / DevOps Engineer'),
    period: '12/2021 - 12/2022',
    description: [
      l('Tham gia thiết kế hệ thống và codebase.', 'Participated in system and codebase design.'),
      l('Xây dựng POC để kiểm chứng giải pháp.', 'Built POCs to validate proposed solutions.'),
      l('Bảo trì và phát triển tính năng cho dự án DEX (TVL cao nhất $58.11M).', 'Maintained and delivered new features for a DEX project (peak TVL $58.11M).'),
      l('Đồng bộ dữ liệu blockchain vào database.', 'Synced blockchain data into databases.'),
      l('Làm việc với SA và team lead để cải thiện CI/CD và quản lý cloud trên Azure.', 'Worked with SA and team leads to improve CI/CD and cloud operations on Azure.')
    ]
  },
  {
    company: l('Everfit', 'Everfit'),
    role: l('Backend Lead / DevOps Engineer', 'Backend Lead / DevOps Engineer'),
    period: '02/2020 - 03/2022',
    description: [
      l('Chịu trách nhiệm thiết kế hệ thống và codebase.', 'Owned system design and codebase direction.'),
      l('Bảo trì và phát triển tính năng mới cho sản phẩm.', 'Maintained and developed product features.'),
      l('Thiết kế và xây dựng hệ thống microservices.', 'Designed and developed microservices architecture.'),
      l('Vận hành và cải tiến CI/CD flow.', 'Maintained and improved CI/CD workflows.'),
      l('Mentor và review code cho thành viên.', 'Mentored team members and reviewed code quality.'),
      l('Phối hợp với Tech Lead và C-level để tối ưu chi phí cloud (tiết kiệm 25%).', 'Partnered with Tech Lead and C-level executives to optimize cloud cost (saved 25%).')
    ]
  },
  {
    company: l('Synova Solutions', 'Synova Solutions'),
    role: l('Backend Engineer / DevOps Engineer', 'Backend Engineer / DevOps Engineer'),
    period: '08/2018 - 12/2019',
    description: [
      l('Thiết kế và phát triển RESTful API, Socket API.', 'Designed and developed RESTful APIs and Socket APIs.'),
      l('Thiết lập server cho môi trường Develop, Testing, Staging, Production.', 'Configured servers for Develop, Testing, Staging, and Production environments.'),
      l('Docker hóa môi trường làm việc cho team.', 'Dockerized team development environments.'),
      l('Thiết lập CI/CD flow.', 'Set up CI/CD workflows.')
    ]
  },
  {
    company: l('Tesse', 'Tesse'),
    role: l('Backend Engineer / DevOps Engineer', 'Backend Engineer / DevOps Engineer'),
    period: '12/2016 - 08/2018',
    description: [
      l('Tham gia thiết kế hệ thống và codebase.', 'Participated in system and codebase design.'),
      l('Phát triển RESTful API, Socket API, viết unit test và tài liệu.', 'Developed RESTful APIs and Socket APIs, wrote unit tests and documentation.'),
      l('Triển khai cân bằng tải và mở rộng hệ thống.', 'Implemented load balancing and system scaling strategies.'),
      l('Mở rộng hệ thống phục vụ đỉnh điểm 300,000 active users.', 'Scaled the platform to handle spikes of 300,000 active users.')
    ]
  }
]

export const projects: Project[] = [
  {
    title: l('TingMe', 'TingMe'),
    role: l('Technical Leader', 'Technical Leader'),
    period: '12/2022 - 01/2024',
    company: l('Pandora Digital', 'Pandora Digital'),
    teamSize: '10',
    techStack: ['NodeJS (NestJS)', 'Postgres', 'MongoDB', 'Redis', 'Elasticsearch', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'AWS (EC2, VPC, S3, SNS, SQS)'],
    description: [
      l('Ra quyết định về thiết kế hệ thống và codebase.', 'Led system design and codebase decisions.'),
      l('Xây dựng POC để chứng minh tính khả thi của giải pháp.', 'Built POCs to validate solution feasibility.'),
      l('Thiết kế và phát triển hệ thống microservices từ đầu.', 'Designed and developed microservices architecture from scratch.'),
      l('Thiết lập CI/CD và quản lý tài nguyên AWS.', 'Set up CI/CD pipelines and managed AWS resources.')
    ]
  },
  {
    title: l('Pandora', 'Pandora'),
    role: l('Backend Engineer', 'Backend Engineer'),
    period: '12/2021 - 12/2022',
    company: l('Pandora Digital', 'Pandora Digital'),
    teamSize: '15',
    techStack: ['NodeJS (NestJS)', 'Postgres', 'GraphNode', 'Redis', 'Azure App Service'],
    description: [
      l('Tham gia thiết kế hệ thống và codebase.', 'Participated in system and codebase design.'),
      l('Bảo trì và phát triển tính năng cho dự án DEX.', 'Maintained and developed features for a DEX platform.'),
      l('Đồng bộ dữ liệu blockchain vào database.', 'Synced blockchain data into databases.'),
      l('Thiết kế và phát triển hệ thống microservices.', 'Designed and developed microservices architecture.')
    ]
  },
  {
    title: l('Everfit', 'Everfit'),
    role: l('Backend Leader', 'Backend Leader'),
    period: '02/2020 - 03/2022',
    company: l('Everfit', 'Everfit'),
    teamSize: '10',
    techStack: ['NodeJS', 'SocketIO', 'MongoDB', 'Redis', 'Stripe', 'Jenkins', 'Docker Swarm', 'AWS'],
    description: [
      l('Tham gia thiết kế hệ thống và codebase.', 'Participated in system and codebase design.'),
      l('Xây dựng POC để chứng minh tính khả thi của giải pháp.', 'Built POCs to validate solution feasibility.'),
      l('Thiết kế và phát triển hệ thống microservices.', 'Designed and developed microservices architecture.'),
      l('Duy trì CI/CD flow và hỗ trợ review code cho thành viên.', 'Maintained CI/CD flows and guided code review across the team.')
    ]
  }
]

export const skillGroups: SkillGroup[] = [
  {
    category: l('Ngôn ngữ & Framework', 'Languages & Frameworks'),
    icon: 'code',
    skills: ['Node.js', 'TypeScript', 'Bash', 'NestJS', 'Express']
  },
  {
    category: l('Cơ sở dữ liệu', 'Databases'),
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch']
  },
  {
    category: l('Kiến trúc & Microservices', 'Architecture & Microservices'),
    icon: 'architecture',
    skills: ['Microservices', 'Event-Driven Architecture', 'CQRS', 'Transactional Outbox', 'Queues & Topics', 'Serverless']
  },
  {
    category: l('DevOps & Cloud', 'DevOps & Cloud'),
    icon: 'cloud',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'CI/CD (GitHub Actions, Jenkins)']
  },
  {
    category: l('Trọng tâm hiện tại', 'Current Focus'),
    icon: 'patterns',
    skills: ['AI-native workflows', 'Workflow automation', 'Agentic orchestration', 'Rapid product prototyping']
  }
]

export const systemDesigns: SystemDesign[] = [
  {
    title: l('Transactional Outbox Pattern', 'Transactional Outbox Pattern'),
    description: l(
      'Đảm bảo tính nhất quán dữ liệu giữa Database và Message Broker (Kafka/SNS/SQS).',
      'Ensures data consistency between the database and the message broker (Kafka/SNS/SQS).'
    ),
    problem: l(
      'Tránh mất mát tin nhắn khi hệ thống crash sau khi commit DB nhưng chưa kịp publish message.',
      'Prevents message loss when a system crashes after DB commit but before message publish.'
    ),
    benefits: [
      l('Đảm bảo xử lý exactly-once', 'Exactly-once processing guarantee'),
      l('Giao tiếp event-driven tin cậy', 'Reliable event-driven communication'),
      l('Giảm coupling giữa các service', 'Decoupled services')
    ]
  },
  {
    title: l('CQRS (Command Query Responsibility Segregation)', 'CQRS (Command Query Responsibility Segregation)'),
    description: l(
      'Tách biệt luồng ghi (Command) và luồng đọc (Query) để tối ưu hiệu năng.',
      'Separates write (Command) and read (Query) flows for performance optimization.'
    ),
    problem: l(
      'Giảm tranh chấp database khi tải read/write lớn và truy vấn phức tạp.',
      'Reduces database contention under heavy concurrent read/write and complex query workloads.'
    ),
    benefits: [
      l('Mở rộng read/write độc lập', 'Independent read/write scalability'),
      l('Tối ưu schema theo từng use-case truy vấn', 'Optimized data schemas for query use-cases'),
      l('Tách biệt bảo mật và validation rõ ràng', 'Clear separation of security and validation concerns')
    ]
  },
  {
    title: l('Scalable Microservices Architecture', 'Scalable Microservices Architecture'),
    description: l(
      'Thiết kế hệ thống chịu tải cao với autoscaling và service discovery.',
      'Designs high-throughput systems with autoscaling and service discovery.'
    ),
    problem: l(
      'Giải quyết nghẽn cổ chai từ monolithic và khó mở rộng theo module.',
      'Addresses monolithic bottlenecks and poor module-level scalability.'
    ),
    benefits: [
      l('Sẵn sàng cao', 'High availability'),
      l('Khả năng chịu lỗi tốt', 'Fault tolerance'),
      l('Triển khai và mở rộng dễ dàng', 'Easy deployment and scaling')
    ]
  }
]

export const localize = (text: LocalizedText, language: Language): string => {
  return getLocalizedText(text, language)
}
