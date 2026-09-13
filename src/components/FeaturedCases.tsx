import { FEATURED_CASES } from '../strategyContent'
import { analytics } from '../lib/analytics'
import { Section } from './Section'

export function FeaturedCases() {
  const cases = [...FEATURED_CASES].sort((a, b) => {
    if (a.name === 'Maya Vet Anest') return -1
    if (b.name === 'Maya Vet Anest') return 1
    return 0
  })

  return (
    <Section
      id="cases"
      eyebrow="Cases selecionados"
      title="Problemas que transformei em produtos e sistemas."
      lede="Produtos reais são a melhor prova de execução. O Maya Vet Anest aparece em destaque porque representa bem a combinação entre conhecimento de domínio, produto, engenharia e inteligência artificial aplicada a uma rotina crítica."
    >
      <div className="case-grid">
        {cases.map((item, index) => (
          <article className={index === 0 ? 'case-card case-card-featured' : 'case-card'} key={item.name}>
            <div className="case-topline">
              <span className="case-by">{item.by}</span>
              <span className="case-category">
                {item.name === 'Maya Vet Anest' ? 'PRODUTO EM DESTAQUE · ' : ''}
                {item.category}
              </span>
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
