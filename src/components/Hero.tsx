import { IDENTITY } from '../content'
import { analytics } from '../lib/analytics'
import { POSITIONING } from '../strategyContent'
import { FileDownIcon } from './icons'

export function Hero() {
  const [line1, line2] = POSITIONING.headline

  return (
    <header className="hero" id="topo">
      <div className="shell hero-in">
        <div className="hero-cols hero-cols-strategy">
          <div className="hero-left">
            <div className="byline">
              <picture>
                <source srcSet={POSITIONING.portraitWebp} type="image/webp" />
                <img
                  className="ph"
                  src={POSITIONING.portrait}
                  alt={POSITIONING.portraitAlt}
                  width={72}
                  height={72}
                  decoding="async"
                />
              </picture>
              <div className="who">
                <b>{POSITIONING.name}</b>
                <span className="who-title">{POSITIONING.title}</span>
              </div>
            </div>

            <p className="hero-kicker">{POSITIONING.signature}</p>

            <h1 className="hero-title">
              {line1}
              <br />
              <span>{line2}</span>
            </h1>

            <p className="hero-thesis hero-thesis-strategy">{POSITIONING.subheadline}</p>

            <div className="hero-ctas">
              <a
                className="hero-cta-btn primary"
                href="#contratar"
                onClick={() => analytics.intentClick('hero_project')}
              >
                Discutir um projeto →
              </a>
              <a
                className="hero-cta-btn"
                href="#grupo"
                onClick={() => analytics.intentClick('hero_ecosystem')}
              >
                Conhecer os negócios
              </a>
              <a
                className="hero-cta-btn subtle"
                href={IDENTITY.executiveBriefPdf}
                target="_blank"
                rel="noopener"
                title="Abrir perfil executivo e resumo profissional em PDF"
                onClick={() => analytics.intentClick('hero_executive_pdf')}
              >
                <FileDownIcon />
                Perfil executivo (PDF)
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Resumo de posicionamento">
            <span className="hero-proof-label">Operator mindset · engenharia antes do hype</span>
            <p>{POSITIONING.proof}</p>
            <div className="hero-proof-grid">
              <div>
                <b>Operação</b>
                <span>sistemas críticos e execução</span>
              </div>
              <div>
                <b>C-level</b>
                <span>tecnologia, produto e governança</span>
              </div>
              <div>
                <b>Builder</b>
                <span>software, IA e produtos reais</span>
              </div>
              <div>
                <b>Founder</b>
                <span>negócios, risco e capital</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}
