import { FEATURED_CASES } from '../strategyContent'
import { analytics } from '../lib/analytics'
import { Section } from './Section'

export function FeaturedCases() {
  return (
    <Section
      id="cases"
      eyebrow="Cases selecionados"
      title="Problemas que transformei em produtos e sistemas."
      lede="Menos catálogo, mais contexto. Estes casos mostram como eu conecto problema, decisão de produto e arquitetura para chegar a algo que funciona em operação."
    >
      <div className="case-grid">
        {FEATURED_CASES.map((item, index) => (
          <article className={index === 0 ? 'case-card case-card-featured' : 'case-card'} key={item.name}>
            <div className="case-topline">
              <span className="case-by">{item.by}</span>
              <span className="case-category">{item.category}</span>
            </div>
            <h3>{item.name}</h3>

            <div className="case-block">
              <span>Problema</span>
              <p>{item.problem}</p>
            </div>
            <div className="case-block">
              <span>Decisão</span>
              <p>{item.decision}</p>
            </div>
            <div className="case-result">
              <span>O que isso demonstra</span>
              <p>{item.outcome}</p>
            </div>

            {item.href && (
              <a
                className="case-link"
                href={item.href}
                target="_blank"
                rel="noopener"
                onClick={() => analytics.productCta(item.name)}
              >
                {item.hrefLabel} →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
