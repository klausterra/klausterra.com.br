import { BUSINESS_PROBLEMS } from '../strategyContent'
import { Section } from './Section'

export function Problems() {
  return (
    <Section
      id="problemas"
      eyebrow="Quando faz sentido me chamar"
      title="A consultoria começa antes da escolha da ferramenta."
      lede="Normalmente a conversa começa com uma dúvida de negócio, um projeto travado, uma proposta que precisa ser avaliada ou a sensação de que existe oportunidade com IA, mas ainda falta clareza."
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
