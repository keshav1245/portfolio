export const profile = {
  name: "Keshav Tangri",
  alias: "Kesh",
  title: "Software Engineer",
  tagline: "Building production-grade backend systems that scale.",
  location: "Canberra (ACT), Australia",
  email: "tangri57@gmail.com",
  phone: "+61 402 719 909",
  linkedin: "https://www.linkedin.com/in/keshav-t-7ab782104/",
  github: "https://github.com/keshav1245",
  medium: "https://medium.com/@zukayu",
  summary: `Software engineer with a track record of shipping real systems at research institutions and enterprise scale. Currently architecting production microservices at ANU's Research School of Physics, where I've built authentication platforms, containerised deployments, and data pipelines used daily by scientists. Before ANU, I led cross-functional engineering teams at a Bangalore-based product company, serving 90K+ users for a top-3 US pharmaceutical client. I graduated with Commendation from ANU's Master of Computing (Data Science) — and I'm now seeking backend or full-stack engineering roles where I can create immediate, measurable impact.`,
};

export const skills = {
  "Languages": ["Python", "Java", "JavaScript", "PHP"],
  "Backend": ["FastAPI", "Node.js", "REST APIs", "GraphQL", "Microservices", "OIDC/Auth", "Celery", "RabbitMQ"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  "Frontend": ["ReactJS", "Svelte", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
  "DevOps": ["Docker", "Docker Compose", "Linux", "Cron Jobs"],
  "Cloud & Storage": ["AWS S3", "AWS SDK"],
  "AI / ML": ["TensorFlow", "PyTorch", "Keras", "Matplotlib", "Plotly", "Scikit-learn", "Pandas", "NumPy"],
  "Tooling": ["Git", "JIRA", "Confluence", "Notion", "Power BI", "Android Studio", "Postman"],
};

export const experience = [
  {
    role: "Software Development Officer",
    company: "Research School of Physics, ANU",
    period: "Dec 2025 - Present",
    type: "Contract",
    location: "Canberra, AU",
    highlights: [
      "Architected a microservices platform for provenance tracking of physical research samples using FastAPI, MongoDB, and ReactJS - adopted by researchers across the department.",
      "Engineered a multi-node MongoDB replica set in Docker Compose, ensuring zero-downtime resilience and automated point-in-time backup/recovery via Python cron pipelines.",
      "Designed and deployed Centre-Auth: a centralised IAM platform with OIDC authentication and RBAC, replacing insecure basic-auth across 5+ internal services.",
      "Translated complex experimental workflows into scalable backend infrastructure in close collaboration with research scientists.",
    ],
    stack: ["FastAPI", "MongoDB", "ReactJS", "Docker", "Keycloak", "PostgreSQL", "Svelte", "Python"],
  },
  {
    role: "Academic Tutor",
    company: "School of Computing, ANU",
    period: "Feb 2025 - Present",
    type: "Contract",
    location: "Canberra, AU",
    highlights: [
      "Teaching 150+ students across Java, data structures, Android development, UML, design patterns, and data wrangling.",
      "Driving course quality improvement through structured student feedback loops and regular course convenor collaboration.",
    ],
    stack: ["Java", "Android", "Data Structures", "Data Wrangling", "Design Patterns"],
  },
  {
    role: "Senior Software Engineer",
    company: "Iconiq Skills India Pvt. Ltd.",
    period: "Apr 2021 - Jan 2024",
    type: "Full-time",
    location: "Bangalore, India",
    highlights: [
      "Served as the primary technical contact for a top-3 US pharmaceutical enterprise client, coordinating a 15-member cross-functional team across US time zones.",
      "Led a full video player overhaul - replacing a legacy system with VideoJS + MUX adaptive streaming, multilingual captions in 6+ languages, and in-app note-taking - boosting engagement by 40% for 90K+ users.",
      "Built full-stack platform features including a learning path engine, user dashboards, Stripe coupon generator, and 15+ API integrations (Razorpay, Stripe, Affirm EMI, LeadSquared, Intercom CRM).",
      "Designed and delivered bulk asset upload middleware to AWS S3 with asynchronous progress tracking and recovery mechanisms.",
    ],
    stack: ["JavaScript", "PHP", "MySQL", "VideoJS", "MUX", "Stripe", "Razorpay", "AWS S3", "Bootstrap"],
  },
  {
    role: "Software Development Eengineer",
    company: "Indian Institute of Technology (IIT), Mandi",
    period: "Jan 2021 - Jun 2021",
    type: "Full-time",
    location: "Himachal Pradesh, India",
    highlights: [
      "Built a Python/Tkinter desktop application for agricultural phenotyping, visualising crop monitoring data from 20+ IoT field nodes using Plotly.",
      "Designed an OTA (Over-the-Air) update system and data acquisition pipeline integrating IoT devices with Linux-based backend systems.",
      "Delivered end-to-end research tooling in Python, Java (Android), and PHP in collaboration with researchers and postdoctoral students.",
    ],
    stack: ["Python", "Tkinter", "Plotly", "Raspberry Pi", "PHP", "MySQL", "Firebase", "Java", "Android"],
  },
];

export const projects = [
  {
    name: "CTLabID",
    org: "Dept. of Material Physics, ANU",
    category: "Research Infrastructure",
    description: "Full-stack microservices platform for managing provenance and lifecycle of physical research samples - built from scratch and deployed in production.",
    bullets: [
      "Microservices architecture with FastAPI, MongoDB replica sets, and ReactJS frontend",
      "Advanced search/filter with autocompletion and debouncing",
      "Point-in-time backup and recovery scripts automated via cron",
      "Custom error handling, logging middleware, and data schema design",
    ],
    stack: ["FastAPI", "MongoDB", "ReactJS", "Docker"],
    featured: true,
  },
  {
    name: "Centre-Auth",
    org: "Dept. of Material Physics, ANU",
    category: "Identity & Access Management",
    description: "Centralised IAM platform built on Keycloak, replacing insecure basic-auth across five internal services with OIDC and RBAC.",
    bullets: [
      "OIDC-based authentication and fine-grained RBAC",
      "Secured 5+ microservices with zero downtime migration",
      "Automated backup and admin management tooling",
    ],
    stack: ["Keycloak", "OIDC", "RBAC", "Docker"],
    featured: true,
  },
  {
    name: "Penwell",
    org: "Penwell Pvt. Ltd.",
    category: "EdTech",
    description: "NLP-powered literacy analytics platform delivering actionable insights for educational stakeholders.",
    bullets: [
      "Led a cross-functional team of 5 to deliver an NLP-based analytics platform for a real-world client.",
      "Improved team delivery efficiency, increasing sprint velocity from 35 to 50 story points.",
      "Designed and developed backend services using Django and Python for scalable data processing.",
      "Collaborated closely with stakeholders to translate requirements into structured workflows and deliverables.",
      "Managed project execution using Agile practices including sprint planning, Kanban tracking, and risk analysis.",
    ],
    stack: ["Django", "Python", "AngularJS", "PostgreSQL", "Agile"],
    featured: true,
  },
  {
    name: "Enterprise Media Player",
    org: "Iconiq Skills India Pvt. Ltd.",
    category: "EdTech",
    description: "End-to-end overhaul of a video platform serving 90K+ users - replacing legacy playback with adaptive streaming, AI-generated captions, and in-app learning tools.",
    bullets: [
      "VideoJS + MUX adaptive multi-quality encoding (.m3u8 format)",
      "AI-powered captions in 6+ languages via Maestra integration",
      "In-app note-taking and community forum features",
      "40% improvement in user engagement",
    ],
    stack: ["JavaScript", "PHP", "VideoJS", "MUX", "Bootstrap"],
    featured: true,
  },
  {
    name: "Smart Library App",
    org: "Australian National University",
    category: "Mobile / Android",
    description: "Led a team of 5 to build a mobile library application from requirements to production-ready release with 80% test coverage.",
    bullets: [
      "GPS integration, real-time book availability, custom tokenizer/parser search",
      "AVL Tree data structure for optimised retrieval (3K+ books, 100+ users)",
      "Singleton, DAO, Factory patterns with MVC and TDD principles",
      "80% code coverage with Espresso UI and unit tests via JUnit 4",
    ],
    stack: ["Java", "Android", "Firebase", "GitLab"],
    featured: false,
  },
  {
    name: "FarmerZone",
    org: "IIT Mandi",
    category: "IoT / Data Science",
    description: "Agricultural phenotyping research platform integrating IoT field nodes, automated OTA updates, and real-time data pipelines.",
    bullets: [
      "Hierarchical IoT node network with Raspberry Pi",
      "Automated data acquisition pipelines and OTA updates via Firebase",
      "Android app and website for 20+ sensor data visualisation",
      "Plotly integration for interactive time-series visualisation",
      "Database design and schema management for sensor data",
    ],
    stack: ["Python", "Firebase", "Raspberry Pi", "Arduino", "Android"],
    featured: false,
  },
  {
    name: "Social Media Campaign Analyser",
    org: "Australian National University",
    category: "SaaS / Marketing",
    description: "Independent SaaS platform enabling enterprises to create campaigns, polls, and surveys to capture leads and expand business reach.",
    bullets: [
      "Django backend with PostgreSQL and ReactJS frontend",
      "Campaign, poll, and survey management with lead analytics",
    ],
    stack: ["Django", "PostgreSQL", "ReactJS"],
    featured: false,
  },
];

export const education = [
  {
    degree: "Master of Computing",
    major: "Data Science",
    institution: "Australian National University",
    period: "2024 - 2025",
    grade: "6.64 / 7.0 - Graduated with Commendation",
    scholarship: "Vice Chancellor's International Scholarship (50%)",
    coursework: ["Structured Programming", "Software Construction", "Relational Databases", "Data Wrangling", "Data Mining", "Document Analysis", "Artificial Intelligence"],
  },
  {
    degree: "Bachelor of Engineering",
    major: "Computer Science & Engineering",
    institution: "Panjab University",
    period: "2017 - 2021",
    grade: "9.53 / 10.0 - Graduated with Honours",
    scholarship: "2nd rank at college level, 3rd rank at university level - featured in college prospectus",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Database Management Systems", "Computer Networks", "Software Engineering"],
  },
];

export const certifications = [
  "Deep Learning Specialisation - Coursera (DeepLearning.AI)",
  "Machine Learning - Stanford Online (Coursera)",
  "The Modern GraphQL Bootcamp - Udemy (Andrew Mead)",
  "The Complete Node.js Developer Course - Udemy (Andrew Mead)",
  "Convolutional Neural Networks in TensorFlow - Coursera",
  "The Web Developer Bootcamp 2021 - Udemy (Colt Steele)",
  "Complete Python Bootcamp - Udemy (Jose Portilla)",
];

export const achievements = [
  { label: "IELTS", value: "8.5 / 9", date: "Feb 2026" },
  { label: "GRE", value: "315 / 340", detail: "163Q + 152V + 4.0 AWA", date: "Nov 2022" },
  { label: "GPA", value: "6.64 / 7.0", detail: "ANU - Commendation" },
  { label: "B.E. GPA", value: "9.53 / 10.0", detail: "Panjab University - Hons, 2nd college rank" },
];
