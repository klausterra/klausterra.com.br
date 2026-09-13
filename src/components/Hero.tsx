import { POSITIONING } from '../strategyContent'

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
              <a className="hero-cta-btn primary" href="#contratar">
                Discutir um projeto →
              </a>
              <a className="hero-cta-btn" href="#cases">
                Ver cases
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Resumo de posicionamento">
            <span className="hero-proof-label">Engenharia antes do hype</span>
            <p>{POSITIONING.proof}</p>
            <div className="hero-proof-grid">
              <div>
                <b>20+</b>
                <span>anos em engenharia e tecnologia</span>
              </div>
              <div>
                <b>End-to-end</b>
                <span>do problema de negócio à operação</span>
              </div>
              <div>
                <b>IA aplicada</b>
                <span>produto, agentes, automação e integração</span>
              </div>
              <div>
                <b>Founder-led</b>
                <span>acesso direto a quem decide e constrói</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}
