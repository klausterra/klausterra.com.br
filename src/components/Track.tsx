import { TRACK } from '../content'
import { Section } from './Section'

export function Track() {
  return (
    <Section
      id="trajetoria"
      eyebrow="Evolução & Liderança"
      title="Vinte anos subindo a pilha: da engenharia à IA e novos negócios."
      lede="Uma trajetória sólida construída sobre fundamentos reais: do comissionamento elétrico de campo em plantas industriais à concepção de plataformas de software, produtos de inteligência artificial e criação de empresas."
    >
      <div className="track-wrap">
        <div className="track-rail" aria-hidden="true">
          <div className="track-pulse" />
        </div>
        <ol className="track">
          {TRACK.map((stop, index) => (
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
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
