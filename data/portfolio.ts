import type {
  ExperienceItem,
  NavItem,
  Project,
  Service,
  SkillGroup,
  SocialLink,
  Stat,
  Testimonial,
} from "@/src/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const quickStats: Stat[] = [
  { value: "20+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "AI + Full Stack", label: "Expertise" },
  { value: "Freelance / Remote", label: "Available Now" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Crafting refined interfaces with performance, accessibility, and motion in mind.",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "Backend",
    description: "Designing robust services, APIs, and scalable application architectures.",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "GraphQL", "Authentication", "Microservices"],
  },
  {
    title: "AI / Machine Learning",
    description: "Shipping practical AI products from prototype through production deployment.",
    skills: ["OpenAI API", "LangChain", "LLM Applications", "Chatbots", "AI Agents", "Vector Databases", "RAG Systems", "Prompt Engineering", "Automation"],
  },
  {
    title: "Database",
    description: "Selecting and tuning the right data layer for modern product needs.",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Redis"],
  },
  {
    title: "DevOps / Tools",
    description: "Creating fast delivery pipelines and dependable cloud infrastructure.",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Render", "CI/CD", "Linux"],
  },
  {
    title: "Design",
    description: "Bridging product thinking and engineering to produce cohesive digital experiences.",
    skills: ["UI/UX Design", "Responsive Design", "Design Systems", "Figma to Code"],
  },
];

export const projects: Project[] = [
  {
    title: "AI Chatbot SaaS Platform",
    description: "A subscription-ready assistant platform with usage analytics, workspace management, authentication, and multi-model orchestration.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe", "PostgreSQL"],
    features: ["LLM-powered chat", "Team dashboards", "Usage metering", "Secure auth flows"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "from-cyan-400/60 via-blue-500/50 to-violet-500/60",
  },
  {
    title: "AI Resume Analyzer",
    description: "A resume intelligence application that extracts skills, scores fit, and recommends improvements in real time.",
    stack: ["React", "Node.js", "Python", "NLP", "Supabase"],
    features: ["Resume parsing", "Skill gap analysis", "Role matching", "Instant improvement tips"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "from-emerald-400/60 via-teal-500/50 to-cyan-500/60",
  },
  {
    title: "Ecommerce Web App",
    description: "A polished commerce experience with payment orchestration, admin workflows, and inventory-aware product operations.",
    stack: ["Next.js", "Node.js", "Stripe", "Redis", "PostgreSQL"],
    features: ["Product CMS", "Realtime cart", "Payments", "Admin analytics"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "from-fuchsia-400/60 via-violet-500/50 to-sky-500/60",
  },
  {
    title: "AI Content Generator",
    description: "A content studio that produces blogs, launch copy, email campaigns, and social snippets with reusable brand voices.",
    stack: ["Next.js", "LangChain", "OpenAI API", "MongoDB", "Vercel"],
    features: ["Brand-safe prompts", "Template library", "Export workflows", "Collaboration tools"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "from-violet-400/60 via-purple-500/50 to-blue-500/60",
  },
  {
    title: "Automation Dashboard",
    description: "An orchestration console for AI-triggered workflows, queue monitoring, API jobs, and business process automation.",
    stack: ["TypeScript", "FastAPI", "Redis", "Docker", "AWS"],
    features: ["Workflow builder", "Job telemetry", "Webhook routing", "Role-based access"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "from-blue-400/60 via-indigo-500/50 to-violet-500/60",
  },
];

export const services: Service[] = [
  {
    title: "Full Stack Web Development",
    description: "Production-grade product builds with modern frontend architecture and dependable backend systems.",
    icon: "layers",
  },
  {
    title: "AI Chatbot Development",
    description: "Intelligent conversational products with retrieval, business logic, and delightful UX.",
    icon: "bot",
  },
  {
    title: "AI SaaS Product Development",
    description: "End-to-end AI startup builds, from product strategy and MVP delivery to scalable launch-ready systems.",
    icon: "sparkles",
  },
  {
    title: "Backend API Development",
    description: "Secure, scalable APIs with observability, integrations, and clean data contracts.",
    icon: "server",
  },
  {
    title: "Automation System Development",
    description: "Workflow engines and AI-assisted automations that eliminate repetitive operations.",
    icon: "workflow",
  },
  {
    title: "UI/UX Website Design",
    description: "Premium interfaces with thoughtful hierarchy, motion, conversion intent, and brand depth.",
    icon: "penTool",
  },
  {
    title: "Dashboard Development",
    description: "Data-rich internal tools and analytics dashboards built for speed, clarity, and adoption.",
    icon: "layoutDashboard",
  },
  {
    title: "Cloud Deployment",
    description: "Reliable deployments and cloud architecture across Vercel, AWS, containers, and CI/CD pipelines.",
    icon: "cloud",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    year: "2026",
    title: "Senior Full Stack AI Engineer",
    company: "Independent Consultant",
    description: "Leading AI-native product builds for startups, automations for teams, and premium SaaS experiences from concept to launch.",
    technologies: ["Next.js", "OpenAI", "AWS", "PostgreSQL"],
  },
  {
    year: "2025",
    title: "AI Integrations Specialist",
    company: "Product & Growth Teams",
    description: "Designed LLM workflows, embedded copilots, and workflow automations that improved internal velocity and customer support outcomes.",
    technologies: ["LangChain", "RAG", "Python", "Node.js"],
  },
  {
    year: "2024",
    title: "Full Stack Product Engineer",
    company: "SaaS and Ecommerce Projects",
    description: "Built scalable web applications with authentication, billing, dashboards, and operational admin tooling.",
    technologies: ["React", "TypeScript", "Stripe", "Redis"],
  },
  {
    year: "2023",
    title: "Freelance Developer",
    company: "Clients & Founders",
    description: "Delivered custom websites, automation workflows, and technical prototypes for founders validating new ideas.",
    technologies: ["JavaScript", "Figma", "Firebase", "Vercel"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    role: "Startup Founder",
    company: "SignalForge AI",
    quote: "The product quality felt well above startup speed. We got a polished AI workflow platform that investors and customers both understood instantly.",
    rating: 5,
  },
  {
    name: "David Cole",
    role: "Product Manager",
    company: "Northbeam Labs",
    quote: "Strong engineering judgment, clean delivery, and a real eye for product UX. Complex AI features were turned into something customers could actually use.",
    rating: 5,
  },
  {
    name: "Priya Raman",
    role: "Business Client",
    company: "FlowCircuit",
    quote: "From backend reliability to frontend polish, the whole experience felt premium. The automation system saved our team hours every week.",
    rating: 5,
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter/X", href: "https://x.com" },
];

export const contactDetails = {
  email: "hello@ai-engineer.dev",
  phone: "+1 (555) 010-2026",
  location: "Remote · Worldwide",
};
