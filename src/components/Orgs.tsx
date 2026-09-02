import { ORGS } from '../content'
import { Section } from './Section'

export function Orgs() {
  return (
    <Section
      id="grupo"
      eyebrow="O grupo"
      title="Uma holding, quatro empresas."
      lede="A BlackHex é o grupo de investimento em tecnologias disruptivas que reúne as empresas abaixo. Todas compartilham a mesma engenharia e a mesma infraestrutura — o que muda é o cliente na ponta."
    >
      <div className="orgs">
        {ORGS.map((org) => (
          <div className="org" key={org.name}>
            <span className="role">{org.role}</span>
            <h3>{org.name}</h3>
            <p>{org.text}</p>
            {org.href ? (
              <a href={org.href} target="_blank" rel="noopener">
                {org.label} →
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}
