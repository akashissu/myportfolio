import { ArrowUpRight, Github } from "lucide-react";
import { ProjectPreview } from "@/components/ProjectPreview";
import type { Project } from "@/src/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card card-hover ${project.featured ? "project-card-featured" : ""}`}>
      <ProjectPreview project={project} />

      <div className="project-body glass-card">
        <div className="project-copy">
          <span className="eyebrow">{project.eyebrow}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-metrics">
          {project.metrics.map((metric) => (
            <div className="project-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="badge-row">
          {project.stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        <p className="project-outcome">{project.outcome}</p>

        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a className="text-button" href={project.demoUrl}>
            View Case Study <ArrowUpRight size={16} />
          </a>
          <a className="text-button secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
