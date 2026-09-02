import { OPEN_SOURCE } from '../content'
import { Section } from './Section'

export function OpenSource() {
  return (
    <Section
      id="aberto"
      eyebrow="Código aberto"
      title="Dá para ler o que eu escrevo."
      lede="Parte do ferramental está público — integrações, firmware e as ferramentas que eu precisei construir para operar IA em escala de time."
    >
      <div className="oss">
        {OPEN_SOURCE.map((repo) => (
          <a className="os" key={repo.name} href={repo.href} target="_blank" rel="noopener">
            <span className="on">{repo.name}</span>
            <span className="od">{repo.text}</span>
            <span className="ol">{repo.label}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
