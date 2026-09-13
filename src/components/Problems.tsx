import { BUSINESS_PROBLEMS } from '../strategyContent'
import { Section } from './Section'

export function Problems() {
  return (
    <Section
      id="problemas"
      eyebrow="Onde eu gero valor"
      title="Empresas me procuram quando tecnologia deixa de ser simples."
      lede="O ponto de partida não é a ferramenta. É o problema de negócio, a restrição operacional e o resultado esperado. A tecnologia entra depois, na medida certa."
    >
      <div className="problem-grid">
        {BUSINESS_PROBLEMS.map((item) => (
          <article className="problem-card" key={item.title}>
            <span className="problem-signal">{item.signal}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
