// Portfolio data extracted from CV and portfolio docs

export const aboutMe = {
  name: "Umar Syarif",
  title: "Product-minded Software Engineer",
  subtitle: "Industrial Management Master's Student",
  bio: "Product-oriented Software Engineer with 3+ years of experience in developing large-scale web applications. Currently advancing expertise through a Master's program in Industrial Management. I combine strong technical execution with business insight in strategy, analytics, and service optimization. Passionate about building scalable, user-centered solutions that create measurable business value.",
  tagline: "Full-stack Development · Automation · AI Workflows · Product Engineering",
  location: "Jinju, South Korea",
  degree: "S.Kom — Informatics Engineering",
  education: "UIN Sultan Syarif Kasim Riau, Indonesia",
  currentStudy: "M.M — Industrial Management @ Gyeongsang National University",
  links: {
    email: "umarsyarif1607@gmail.com",
    linkedin: "linkedin.com/in/umarsyariif",
    github: "github.com/umarsyarif",
  },
};

export const experiences = [
  {
    id: "tsp",
    company: "The Software Practice Pte. Ltd",
    location: "Singapore (Remote)",
    role: "Software Development Engineer",
    period: "Sep 2021 – Aug 2024",
    duration: "3 years",
    highlights: [
      "Led frontend development for large-scale responsive web application in Agile SDLC environment",
      "Implemented UI for 50+ screens based on wireframes, ensuring pixel-perfect design accuracy",
      "Designed and implemented frontend architecture for SSR application using Alpine.js and Razor Pages",
      "Contributed to backend development using .NET framework",
      "Established and maintained unit testing infrastructure, achieving 75%+ test pass rate",
      "Initiated automated UI regression testing, maintaining 80%+ passing rate",
      "Thrived in remote cross-country work environment with distributed teams",
    ],
  },
  {
    id: "digistlab",
    company: "Digistlab",
    location: "Pekanbaru, Indonesia",
    role: "Web Developer Intern",
    period: "Jan 2020 – Jul 2020",
    duration: "7 months",
    highlights: [
      "Developed web-based application for new student admission at STAI Auliaurrasyidin Tembilahan",
      "Built full-stack features using Laravel and Vue.js",
      "Communicated with stakeholders to analyze system requirements",
      "Delivered production application meeting client specifications",
    ],
  },
];

export const skills = [
  {
    id: "frontend",
    category: "Frontend",
    color: "#6d5df6",
    tint: "var(--color-soft-purple)",
    icon: "lucide:code",
    items: ["Vue.js", "Alpine.js", "React", "Responsive Design", "SSR", "Tailwind CSS"],
  },
  {
    id: "backend",
    category: "Backend",
    color: "#1d7df8",
    tint: "var(--color-soft-blue)",
    icon: "lucide:server",
    items: [".NET", "Node.js", "Laravel", "C#", "PHP"],
  },
  {
    id: "automation",
    category: "Automation & AI",
    color: "#16a34a",
    tint: "var(--color-soft-green)",
    icon: "lucide:zap",
    items: ["n8n", "OpenAI", "Workflow Automation", "API Integration"],
  },
  {
    id: "database",
    category: "Database",
    color: "#f59e0b",
    tint: "var(--color-soft-yellow)",
    icon: "lucide:database",
    items: ["PostgreSQL", "MySQL", "Database Design"],
  },
  {
    id: "devops",
    category: "Infrastructure",
    color: "#f97316",
    tint: "var(--color-soft-orange)",
    icon: "lucide:cloud",
    items: ["Docker", "Linux", "Cloud Computing", "AWS", "Alibaba Cloud", "GCP"],
  },
  {
    id: "testing",
    category: "Testing & QA",
    color: "#dc2626",
    tint: "var(--color-soft-red)",
    icon: "lucide:check-circle",
    items: ["Unit Testing", "Automated UI Regression", "Test-Driven Development"],
  },
];

export const achievements = [
  {
    id: "sejong-hackathon",
    title: "Sejong Global Idea Hackathon 2025",
    subtitle: "1st Place | Software Engineer",
    location: "Seoul, South Korea",
    description: "Designed and implemented core frontend features for a prototype that won 1st place among international teams. Translated business ideas into a functional prototype under limited time constraints. Evaluated among global participants by industry and academic experts.",
    icon: "lucide:trophy",
    iconColor: "#fbbf24",
    date: "2025",
  },
  {
    id: "alibaba-cert",
    title: "Alibaba Cloud Computing Certification",
    subtitle: "Cloud Architecture & Services",
    location: "Online",
    description: "Demonstrated foundational knowledge of cloud computing concepts, Alibaba Cloud services, and cloud architecture. Covered core areas including compute, storage, networking, security, and cloud deployment models.",
    icon: "lucide:award",
    iconColor: "#a78bfa",
    date: "2023",
  },
  {
    id: "aws-cert",
    title: "AWS Cloud & Back-End Developer Certification",
    subtitle: "Cloud Practitioner + Architecting on AWS",
    location: "Online",
    description: "Cloud Practitioner Essentials and Architecting on AWS. Applied cloud fundamentals to support scalable and reliable application development.",
    icon: "lucide:award",
    iconColor: "#a78bfa",
    date: "2021",
  },
  {
    id: "backend-cert",
    title: "Back-End Developer Certification",
    subtitle: "Dicoding x IDCamp Indosat Ooredo",
    location: "Online",
    description: "Mastered SOLID programming principles, Git basics, JavaScript fundamentals, and back-end application development. Strong foundation in backend architecture and best practices.",
    icon: "lucide:award",
    iconColor: "#a78bfa",
    date: "2021",
  },
  {
    id: "gcp-cert",
    title: "#JuaraGCP Crash Course",
    subtitle: "Google Cloud Platform & Qwiklabs",
    location: "Online",
    description: "Set up and configure cloud environments in Google Cloud. Created and managed cloud resources, Docker containerization, and cloud monitoring.",
    icon: "lucide:award",
    iconColor: "#a78bfa",
    date: "2021",
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Korean", level: "Elementary" },
];
