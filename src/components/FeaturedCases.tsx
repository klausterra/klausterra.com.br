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
      eyebrow="Em foco agora"
      title="Maya Vet Anest e HiperBuild são hoje os dois projetos prioritários."
      lede="São frentes diferentes, mas complementares: uma demonstra IA vertical aplicada a uma rotina crítica de saúde; a outra transforma experiência prática de engenharia, produto e negócios em formação para quem quer construir com IA de verdade."
    >
      <div className="case-grid">
        {cases.map((item, index) => {
          const isPriority = index < 2

          return (
            <article className={isPriority ? 'case-card case-card-priority' : 'case-card'} key={item.name}>
              <div className="case-topline">
                <span className="case-by">{item.by}</span>
                <span className="case-category">
                  {isPriority ? 'PROJETO PRIORITÁRIO · ' : ''}
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
          )
        })}
      </div>
    </Section>
  )
}
