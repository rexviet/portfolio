import { Language } from './types'

interface Messages {
  nav: {
    home: string
    about: string
    experience: string
    projects: string
    skills: string
    systemDesign: string
    contact: string
  }
  sections: {
    about: string
    experience: string
    projects: string
    skills: string
    systemDesign: string
    contact: string
  }
  hero: {
    command: string
    titles: string[]
    manifesto: string
    objective: string
    statTags: string[]
    status: string
    panelKicker: string
    panelNote: string
    terminalTitle: string
    terminalLines: string[]
    techStackLabel: string
    optimizationLabel: string
    contactCta: string
    projectsCta: string
    languageLabel: string
  }
  common: {
    members: string
    builtWith: string
    visitOn: string
    yearSuffix: string
  }
  systemDesign: {
    problemLabel: string
    benefitsLabel: string
  }
  contact: {
    heading: string
    intro: string
    fullNameLabel: string
    emailLabel: string
    messageLabel: string
    fullNamePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    submit: string
    submitAria: string
    successAlert: string
  }
  metadata: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    twitterTitle: string
    twitterDescription: string
  }
}

export const messagesByLanguage: Record<Language, Messages> = {
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Về tôi',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      systemDesign: 'Thiết kế hệ thống',
      contact: 'Liên hệ'
    },
    sections: {
      about: 'Về tôi',
      experience: 'Nơi tôi đã làm việc',
      projects: 'Một số dự án tiêu biểu',
      skills: 'Kỹ năng kỹ thuật',
      systemDesign: 'Tư duy thiết kế hệ thống',
      contact: 'Kết nối'
    },
    hero: {
      command: 'xin_chao.exe',
      titles: ['Trưởng nhóm Backend', 'Kỹ sư DevOps', 'Kiến trúc sư hệ thống', 'Chuyên gia Microservices'],
      manifesto: 'Engineering scalable systems for 300,000+ active users.',
      objective: 'Đóng góp năng lực Back-end, hệ thống và DevOps tại một môi trường vững mạnh, đồng thời phát triển để trở thành Solution Architect xuất sắc trong tương lai.',
      statTags: ['CQRS', 'NestJS', 'Microservices', 'DevOps / AWS'],
      status: 'Sẵn sàng cho backend leadership và platform engineering',
      panelKicker: 'Tác động tiêu biểu',
      panelNote: 'Kết hợp tư duy kiến trúc, delivery thực chiến và vận hành cloud để biến hệ thống phức tạp thành sản phẩm ổn định.',
      terminalTitle: 'terminal.console',
      terminalLines: [
        '$ whoami -> backend-leader/devops-engineer',
        '$ focus -> microservices, cloud, system design',
        '$ learning -> rust for performance-critical systems'
      ],
      techStackLabel: 'Platform toolkit',
      optimizationLabel: 'Optimization',
      contactCta: 'Liên hệ tôi',
      projectsCta: 'Xem dự án',
      languageLabel: 'Ngôn ngữ'
    },
    common: {
      members: 'thành viên',
      builtWith: 'Xây dựng với',
      visitOn: 'Truy cập Phùng Quốc Việt trên',
      yearSuffix: 'Bản quyền'
    },
    systemDesign: {
      problemLabel: 'Bài toán giải quyết',
      benefitsLabel: 'Giá trị chính'
    },
    contact: {
      heading: 'Say Hello!',
      intro: 'Bạn có một dự án thú vị cần ý tưởng Backend đột phá, hay chỉ đơn giản là muốn thảo luận về System Design? Tôi luôn sẵn sàng lắng nghe và kết nối.',
      fullNameLabel: 'Họ và tên',
      emailLabel: 'Địa chỉ email',
      messageLabel: 'Nội dung',
      fullNamePlaceholder: 'Phùng Quốc Việt',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: 'Cùng nhau xây dựng điều tuyệt vời nhé!',
      submit: 'Gửi tin nhắn',
      submitAria: 'Gửi tin nhắn liên hệ',
      successAlert: 'Cảm ơn bạn đã liên hệ! (Chế độ demo)'
    },
    metadata: {
      title: 'Phùng Quốc Việt | Portfolio Backend Leader & DevOps',
      description: 'Phùng Quốc Việt - Backend Leader & DevOps Engineer với hơn 7 năm kinh nghiệm xây dựng hệ thống Microservices, kiến trúc Scalable và tối ưu hạ tầng Cloud.',
      ogTitle: 'Phùng Quốc Việt | Portfolio Backend Leader & DevOps',
      ogDescription: 'Chuyên sâu về Microservices, System Design và kiến trúc chịu tải cao với hơn 7 năm kinh nghiệm.',
      twitterTitle: 'Phùng Quốc Việt | Portfolio Backend Leader & DevOps',
      twitterDescription: 'Chuyên sâu về Microservices, System Design và kiến trúc chịu tải cao với hơn 7 năm kinh nghiệm.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      systemDesign: 'System Design',
      contact: 'Contact'
    },
    sections: {
      about: 'About Me',
      experience: "Where I've Worked",
      projects: "Some Things I've Built",
      skills: 'Technical Skills',
      systemDesign: 'System Design Philosophy',
      contact: 'Get In Touch'
    },
    hero: {
      command: 'hello_world.exe',
      titles: ['Backend Leader', 'DevOps Engineer', 'System Architect', 'Microservices Expert'],
      manifesto: 'Engineering scalable systems for 300,000+ active users.',
      objective: 'To contribute my back-end, systems, and DevOps expertise in a strong company and grow into an outstanding Solution Architect.',
      statTags: ['CQRS', 'NestJS', 'Microservices', 'DevOps / AWS'],
      status: 'Open to backend leadership and platform engineering roles',
      panelKicker: 'Selected impact',
      panelNote: 'Combining architecture thinking, delivery discipline, and cloud operations to turn complex systems into dependable products.',
      terminalTitle: 'terminal.console',
      terminalLines: [
        '$ whoami -> backend-leader/devops-engineer',
        '$ focus -> microservices, cloud, system design',
        '$ learning -> rust for performance-critical systems'
      ],
      techStackLabel: 'Platform toolkit',
      optimizationLabel: 'Optimization',
      contactCta: 'Contact Me',
      projectsCta: 'View Projects',
      languageLabel: 'Language'
    },
    common: {
      members: 'members',
      builtWith: 'Built with',
      visitOn: 'Visit Phung Quoc Viet on',
      yearSuffix: 'Copyright'
    },
    systemDesign: {
      problemLabel: 'Problem it solves',
      benefitsLabel: 'Key Benefits'
    },
    contact: {
      heading: 'Say Hello!',
      intro: 'If you have an ambitious backend idea or simply want to discuss system design, I am always ready to connect.',
      fullNameLabel: 'Full Name',
      emailLabel: 'Email address',
      messageLabel: 'Message',
      fullNamePlaceholder: 'Phung Quoc Viet',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: "Let's build something awesome!",
      submit: 'Send Message',
      submitAria: 'Send contact message',
      successAlert: 'Thank you for reaching out! (Demo mode)'
    },
    metadata: {
      title: 'Phung Quoc Viet | Backend Leader & DevOps Portfolio',
      description: 'Phung Quoc Viet - Backend Leader & DevOps Engineer with 7+ years building scalable microservices systems and cloud infrastructure.',
      ogTitle: 'Phung Quoc Viet | Backend Leader & DevOps Portfolio',
      ogDescription: 'Focused on Microservices, System Design, and scalable architectures with 7+ years of practical delivery.',
      twitterTitle: 'Phung Quoc Viet | Backend Leader & DevOps Portfolio',
      twitterDescription: 'Focused on Microservices, System Design, and scalable architectures with 7+ years of practical delivery.'
    }
  }
}
