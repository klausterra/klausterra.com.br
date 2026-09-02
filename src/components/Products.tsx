import { PRODUCTS } from '../content'
import { Section } from './Section'

export function Products() {
  return (
    <Section
      id="produtos"
      eyebrow="Evidência"
      title="Treze produtos com cliente usando."
      lede="Não é catálogo de venda: está aqui para mostrar alcance. Casa, agro, saúde, obra, finanças e operação — todos no ar, com domínio próprio e cliente usando. É a diferença entre falar de tecnologia e ter tecnologia rodando."
    >
      <div className="prods">
        {PRODUCTS.map((product) => (
          <article className="prod" key={product.name}>
            <span className="by">{product.by}</span>
            <h3>{product.name}</h3>
            <p>{product.text}</p>
            {product.href ? (
              <a className="prod-link" href={product.href} target="_blank" rel="noopener">
                {product.hrefLabel} →
              </a>
            ) : null}
            <p className="tech">{product.tech}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
