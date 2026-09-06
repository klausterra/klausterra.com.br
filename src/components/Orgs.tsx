import { ORGS } from '../content'
import { Section } from './Section'

export function Orgs() {
  return (
    <Section
      id="grupo"
      eyebrow="Ecossistema BlackHex"
      title="Holding, empresas e ventures de tecnologia."
      lede="A BlackHex opera como a holding e plataforma que estrutura e conecta os negócios fundados e liderados por Klaus Terra. Sob uma arquitetura técnica e governança unificadas, cada empresa atua com foco específico de mercado."
    >
      <div className="orgs">
        {ORGS.map((org) => (
          <div className={`org ${org.highlight ? 'org-highlight' : ''}`} key={org.name}>
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
