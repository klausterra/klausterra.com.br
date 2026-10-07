import { WORK_MODES } from '../strategyContent'
import { Section } from './Section'

export function WorkModes() {
  return (
    <Section
      id="como-trabalho"
      eyebrow="Formatos de atuação"
      title="Da dúvida executiva ao acompanhamento recorrente."
      lede="Nem todo problema precisa virar um projeto grande. A atuação pode começar por um diagnóstico pontual, evoluir para um roadmap ou permanecer como advisory para apoiar decisões ao longo do tempo."
    >
      <div className="work-grid">
        {WORK_MODES.map((item) => (
          <article className="work-card" key={item.number}>
            <span className="work-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <small>{item.delivers}</small>
          </article>
        ))}
      </div>
    </Section>
  )
}
