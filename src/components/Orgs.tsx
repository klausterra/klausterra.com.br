import { ORGS } from '../content'
import { Section } from './Section'

export function Orgs() {
  return (
    <Section
      id="empresas"
      eyebrow="Quatro frentes"
      title="Uma pilha, quatro mercados."
      lede="As empresas compartilham engenharia, infraestrutura e o mesmo harness de desenvolvimento assistido por IA. O que muda é o cliente na ponta."
    >
      <div className="orgs">
        {ORGS.map((org) => (
          <div className="org" key={org.name}>
            <span className="role">{org.role}</span>
            <h3>{org.name}</h3>
            <p>{org.text}</p>
            <a href={org.href} target="_blank" rel="noopener">
              {org.label} →
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
