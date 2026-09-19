import { PRODUCTS } from '../content'
import { analytics } from '../lib/analytics'
import { Section } from './Section'

export function Products() {
  return (
    <Section
      id="produtos"
      eyebrow="Ventures & Produtos"
      title="Construindo tecnologia e negócios de ponta a ponta."
      lede="Não se trata de catálogo comercial, mas de comprovação empírica de execução. Soluções em inteligência artificial, engenharia, saúde, agronegócio e automação com clientes reais e infraestrutura em produção."
    >
      <div className="prods">
        {PRODUCTS.map((product) => (
          <article className={product.featured ? 'prod feat' : 'prod'} key={product.name}>
            <div className="prod-header">
              <span className="by">{product.by}</span>
              {product.klausRole && <span className="klaus-role-badge">{product.klausRole}</span>}
            </div>

            <h3>{product.name}</h3>

            {product.problem && (
              <div className="prod-problem">
                <span className="problem-label">Problema:</span>
                <p>{product.problem}</p>
              </div>
            )}

            <div className="prod-solution">
              {product.problem && <span className="solution-label">Solução:</span>}
              <p>{product.text}</p>
            </div>

            {product.impact && (
              <div className="prod-impact">
                <span className="impact-label">Impacto & Tração:</span>
                <p>{product.impact}</p>
              </div>
            )}

            {product.offers ? (
              <ul className="offers">
                {product.offers.map((offer) => (
                  <li key={offer}>{offer}</li>
                ))}
              </ul>
            ) : null}

            {product.href ? (
              product.cta ? (
                <a
                  className="prod-cta"
                  href={product.href}
                  target="_blank"
                  rel="noopener"
                  onClick={() => analytics.productCta(product.name)}
                >
                  {product.cta} →
                </a>
              ) : (
                <a
                  className="prod-link"
                  href={product.href}
                  target="_blank"
                  rel="noopener"
                  onClick={() => analytics.productCta(product.name)}
                >
                  {product.hrefLabel} →
                </a>
              )
            ) : null}

            <p className="tech">
              <span className="tech-label">Stack:</span> {product.tech}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
