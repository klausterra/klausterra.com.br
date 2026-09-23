import { FEATURED_CASES } from '../strategyContent'
import { analytics } from '../lib/analytics'
import { Section } from './Section'

export function FeaturedCases() {
  const priority = ['Maya Vet Anest', 'HiperBuild']
  const cases = [...FEATURED_CASES].sort((a, b) => {
    const aIndex = priority.indexOf(a.name)
    const bIndex = priority.indexOf(b.name)
    if (aIndex === -1 && bIndex === -1) return 0
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

  return (
    <Section
      id="cases"
      eyebrow="Cases & evidências"
      title="Projetos que mostram como estratégia, produto e engenharia se encontram."
      lede="Os exemplos abaixo não estão aqui como catálogo de tecnologia. Eles mostram como problemas diferentes exigem decisões diferentes — e como a solução precisa sobreviver ao mundo real."
    >
      <div className="case-grid">
        {cases.map((item, index) => {
          const isPriority = index < 2

          return (
            <article className={isPriority ? 'case-card case-card-priority' : 'case-card'} key={item.name}>
              <div className="case-topline">
                <span className="case-by">{item.by}</span>
                <span className="case-category">
                  {isPriority ? 'EM FOCO · ' : ''}
                  {item.category}
                </span>
              </div>
              <h3>{item.name}</h3>

              <div className="case-block">
                <span>Problema</span>
                <p>{item.problem}</p>
              </div>
              <div className="case-block">
                <span>Decisão / solução</span>
                <p>{item.decision}</p>
              </div>
              <div className="case-result">
                <span>Impacto / evidência</span>
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
          )
        })}
      </div>
    </Section>
  )
}
