import { TRACK } from '../content'
import { CAREER_GAINS, DATA_CENTER_ROLE } from '../strategyContent'
import { Section } from './Section'

const careerTrack = [
  ...TRACK,
  {
    phase: 'AUTOMAÇÃO & DATA CENTERS',
    period: DATA_CENTER_ROLE.since,
    org: DATA_CENTER_ROLE.employer,
    role: DATA_CENTER_ROLE.title,
    text: 'Engenharia de automação para infraestrutura de data center em Brasília, com foco em disponibilidade, confiabilidade e operação contínua.',
  },
]

export function Track() {
  return (
    <Section
      id="trajetoria"
      eyebrow="Evolução & Liderança"
      title="Da engenharia de campo à infraestrutura crítica"
      lede="Minha trajetória reúne comissionamento industrial, projetos de infraestrutura, liderança executiva em tecnologia e engenharia de automação em data centers."
    >
      <div className="track-wrap">
        <div className="track-rail" aria-hidden="true">
          <div className="track-pulse" />
        </div>
        <ol className="track">
          {careerTrack.map((stop, index) => {
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
