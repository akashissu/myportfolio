import { Brain, Layers3, Rocket, ShieldCheck } from "lucide-react";

const icons = [Brain, Layers3, Rocket, ShieldCheck] as const;

type CapabilityItem = {
  title: string;
  detail: string;
};

export function CapabilityHighlights({ items }: { items: CapabilityItem[] }) {
  return (
    <div className="capability-grid">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <article className="glass-card capability-card card-hover" key={item.title}>
            <div className="capability-icon">
              <Icon size={18} />
            </div>
            <div>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
