import { PRODUCTS } from '../content'
import { Section } from './Section'

export function Products() {
  return (
    <Section
      id="produtos"
      eyebrow="O que está no ar"
      title={
        <>
          Produtos em produção,
          <br />
          não protótipos de slide.
        </>
      }
      lede="Cada um destes tem cliente, domínio próprio e deploy automático. A lista é curta de propósito — é o que sobreviveu ao contato com a operação."
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
