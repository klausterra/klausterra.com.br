import { IDENTITY } from '../content'
import { Section } from './Section'
import { GitHubIcon, MailIcon } from './icons'

export function Contact() {
  return (
    <Section
      id="contato"
      className="contact"
      eyebrow="Contato"
      title="Vamos conversar."
      lede="Projeto de automação, plataforma para o agro, time de engenharia para montar ou uma conversa sobre IA em produção — escreva e eu respondo."
    >
      <div className="cta">
        <a className="key" href={`mailto:${IDENTITY.email}`}>
          <MailIcon />
          {IDENTITY.email}
        </a>
        <a href={IDENTITY.github} target="_blank" rel="noopener">
          <GitHubIcon />
          github.com/klausterra
        </a>
      </div>
    </Section>
  )
}
