import type { Project } from "@/src/types";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card card-hover">
      <div className={`project-visual bg-gradient-to-br ${project.accent}`}>
        <div className="project-window">
          <span />
          <span />
          <span />
        </div>
        <div className="project-graph">
          <div className="graph-bar graph-bar-tall" />
          <div className="graph-bar" />
          <div className="graph-bar graph-bar-medium" />
          <div className="graph-bar graph-bar-small" />
        </div>
      </div>

      <div className="project-body glass-card">
        <div className="project-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="badge-row">
          {project.stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a className="text-button" href={project.demoUrl}>
            Live Demo <ArrowUpRight size={16} />
          </a>
          <a className="text-button secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
