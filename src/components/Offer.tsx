import { analytics } from '../lib/analytics'
import { COMMERCIAL, POSITIONING } from '../strategyContent'
import { WhatsIcon } from './icons'

export function Offer() {
  return (
    <section className="offer offer-strategy" id="contratar">
      <div className="shell offer-in offer-in-strategy">
        <div className="offer-txt">
          <p className="eyebrow">{COMMERCIAL.eyebrow}</p>
          <h2>{COMMERCIAL.title}</h2>
          <p className="lede">{COMMERCIAL.text}</p>
          <p className="offer-filter">
            Founder-led, escopo seletivo e foco em situações nas quais negócio, produto e engenharia precisam
            conversar com clareza.
          </p>
        </div>
        <div className="offer-cta">
          <a
            className="key"
            href={POSITIONING.whatsapp}
            target="_blank"
            rel="noopener"
            onClick={() => analytics.intentClick('offer_project')}
          >
            <WhatsIcon />
            {COMMERCIAL.primaryLabel}
          </a>
          <a
            href={COMMERCIAL.secondaryHref}
            target="_blank"
            rel="noopener"
            onClick={() => analytics.intentClick('offer_partnership')}
          >
            {COMMERCIAL.secondaryLabel} →
          </a>
        </div>
      </div>
    </section>
  )
}
