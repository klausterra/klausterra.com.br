import { PRINCIPLES } from '../content'
import { Section } from './Section'

export function Principles() {
  return (
    <Section
      id="principios"
      eyebrow="Princípios & Engenharia"
      title="Diretrizes de arquitetura, dados e produto."
      lede="Não são slogans: são decisões técnicas e estratégicas consolidadas projeto após projeto, comprovadas na prática e nos repositórios públicos."
    >
      <div className="prin">
        {PRINCIPLES.map((principle) => (
          <div className="pr" key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
