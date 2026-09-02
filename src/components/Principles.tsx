import { PRINCIPLES } from '../content'
import { Section } from './Section'

export function Principles() {
  return (
    <Section
      id="engenharia"
      eyebrow="Como eu construo"
      title="Decisões que se repetem em todos os produtos."
      lede="Não são slogans: são escolhas que aparecem no código de projeto atrás de projeto, e que dá para conferir nos repositórios abertos."
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
