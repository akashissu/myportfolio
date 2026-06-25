"use client";

import { motion } from "framer-motion";
import {
  Bot,
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
import { CapabilityHighlights } from "@/components/CapabilityHighlights";
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

const capabilityHighlights = [
  {
    title: "AI features with product discipline",
    detail: "Not just model hookups. I care about failure states, clarity, trust, and whether the workflow genuinely helps the user.",
  },
  {
    title: "Frontend polish that carries technical depth",
    detail: "I like interfaces that make dense systems feel approachable without flattening what makes them powerful.",
  },
  {
    title: "Backend systems built for real usage",
    detail: "Auth, events, telemetry, payments, and data contracts need to feel calm under real traffic, not just during a demo.",
  },
  {
    title: "Execution that bridges design and delivery",
    detail: "The work lands best when the visual layer, business logic, and deployment path all support each other.",
  },
];

const principles = ["AI-native thinking", "Product intuition", "System reliability", "Premium UX bar"];

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
        <div className="two-column-layout about-grid">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Crafting ground-breaking AI solutions that look premium, behave clearly, and survive beyond the prototype phase."
              description="My work sits at the intersection of interface design, backend engineering, and applied AI. I care about products that feel refined on the front end, credible in the architecture, and useful in the real workflows they support."
            />

            <CapabilityHighlights items={capabilityHighlights} />
          </div>

          <div className="glass-card profile-card card-hover">
            <div className="profile-panel-top">
              <span className="eyebrow">Systems profile</span>
              <div className="profile-status">
                <span className="signal signal-green" />
                <span>Available for focused builds</span>
              </div>
            </div>

            <div className="avatar-shell">
              <div className="avatar-core">
                <span>AI</span>
              </div>
              <div className="avatar-ring avatar-ring-one" />
              <div className="avatar-ring avatar-ring-two" />
            </div>

            <div className="profile-copy">
              <h3>Design clarity + systems thinking + practical AI.</h3>
              <p>
                I like shipping software that feels coherent at every layer: interface, orchestration, persistence, and delivery.
              </p>
            </div>

            <div className="profile-signal-grid">
              {principles.map((item) => (
                <div className="profile-signal-card" key={item}>
                  <strong>{item}</strong>
                  <span>Built into each engagement</span>
                </div>
              ))}
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
          title="An AI Engineer's toolbox optimized for creativity and impact, technical UX, and fast-moving teams."
          description="I work across the frontend, backend, and AI workflow layers so products can move from concept to production without losing cohesion."
          align="center"
        />
        <div className="skills-grid skills-grid-premium">
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
          title="Case-study style work across copilots, analytics, automation, and revenue systems."
          description="Each build blends product judgment, engineering execution, and AI-specific UX patterns instead of dropping the same visual treatment onto every card."
        />
        <div className="projects-grid projects-grid-premium">
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
          title="Ways I help founders and teams ship sharper AI and product experiences."
          description="Structured support for teams that need engineering depth, AI implementation, and a more premium product surface."
          align="center"
        />
        <div className="services-grid services-grid-premium">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? BriefcaseBusiness;

            return (
              <article className={`glass-card service-card card-hover ${index === 0 ? "service-card-wide" : ""}`} key={service.title}>
                <div className="service-icon">
                  <Icon size={22} />
                </div>
                <span className="eyebrow">Service {String(index + 1).padStart(2, "0")}</span>
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
          title="A track record across product engineering, AI integration, and client-facing delivery."
          description="A focused timeline covering the blend of software execution, AI implementation, and premium product work behind the portfolio."
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
          eyebrow="Proof"
          title="Trusted by teams that need strong engineering and stronger product taste."
          description="A few signals from people who wanted practical AI, reliable delivery, and a polished user experience instead of demo-level execution."
          align="center"
        />
        <div className="testimonial-row testimonial-row-premium">
          {testimonials.map((item, index) => (
            <article className={`glass-card testimonial-card card-hover ${index === 0 ? "testimonial-card-featured" : ""}`} key={item.name}>
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
                {Array.from({ length: item.rating }).map((_, ratingIndex) => (
                  <Star key={`${item.name}-${ratingIndex}`} size={16} fill="currentColor" />
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
              title="Let’s build something intelligent and actually usable."
              description="If you are planning an AI product, an internal tool, an automation system, or a premium web app, I can help shape the UX and engineering together."
            />

            <div className="glass-card contact-lead-card card-hover">
              <span className="eyebrow">Best fit engagements</span>
              <h3>AI products, dashboards, workflow tools, and technical web experiences.</h3>
              <p>
                The strongest results usually come from projects where product clarity, system design, and interface quality all matter at once.
              </p>
            </div>

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
            <p>Building intelligent software with premium product execution.</p>
          </div>
        </div>

        <div className="footer-links">
          {navItems.slice(0, 5).map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>

        <p className="footer-meta">© 2026 Full Stack AI Engineer. Crafted for premium AI-first product work.</p>
      </footer>
    </main>
  );
}
