"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Cloud,
  Github,
  Layers,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Server,
  Sparkles,
  Star,
  Twitter,
  Workflow,
} from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import {
  contactDetails,
  experienceTimeline,
  navItems,
  projects,
  quickStats,
  services,
  skillGroups,
  socialLinks,
  testimonials,
} from "@/data/portfolio";

const serviceIcons = {
  layers: Layers,
  bot: Bot,
  sparkles: Sparkles,
  server: Server,
  workflow: Workflow,
  penTool: PenTool,
  layoutDashboard: LayoutDashboard,
  cloud: Cloud,
} as const;

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "Twitter/X": Twitter,
} as const;

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function PortfolioPage() {
  return (
    <main className="site-shell">
      <AnimatedBackground />
      <Navbar items={navItems} />

      <div className="progress-bar" aria-hidden="true" />

      <Hero stats={quickStats} />

      <motion.section
        id="about"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
      >
        <div className="two-column-layout">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Engineering digital products that feel smart, fast, and unmistakably premium."
              description="I am a Full Stack AI Engineer passionate about building intelligent digital products that combine beautiful user interfaces, powerful backend systems, and advanced AI capabilities. I work with modern technologies to create scalable, secure, and high-performance applications."
            />

            <div className="highlights-grid">
              {[
                "AI application development",
                "Full-stack web development",
                "API development and integrations",
                "Automation workflows",
                "SaaS product development",
                "Cloud deployment",
              ].map((item) => (
                <div className="glass-card highlight-card card-hover" key={item}>
                  <Brain size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card profile-card card-hover">
            <div className="avatar-shell">
              <div className="avatar-core">
                <span>AI</span>
              </div>
              <div className="avatar-ring avatar-ring-one" />
              <div className="avatar-ring avatar-ring-two" />
            </div>
            <div className="profile-copy">
              <span className="eyebrow">Hybrid product mindset</span>
              <h3>Design clarity + systems thinking + practical AI.</h3>
              <p>
                From polished interfaces to scalable services and AI-powered workflows, I like products that feel cohesive at every layer.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Skills"
          title="A full stack toolkit built for modern product teams and AI-native software."
          description="From frontend polish to backend performance and applied AI systems, each layer is designed to move products from concept to reliable delivery."
          align="center"
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work across AI products, SaaS platforms, and conversion-focused web systems."
          description="A showcase of premium builds that combine clean UX, scalable architecture, and useful automation."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Services"
          title="Ways I help founders, teams, and modern businesses ship smarter products."
          description="Structured services for teams that need engineering depth, AI implementation, and premium product execution."
          align="center"
        />
        <div className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? BriefcaseBusiness;

            return (
              <article className="glass-card service-card card-hover" key={service.title}>
                <div className="service-icon">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Experience"
          title="A journey through full stack execution, AI implementation, and product delivery."
          description="A focused timeline covering the mix of product engineering, AI integration, and client-facing build work behind the portfolio."
        />
        <div className="timeline">
          {experienceTimeline.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.title}`}>
              <div className="timeline-dot" />
              <div className="glass-card timeline-card card-hover">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
                <div className="badge-row">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="testimonials"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams that need both strong engineering and strong product taste."
          description="A few words from people who wanted practical AI, reliable delivery, and a polished experience instead of demo-level execution."
          align="center"
        />
        <div className="testimonial-row">
          {testimonials.map((item) => (
            <article className="glass-card testimonial-card card-hover" key={item.name}>
              <div className="testimonial-header">
                <div className="avatar-mini">{item.name.charAt(0)}</div>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
              <div className="rating-row">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote>{item.quote}</blockquote>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="section contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-grid">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s Build Something Intelligent Together"
              description="Have a project idea, AI product, automation need, or full-stack web app in mind? Let’s discuss how I can help bring it to life."
            />

            <div className="contact-cards">
              <a className="glass-card contact-card card-hover" href={`mailto:${contactDetails.email}`}>
                <Mail size={18} />
                <div>
                  <strong>Email</strong>
                  <span>{contactDetails.email}</span>
                </div>
              </a>
              <a className="glass-card contact-card card-hover" href={`tel:${contactDetails.phone}`}>
                <Phone size={18} />
                <div>
                  <strong>Phone</strong>
                  <span>{contactDetails.phone}</span>
                </div>
              </a>
              <div className="glass-card contact-card card-hover">
                <MapPin size={18} />
                <div>
                  <strong>Location</strong>
                  <span>{contactDetails.location}</span>
                </div>
              </div>
            </div>

            <div className="social-row">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Sparkles;
                return (
                  <a className="social-link" key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </motion.section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-icon">AI</span>
          <div>
            <strong>Full Stack AI Engineer</strong>
            <p>Building intelligent digital experiences.</p>
          </div>
        </div>

        <div className="footer-links">
          {navItems.slice(0, 4).map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>

        <p className="footer-meta">© 2026 Full Stack AI Engineer. Crafted for premium product-first engineering.</p>
      </footer>
    </main>
  );
}
