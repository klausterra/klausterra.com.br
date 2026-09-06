import { IDENTITY } from '../content'
import { Section } from './Section'

export function Legacy() {
  const { emblem } = IDENTITY

  return (
    <Section
      id="legado"
      className="legacy-sec"
      eyebrow="Tradição & Visão"
      title="IDENTIDADE & LEGADO"
      lede="A disciplina secular da engenharia e os valores de permanência encontram a vanguarda do software e da inteligência artificial."
    >
      <div className="legacy-card">
        <div className="legacy-emblem-wrap">
          <div className="legacy-emblem-halo" aria-hidden="true" />
          <picture>
            <source srcSet={emblem.src} type="image/png" />
            <img
              className="legacy-emblem-img"
              src={emblem.src}
              alt={emblem.alt}
              width={220}
              height={264}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <span className="legacy-emblem-caption">{emblem.subtitle}</span>
        </div>

        <div className="legacy-content">
          <div className="legacy-badge">Selo Institucional</div>
          <h3 className="legacy-title">{emblem.title}</h3>
          <p className="legacy-lead">{emblem.text}</p>
          <p className="legacy-body">{emblem.secondaryText}</p>

          <div className="legacy-pillars">
            <div className="pillar">
              <span className="pillar-dot" aria-hidden="true" />
              <div className="pillar-info">
                <b>Tradição & Responsabilidade</b>
                <span>Compromisso com o rigor técnico, solidez de fundamentos e ética perene.</span>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-dot" aria-hidden="true" />
              <div className="pillar-info">
                <b>Continuidade & Futuro</b>
                <span>Construção de ecossistemas duradouros que atravessam ciclos tecnológicos.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
