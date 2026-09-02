import { FIGURES, IDENTITY, ROLES } from '../content'
import { Stack } from './Stack'

export function Hero() {
  const [line1, line2] = IDENTITY.headline
  return (
    <header className="hero" id="topo">
      <div className="shell hero-in">
        <div className="hero-cols">
          <div className="hero-left">
            <div className="byline">
              <picture>
                <source srcSet={IDENTITY.portraitWebp} type="image/webp" />
                <img
                  className="ph"
                  src={IDENTITY.portrait}
                  alt={IDENTITY.portraitAlt}
                  width={76}
                  height={76}
                  decoding="async"
                />
              </picture>
              <div className="who">
                <b>{IDENTITY.name}</b>
                <span className="who-title">{IDENTITY.title}</span>
                <p className="eyebrow">{IDENTITY.eyebrow}</p>
              </div>
            </div>
            <h1>
              {line1}
              <br />
              {line2}
            </h1>
            <p className="hero-thesis">
              {IDENTITY.thesis} <em>{IDENTITY.thesisEmphasis}</em>
            </p>
            <div className="roles">
              {ROLES.map((item) => (
                <div key={item.org}>
                  <b>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener">
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </b>
                  <span>
                    <i>{item.role}.</i> {item.text}
                  </span>
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
