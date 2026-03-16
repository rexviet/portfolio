import { Language } from './types'

interface Messages {
  nav: {
    home: string
    experience: string
    projects: string
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
    objective: string
    statTags: string[]
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
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
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
      titles: ['AI Native Engineer', 'Kỹ sư Backend & Platform', 'Kỹ sư DevOps', 'Kiến trúc hệ thống phân tán'],
      objective: 'Xây dựng các nền tảng backend và hạ tầng cloud có khả năng mở rộng cao, đồng thời đẩy mạnh AI-native engineering qua workflow automation, agentic orchestration và rapid prototyping.',
      statTags: ['AI-native', 'Node.js / TS', 'Microservices', 'DevOps / AWS'],
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
      title: 'Phùng Quốc Việt | AI Native Engineer Portfolio',
      description: 'Phùng Quốc Việt - AI Native Engineer (Backend, Platform & DevOps) với hơn 8 năm kinh nghiệm xây dựng distributed systems, microservices và cloud infrastructure.',
      ogTitle: 'Phùng Quốc Việt | AI Native Engineer Portfolio',
      ogDescription: 'Tập trung vào backend, platform engineering, microservices và AI-native workflows với 8+ năm kinh nghiệm.',
      twitterTitle: 'Phùng Quốc Việt | AI Native Engineer Portfolio',
      twitterDescription: 'Tập trung vào backend, platform engineering, microservices và AI-native workflows với 8+ năm kinh nghiệm.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
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
      titles: ['AI Native Engineer', 'Backend & Platform Engineer', 'DevOps Engineer', 'Distributed Systems Architect'],
      objective: 'Build highly scalable backend platforms and cloud infrastructure while accelerating AI-native engineering through workflow automation, agentic orchestration, and rapid prototyping.',
      statTags: ['AI-native', 'Node.js / TS', 'Microservices', 'DevOps / AWS'],
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
      title: 'Phung Quoc Viet | AI Native Engineer Portfolio',
      description: 'Phung Quoc Viet - AI Native Engineer (Backend, Platform & DevOps) with 8+ years building distributed systems, microservices, and cloud infrastructure.',
      ogTitle: 'Phung Quoc Viet | AI Native Engineer Portfolio',
      ogDescription: 'Focused on backend, platform engineering, microservices, and AI-native workflows with 8+ years of practical delivery.',
      twitterTitle: 'Phung Quoc Viet | AI Native Engineer Portfolio',
      twitterDescription: 'Focused on backend, platform engineering, microservices, and AI-native workflows with 8+ years of practical delivery.'
    }
  }
}
