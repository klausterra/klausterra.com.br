import { analytics } from '../lib/analytics'
import { Section } from './Section'

const OPERATING_LAYER = [
  {
    name: 'Hipercube',
    role: 'Software, infraestrutura & IA',
    text: 'Produtos digitais, plataformas corporativas, integrações e inteligência artificial aplicada.',
    href: 'https://hipercube.ia.br',
  },
  {
    name: 'Hiperenge',
    role: 'Engenharia, energia & automação',
    text: 'Engenharia elétrica, automação, telecomunicações e sistemas para operações de alta complexidade.',
    href: 'https://www.hiperenge.com.br',
  },
  {
    name: 'HiperBuild',
    role: 'Educação, mentoria & builders',
    text: 'Formação prática para profissionais e empresas que querem construir produtos reais com IA.',
    href: 'https://hiperbuild.ia.br',
  },
  {
    name: 'Maya',
    role: 'Família de produtos de IA',
    text: 'Produtos que levam automação, agentes e percepção computacional para contextos específicos.',
    href: 'https://www.mayahome.ia.br',
  },
]

export function Ecosystem() {
  return (
    <Section
      id="grupo"
      eyebrow="Ecossistema & Venture Building"
      title="Competência técnica convertida em empresas, produtos e novas teses de negócio."
      lede="A BlackHex organiza a visão de portfólio. Hipercube, Hiperenge, HiperBuild e os produtos Maya aprofundam competências diferentes — software, engenharia, educação e IA aplicada — sob uma direção comum."
    >
      <div className="ecosystem-map">
        <div className="ecosystem-founder">
          <span>Founder & direção executiva</span>
          <h3>Klaus Terra</h3>
          <p>Estratégia · tecnologia · produto · IA · novos negócios</p>
        </div>

        <div className="ecosystem-flow" aria-hidden="true">↓</div>

        <a
          className="ecosystem-holding"
          href="https://blackhex.com.br"
          target="_blank"
          rel="noopener"
          onClick={() => analytics.intentClick('ecosystem_blackhex')}
        >
          <span>Venture building · portfólio · capital</span>
          <h3>BlackHex</h3>
          <p>Estrutura o ecossistema, conecta empresas e organiza novas teses de negócio.</p>
          <b>Conhecer BlackHex →</b>
        </a>

        <div className="ecosystem-branches" aria-label="Empresas e linhas do ecossistema">
          {OPERATING_LAYER.map((item) => (
            <a
              className="ecosystem-card"
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener"
              onClick={() => analytics.intentClick(`ecosystem_${item.name.toLowerCase()}`)}
            >
              <span>{item.role}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <b>Conhecer →</b>
            </a>
          ))}
        </div>
      </div>

      <div className="ecosystem-investor">
        <div>
          <span>Parcerias & investimento</span>
          <h3>Aberto a conversas que acrescentem capital, distribuição, mercado ou capacidade estratégica.</h3>
          <p>
            O objetivo não é captar por captar: é aproximar pessoas e organizações que possam acelerar negócios
            com complementaridade real.
          </p>
        </div>
        <a href="#contato" onClick={() => analytics.intentClick('ecosystem_partnership')}>
          Conversar sobre parceria →
        </a>
      </div>
    </Section>
  )
}
