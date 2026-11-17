import { DATA_CENTER_ROLE } from '../strategyContent'
import { Section } from './Section'

export function DataCenterExperience() {
  return (
    <Section
      id="data-center"
      eyebrow={`Experiência atual · ${DATA_CENTER_ROLE.location}`}
      title="Automação em data centers"
      lede={DATA_CENTER_ROLE.summary}
    >
      <div className="data-center-role">
        <strong>{DATA_CENTER_ROLE.title}</strong>
        <span>{DATA_CENTER_ROLE.employer} · {DATA_CENTER_ROLE.since}</span>
      </div>

      <div className="capability-grid">
        {DATA_CENTER_ROLE.areas.map((area) => (
          <article className="capability-card" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
