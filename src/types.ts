export type NavItem = {
  id: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectVariant = "copilot" | "insights" | "commerce" | "studio" | "automation";

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  accent: string;
  variant: ProjectVariant;
  outcome: string;
  metrics: ProjectMetric[];
  featured?: boolean;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type ExperienceItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export type SocialLink = {
  label: string;
  href: string;
};
