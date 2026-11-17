import { IDENTITY } from '../content'
import { analytics } from '../lib/analytics'
import { POSITIONING, PRACTICE_AREAS } from '../strategyContent'
import { FileDownIcon } from './icons'

export function Hero() {
  return (
    <header className="hero" id="topo">
      <div className="shell hero-in">
        <div className="hero-cols">
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

            <h1 className="hero-title">{POSITIONING.headline}</h1>

            <p className="hero-thesis hero-thesis-strategy">{POSITIONING.subheadline}</p>

            <div className="hero-ctas">
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

          <div className="hero-practices">
            {PRACTICE_AREAS.map((area) => (
              <article className="hero-practice" key={area.href}>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
                <a
                  className="hero-cta-btn"
                  href={area.href}
                  onClick={() => analytics.intentClick(area.intent)}
                >
                  {area.label} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
