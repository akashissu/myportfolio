import type { SkillGroup } from "@/src/types";

export function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <article className="glass-card skill-card card-hover">
      <div className="skill-card-header">
        <div>
          <span className="eyebrow">Capability stack</span>
          <h3>{group.title}</h3>
        </div>
        <div className="skill-card-count">{group.skills.length}</div>
      </div>
      <p>{group.description}</p>
      <div className="badge-row">
        {group.skills.map((skill) => (
          <span key={skill} className="chip skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
