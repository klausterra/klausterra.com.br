import { Section } from './Section'

const ECOSYSTEM = [
  {
    name: 'BlackHex',
    role: 'Grupo empresarial & venture building',
    text: 'Estrutura o portfólio, conecta empresas e organiza capital, estratégia e novas teses de negócio.',
    href: 'https://blackhex.com.br',
  },
  {
    name: 'Hipercube',
    role: 'Software, infraestrutura & IA',
    text: 'Desenvolvimento de produtos digitais, plataformas corporativas, integrações e inteligência artificial aplicada.',
    href: 'https://hipercube.ia.br',
  },
  {
    name: 'Hiperenge',
    role: 'Engenharia, energia & automação',
    text: 'Engenharia elétrica, automação, telecomunicações e sistemas técnicos para operações de alta complexidade.',
    href: 'https://www.hiperenge.com.br',
  },
  {
    name: 'HiperBuild',
    role: 'Educação, mentoria & construção de software',
    text: 'Formação prática para profissionais e empresas que querem construir produtos reais com inteligência artificial.',
    href: 'https://hiperbuild.ia.br',
  },
  {
    name: 'Maya',
    role: 'IA aplicada a ambientes e operações',
    text: 'Família de produtos que leva inteligência artificial, automação e percepção computacional para contextos específicos.',
    href: 'https://www.mayahome.ia.br',
  },
]

export function Ecosystem() {
  return (
    <Section
      id="grupo"
      eyebrow="Ecossistema"
      title="Uma marca pessoal no centro. Empresas especializadas na execução."
      lede="Klaus Terra concentra a autoridade e a visão. Cada empresa existe para aprofundar uma competência, sem transformar o perfil pessoal em catálogo comercial."
    >
      <div className="ecosystem-grid">
        {ECOSYSTEM.map((item) => (
          <a className="ecosystem-card" key={item.name} href={item.href} target="_blank" rel="noopener">
            <span>{item.role}</span>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <b>Conhecer →</b>
          </a>
        ))}
      </div>
    </Section>
  )
}
