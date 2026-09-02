import { IDENTITY, SOCIAL } from '../content'
import { Section } from './Section'
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, WhatsIcon, YouTubeIcon } from './icons'

const GLYPH = {
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
} as const

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
      </div>
      <div className="cta cta-social">
        {SOCIAL.map((item) => {
          const Glyph = GLYPH[item.id]
          return (
            <a key={item.id} href={item.href} target="_blank" rel="noopener">
              <Glyph />
              {item.label} <i>{item.handle}</i>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
