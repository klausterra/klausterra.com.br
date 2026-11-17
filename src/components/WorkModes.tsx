import { WORK_MODES } from '../strategyContent'
import { Section } from './Section'

export function WorkModes() {
  return (
    <Section
      id="como-trabalho"
      eyebrow="Consultoria"
      title="Consultoria em engenharia de IA"
      lede="Ajudo empresas a identificar onde a IA pode gerar valor, avaliar arquiteturas e transformar casos de uso em planos de implantação. Minha prática em engenharia de IA inclui agentes, sistemas de busca com RAG e integração de modelos com software e dados de negócio."
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
