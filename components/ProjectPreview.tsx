import type { CSSProperties } from "react";
import type { Project } from "@/src/types";

export function ProjectPreview({ project }: { project: Project }) {
  const style = { background: project.accent } satisfies CSSProperties;

  return (
    <div className="project-preview-shell" style={style}>
      <div className="project-window">
        <span />
        <span />
        <span />
      </div>

      {project.variant === "copilot" ? (
        <div className="preview-layout preview-copilot">
          <div className="preview-card preview-chat-thread">
            <span className="preview-label">Assistant runtime</span>
            <div className="chat-bubble chat-bubble-user">Summarize workspace activity</div>
            <div className="chat-bubble chat-bubble-ai">4 signals found · 2 actions suggested</div>
          </div>
          <div className="preview-card preview-side-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {project.variant === "insights" ? (
        <div className="preview-layout preview-insights">
          <div className="preview-score-ring">
            <strong>92</strong>
            <span>fit score</span>
          </div>
          <div className="preview-bars">
            <span className="bar-large" />
            <span className="bar-mid" />
            <span className="bar-small" />
            <span className="bar-large" />
          </div>
        </div>
      ) : null}

      {project.variant === "commerce" ? (
        <div className="preview-layout preview-commerce">
          <div className="preview-card preview-order-card">
            <span className="preview-label">Today</span>
            <strong>$24.8k</strong>
            <small>Gross revenue</small>
          </div>
          <div className="preview-mini-grid">
            <div className="preview-card"><strong>42</strong><span>new orders</span></div>
            <div className="preview-card"><strong>8m</strong><span>checkout time</span></div>
          </div>
        </div>
      ) : null}

      {project.variant === "studio" ? (
        <div className="preview-layout preview-studio">
          <div className="preview-card preview-editor-lines">
            <span className="editor-line editor-line-long" />
            <span className="editor-line editor-line-mid" />
            <span className="editor-line editor-line-short" />
            <span className="editor-line editor-line-mid" />
          </div>
          <div className="preview-card preview-voice-stack">
            <span className="voice-pill">Brand Voice A</span>
            <span className="voice-pill">Launch Copy</span>
            <span className="voice-pill">SEO Blog</span>
          </div>
        </div>
      ) : null}

      {project.variant === "automation" ? (
        <div className="preview-layout preview-automation">
          <div className="automation-flow">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="preview-card preview-job-log">
            <strong>Job Queue</strong>
            <small>128 jobs/min · retry safe</small>
          </div>
        </div>
      ) : null}
    </div>
  );
}
