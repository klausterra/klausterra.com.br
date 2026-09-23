import { EXECUTIVE_CAPABILITIES } from '../strategyContent'
import { Section } from './Section'

export function ExecutiveCapabilities() {
  return (
    <Section
      id="competencias"
      eyebrow="Competências construídas na prática"
      title="Cada fase da carreira acrescentou uma camada ao executivo atual."
      lede="Em vez de separar negócio, tecnologia e operação, minha trajetória foi conectando essas disciplinas. É isso que permite discutir estratégia com a liderança e aprofundar a conversa com quem executa."
    >
      <div className="capability-grid">
        {EXECUTIVE_CAPABILITIES.map((item) => (
          <article className="capability-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="capability-tags">
              {item.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
