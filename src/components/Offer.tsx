import { IDENTITY, OFFER } from '../content'
import { WhatsIcon } from './icons'

/** Um caminho de ação, não quatro: quem veio contratar vai para a Hipercube. */
export function Offer() {
  return (
    <section className="offer" id="contratar">
      <div className="shell offer-in">
        <div className="offer-txt">
          <p className="eyebrow">{OFFER.eyebrow}</p>
          <h2>{OFFER.title}</h2>
          <p className="lede">{OFFER.text}</p>
        </div>
        <div className="offer-cta">
          <a className="key" href={OFFER.href} target="_blank" rel="noopener">
            Conhecer a Hipercube →
          </a>
          <a href={IDENTITY.whatsapp} target="_blank" rel="noopener">
            <WhatsIcon />
            Falar comigo agora
          </a>
        </div>
      </div>
    </section>
  )
}
