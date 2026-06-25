import { Activity, Bot, BrainCircuit, Gauge, Rocket, ShieldCheck } from "lucide-react";

const modelEvents = [
  { label: "Context routing", value: "Stable" },
  { label: "Retrieval latency", value: "148ms" },
  { label: "Guardrails", value: "Healthy" },
];

const workflowSteps = ["Product signal", "LLM orchestration", "API actions", "Client-ready UX"];

export function HeroCommandPanel() {
  return (
    <div className="command-surface glass-card">
      <div className="command-surface-header">
        <div>
          <span className="eyebrow">AI Engineer Command Center</span>
          <h2>Turning models, product logic, and polished UX into one delivery surface.</h2>
        </div>
        <span className="status-badge">Shipping</span>
      </div>

      <div className="command-grid">
        <section className="command-card command-card-primary">
          <div className="command-card-title">
            <Bot size={18} />
            <span>Model activity</span>
          </div>
          <div className="command-rows">
            {modelEvents.map((item) => (
              <div className="command-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="command-pills">
            <span className="chip">Streaming</span>
            <span className="chip">RAG-ready</span>
            <span className="chip">Production-safe</span>
          </div>
        </section>

        <section className="command-card">
          <div className="command-card-title">
            <BrainCircuit size={18} />
            <span>Orchestration</span>
          </div>
          <div className="workflow-stack">
            {workflowSteps.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="command-card">
          <div className="command-card-title">
            <Gauge size={18} />
            <span>Telemetry</span>
          </div>
          <div className="metric-cluster">
            <div>
              <strong>97.4%</strong>
              <span>automation success</span>
            </div>
            <div>
              <strong>12</strong>
              <span>active integrations</span>
            </div>
          </div>
          <div className="command-meter" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="command-card command-card-terminal">
          <div className="command-card-title">
            <Activity size={18} />
            <span>Deploy trace</span>
          </div>
          <code className="command-code">
            <span><Rocket size={14} /> {`deploy("assistant-suite")`}</span>
            <span><ShieldCheck size={14} /> {`verify("auth", "events", "billing")`}</span>
            <span><Activity size={14} /> {`observe("latency", "feedback")`}</span>
          </code>
        </section>
      </div>
    </div>
  );
}
