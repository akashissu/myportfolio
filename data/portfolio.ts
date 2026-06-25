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
  { id: "testimonials", label: "Proof" },
  { id: "contact", label: "Contact" },
];

export const quickStats: Stat[] = [
  { value: "20+", label: "Products shipped" },
  { value: "3+", label: "Years building" },
  { value: "AI + Full Stack", label: "Execution layer" },
  { value: "<200ms", label: "Realtime UX mindset" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Product Engineering",
    description: "From LLM workflows to production-safe UX, I turn AI features into software people can trust and actually use.",
    skills: ["OpenAI API", "LangChain", "RAG Systems", "AI Agents", "Prompt Engineering", "Evaluation Loops", "Vector Databases", "Streaming UX"],
  },
  {
    title: "Frontend Systems",
    description: "Interfaces with strong hierarchy, fast rendering, and motion that supports clarity instead of distracting from it.",
    skills: ["React", "Next.js", "TypeScript", "Framer Motion", "Design Systems", "Accessibility", "Responsive UI", "CSS Architecture"],
  },
  {
    title: "Backend & APIs",
    description: "Reliable service layers for auth, data, events, payments, and AI orchestration across modern product stacks.",
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "GraphQL", "Authentication", "Webhooks"],
  },
  {
    title: "Data & Persistence",
    description: "The right storage model for product analytics, application state, retrieval, and operational scale.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis", "Firebase"],
  },
  {
    title: "Cloud Delivery",
    description: "Shipping beyond local demos with observability, deployment discipline, and infrastructure that holds up in production.",
    skills: ["AWS", "Docker", "Vercel", "CI/CD", "GitHub", "Linux", "Monitoring", "Performance"],
  },
  {
    title: "Product & UX Thinking",
    description: "I like software that works technically and makes sense commercially, operationally, and emotionally.",
    skills: ["UI/UX Design", "Product Strategy", "Figma to Code", "Conversion Thinking", "Information Architecture", "Prototyping"],
  },
];

export const projects: Project[] = [
  {
    title: "AI Chatbot SaaS Platform",
    eyebrow: "Multi-tenant copilot",
    description: "A subscription-ready assistant platform with workspace management, usage analytics, secure auth, and multi-model orchestration.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe", "PostgreSQL"],
    features: ["Workspace copilots", "Usage metering", "Secure auth flows", "Operational dashboards"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "linear-gradient(135deg, rgba(34, 211, 238, 0.28), rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.34))",
    variant: "copilot",
    outcome: "Designed to make an AI product feel investor-ready on day one.",
    metrics: [
      { value: "99.2%", label: "assistant uptime" },
      { value: "12", label: "workspace automations" },
      { value: "4", label: "model routes" },
    ],
    featured: true,
  },
  {
    title: "AI Resume Analyzer",
    eyebrow: "Decision support",
    description: "A resume intelligence workflow that extracts skills, scores fit, and recommends improvements in real time.",
    stack: ["React", "Node.js", "Python", "NLP", "Supabase"],
    features: ["Resume parsing", "Skill gap analysis", "Role matching", "Improvement suggestions"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "linear-gradient(135deg, rgba(16, 185, 129, 0.28), rgba(20, 184, 166, 0.35), rgba(14, 165, 233, 0.28))",
    variant: "insights",
    outcome: "Turned a static upload flow into an interactive AI decision surface.",
    metrics: [
      { value: "3 sec", label: "first score" },
      { value: "84%", label: "match clarity" },
      { value: "8", label: "signal dimensions" },
    ],
  },
  {
    title: "Ecommerce Web App",
    eyebrow: "Revenue systems",
    description: "A polished commerce experience with payment orchestration, admin workflows, and inventory-aware operations.",
    stack: ["Next.js", "Node.js", "Stripe", "Redis", "PostgreSQL"],
    features: ["Product CMS", "Realtime cart", "Payments", "Admin analytics"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "linear-gradient(135deg, rgba(244, 114, 182, 0.22), rgba(139, 92, 246, 0.34), rgba(56, 189, 248, 0.28))",
    variant: "commerce",
    outcome: "Built to feel premium on the storefront and dependable in operations.",
    metrics: [
      { value: "+31%", label: "conversion lift" },
      { value: "24/7", label: "order visibility" },
      { value: "1", label: "ops dashboard" },
    ],
  },
  {
    title: "AI Content Generator",
    eyebrow: "Brand-safe generation",
    description: "A content studio for blogs, launch copy, email campaigns, and social snippets with reusable brand voices.",
    stack: ["Next.js", "LangChain", "OpenAI API", "MongoDB", "Vercel"],
    features: ["Voice presets", "Template library", "Export workflows", "Collaboration tools"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "linear-gradient(135deg, rgba(168, 85, 247, 0.22), rgba(99, 102, 241, 0.35), rgba(14, 165, 233, 0.28))",
    variant: "studio",
    outcome: "Balanced creative speed with guardrails teams actually need.",
    metrics: [
      { value: "40+", label: "prompt templates" },
      { value: "5", label: "brand voices" },
      { value: "1 click", label: "export flow" },
    ],
  },
  {
    title: "Automation Dashboard",
    eyebrow: "Workflow orchestration",
    description: "An orchestration console for AI-triggered workflows, queue monitoring, API jobs, and business process automation.",
    stack: ["TypeScript", "FastAPI", "Redis", "Docker", "AWS"],
    features: ["Workflow builder", "Job telemetry", "Webhook routing", "Role-based access"],
    demoUrl: "#contact",
    githubUrl: "https://github.com",
    accent: "linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(79, 70, 229, 0.34), rgba(139, 92, 246, 0.28))",
    variant: "automation",
    outcome: "Made complex backend activity visible enough for non-engineering teams to trust.",
    metrics: [
      { value: "128", label: "jobs / min" },
      { value: "6", label: "workflow stages" },
      { value: "0", label: "blind spots" },
    ],
    featured: true,
  },
];

export const services: Service[] = [
  {
    title: "AI Product Development",
    description: "I design and build AI-native products that feel credible in both the demo and the operational reality behind it.",
    icon: "sparkles",
  },
  {
    title: "Full Stack Web Development",
    description: "Production-grade builds with modern frontend architecture, dependable backend systems, and strong UX judgment.",
    icon: "layers",
  },
  {
    title: "AI Chatbot Development",
    description: "Conversational products with retrieval, business logic, and interfaces that feel useful instead of gimmicky.",
    icon: "bot",
  },
  {
    title: "Backend API Development",
    description: "Secure, scalable APIs with clean contracts, event flows, integrations, and the operational details teams rely on.",
    icon: "server",
  },
  {
    title: "Automation Systems",
    description: "Workflow engines and AI-assisted operations that reduce manual work without creating fragile hidden complexity.",
    icon: "workflow",
  },
  {
    title: "Dashboard & Internal Tools",
    description: "Decision surfaces for operators, founders, and growth teams that make complex systems easier to understand.",
    icon: "layoutDashboard",
  },
  {
    title: "UI/UX for Technical Products",
    description: "Sharper product hierarchy, clearer flows, and premium interfaces for SaaS, AI, and technically dense applications.",
    icon: "penTool",
  },
  {
    title: "Cloud Deployment",
    description: "Reliable rollout paths across Vercel, AWS, containers, observability, and practical delivery workflows.",
    icon: "cloud",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    year: "2026",
    title: "Senior Full Stack AI Engineer",
    company: "Independent Consultant",
    description: "Leading AI-native product builds for startups, automation systems for teams, and premium SaaS experiences from concept to launch.",
    technologies: ["Next.js", "OpenAI", "AWS", "PostgreSQL"],
  },
  {
    year: "2025",
    title: "AI Integrations Specialist",
    company: "Product & Growth Teams",
    description: "Designed LLM workflows, embedded copilots, and automations that improved internal velocity and customer support outcomes.",
    technologies: ["LangChain", "RAG", "Python", "Node.js"],
  },
  {
    year: "2024",
    title: "Full Stack Product Engineer",
    company: "SaaS and Ecommerce Projects",
    description: "Built scalable web applications with authentication, billing, dashboards, analytics, and operational admin tooling.",
    technologies: ["React", "TypeScript", "Stripe", "Redis"],
  },
  {
    year: "2023",
    title: "Freelance Developer",
    company: "Clients & Founders",
    description: "Delivered websites, automation workflows, and technical prototypes for founders validating new ideas quickly.",
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
    role: "Operations Lead",
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
