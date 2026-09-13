import { WORK_MODES } from '../strategyContent'
import { Section } from './Section'

export function WorkModes() {
  return (
    <Section
      id="como-trabalho"
      eyebrow="Como eu trabalho"
      title="Da decisão executiva à operação."
      lede="O objetivo é reduzir incerteza rápido. Primeiro entendemos o problema e o retorno esperado; depois escolhemos arquitetura, escopo e nível de execução."
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
