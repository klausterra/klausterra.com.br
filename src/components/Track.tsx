import { TRACK } from '../content'
import { CAREER_GAINS } from '../strategyContent'
import { Section } from './Section'

export function Track() {
  return (
    <Section
      id="trajetoria"
      eyebrow="Evolução & Liderança"
      title="A carreira não foi uma sequência de cargos. Foi uma acumulação de competências."
      lede="Da engenharia de campo à liderança C-level e ao venture building, cada etapa adicionou uma camada que hoje influencia como eu avalio risco, arquitetura, produto, pessoas e negócio."
    >
      <div className="track-wrap">
        <div className="track-rail" aria-hidden="true">
          <div className="track-pulse" />
        </div>
        <ol className="track">
          {TRACK.map((stop, index) => {
            const career = CAREER_GAINS[stop.org]

            return (
              <li
                className="stop"
                key={`${stop.period}-${stop.org}`}
                style={{ '--stop-index': index } as React.CSSProperties}
              >
                <div className="stop-marker" aria-hidden="true">
                  <span className="stop-pad" />
                </div>

                <div className="stop-when">
                  <span className="stop-phase-tag">{stop.phase}</span>
                  <span className="stop-period-text">{stop.period}</span>
                </div>

                <div className="stop-body">
                  <h3>{stop.org}</h3>
                  <span className="stop-role">{stop.role}</span>
                  <p>{stop.text}</p>

                  {career && (
                    <div className="stop-career-gain">
                      <span>O que essa fase construiu</span>
                      <p>{career.gain}</p>
                      <div className="stop-skill-tags">
                        {career.skills.map((skill) => (
                          <small key={skill}>{skill}</small>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
