import { SOCIAL } from '../content'
import { analytics } from '../lib/analytics'
import { POSITIONING } from '../strategyContent'
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
      title="Traga o problema. A tecnologia vem depois."
      lede="Se você está avaliando IA, automação, um fornecedor, um produto ou uma decisão de tecnologia, me envie o contexto. A primeira conversa serve para entender se eu realmente posso ajudar."
    >
      <div className="cta">
        <a
          className="key"
          href={`mailto:${POSITIONING.email}`}
          onClick={() => analytics.contactClick('email')}
        >
          <MailIcon />
          {POSITIONING.email}
        </a>
        <a
          href={POSITIONING.whatsapp}
          target="_blank"
          rel="noopener"
          onClick={() => analytics.contactClick('whatsapp')}
        >
          <WhatsIcon />
          {POSITIONING.whatsappLabel}
        </a>
      </div>
      <div className="cta cta-social">
        {SOCIAL.map((item) => {
          const Glyph = GLYPH[item.id]
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener"
              onClick={() => analytics.contactClick(item.id)}
            >
              <Glyph />
              {item.label} <i>{item.handle}</i>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
