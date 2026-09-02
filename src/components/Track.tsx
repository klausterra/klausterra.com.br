import { TRACK } from '../content'
import { Section } from './Section'

export function Track() {
  return (
    <Section
      id="trajetoria"
      eyebrow="Antes do software"
      title="Vinte anos subindo a pilha, de baixo para cima."
      lede="Eu não migrei da engenharia para a tecnologia. Comecei no campo, comissionando sala elétrica em mineração, e fui subindo — o que explica por que a arquitetura que eu desenho hoje aguenta operação de verdade."
    >
      <ol className="track">
        {TRACK.map((stop) => (
          <li className="stop" key={stop.period}>
            <div className="stop-when">{stop.period}</div>
            <div className="stop-body">
              <h3>{stop.org}</h3>
              <span className="stop-role">{stop.role}</span>
              <p>{stop.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
