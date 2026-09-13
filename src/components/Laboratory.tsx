import { LAB_PROJECTS } from '../strategyContent'
import { Section } from './Section'

export function Laboratory() {
  return (
    <Section
      id="laboratorio"
      eyebrow="Laboratório"
      title="Produtos, experimentos e sistemas em evolução."
      lede="Nem tudo precisa ocupar o centro da narrativa. O laboratório existe para testar hipóteses, aprender rápido e transformar boas decisões em novos produtos."
    >
      <div className="lab-grid">
        {LAB_PROJECTS.map((item) => (
          <article className="lab-card" key={item.name}>
            <span>{item.area}</span>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            {item.href && (
              <a href={item.href} target="_blank" rel="noopener">
                Ver produto →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
