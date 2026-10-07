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
                href="#como-trabalho"
                onClick={() => analytics.intentClick('hero_consulting')}
              >
                Ver como funciona a consultoria →
              </a>
              <a
                className="hero-cta-btn"
                href="#cases"
                onClick={() => analytics.intentClick('hero_cases')}
              >
                Ver cases e projetos
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
            <span className="hero-proof-label">Consultoria executiva · IA sem hype</span>
            <p>{POSITIONING.proof}</p>
            <div className="hero-proof-grid">
              <div>
                <b>Estratégia</b>
                <span>prioridade, risco e retorno</span>
              </div>
              <div>
                <b>IA</b>
                <span>casos de uso e automação</span>
              </div>
              <div>
                <b>CTO</b>
                <span>arquitetura, produto e governança</span>
              </div>
              <div>
                <b>Execução</b>
                <span>da decisão ao projeto real</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}
