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
                href="#data-center"
                onClick={() => analytics.intentClick('hero_data_center')}
              >
                Minha atuação em data center →
              </a>
              <a
                className="hero-cta-btn"
                href="#como-trabalho"
                onClick={() => analytics.intentClick('hero_consulting')}
              >
                Consultoria executiva em IA
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

          <aside className="hero-proof" aria-label="Escopo técnico">
            <span className="hero-proof-label">Automação de infraestrutura crítica</span>
            <p>{POSITIONING.proof}</p>
            <div className="hero-proof-grid">
              <div>
                <b>BMS/BAS e SCADA</b>
                <span>supervisão e controle</span>
              </div>
              <div>
                <b>Energia e climatização</b>
                <span>monitoramento de sistemas críticos</span>
              </div>
              <div>
                <b>Integração</b>
                <span>equipamentos e supervisórios</span>
              </div>
              <div>
                <b>Operação 24×7</b>
                <span>alarmes, manutenção e mudanças</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}
