import { IDENTITY } from '../content'
import { Section } from './Section'
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsIcon } from './icons'

export function Contact() {
  return (
    <Section
      id="contato"
      className="contact"
      eyebrow="Contato"
      title="Vamos conversar."
      lede="Automação da sua casa, plataforma para o agro, produto digital para tirar do papel, time de engenharia para montar ou uma conversa sobre onde IA realmente ajuda — me chame e eu respondo."
    >
      <div className="cta">
        <a className="key" href={`mailto:${IDENTITY.email}`}>
          <MailIcon />
          {IDENTITY.email}
        </a>
        <a href={IDENTITY.whatsapp} target="_blank" rel="noopener">
          <WhatsIcon />
          {IDENTITY.whatsappLabel}
        </a>
        <a href={IDENTITY.linkedin} target="_blank" rel="noopener">
          <LinkedInIcon />
          linkedin.com/in/klausterra
        </a>
        <a href={IDENTITY.github} target="_blank" rel="noopener">
          <GitHubIcon />
          github.com/klausterra
        </a>
      </div>
    </Section>
  )
}
