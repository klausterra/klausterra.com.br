import { FIGURES, IDENTITY, ROLES } from '../content'
import { Stack } from './Stack'

export function Hero() {
  const [line1, line2] = IDENTITY.headline
  return (
    <header className="hero" id="topo">
      <div className="shell hero-in">
        <div className="hero-cols">
          <div className="hero-left">
            <p className="eyebrow">{IDENTITY.eyebrow}</p>
            <h1>
              {line1}
              <br />
              {line2}
            </h1>
            <p className="hero-thesis">
              {IDENTITY.thesis} <em>{IDENTITY.thesisEmphasis}</em>
            </p>
            <div className="roles">
              {ROLES.map((role) => (
                <div key={role.org}>
                  <b>{role.org}</b>
                  <span>{role.text}</span>
                </div>
              ))}
            </div>
          </div>
          <Stack />
        </div>

        <div className="figs">
          {FIGURES.map((fig) => (
            <div className="fig" key={fig.label}>
              <b>{fig.value}</b>
              <small>{fig.label}</small>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
