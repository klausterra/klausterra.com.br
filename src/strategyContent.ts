export const POSITIONING = {
  name: 'Klaus Terra',
  title: 'Executivo de Tecnologia (CTO) · Produto & IA · Founder',
  headline: ['Transformo problemas complexos de negócio', 'em tecnologia que funciona.'],
  subheadline:
    'Estratégia, produto, arquitetura, software e inteligência artificial para empresas que precisam conectar decisão executiva à execução real.',
  signature: 'Da engenharia que move operações à IA que move negócios.',
  proof:
    'Mais de duas décadas acumulando camadas de experiência — sistemas críticos, liderança de equipes, capital intensivo, software, produto e IA — para decidir com visão de negócio sem perder profundidade técnica.',
  portrait: '/klaus-terra.jpg',
  portraitWebp: '/klaus-terra.webp',
  portraitAlt: 'Klaus Terra, executivo de tecnologia, CTO e founder',
  email: 'klaus@hipercube.ia.br',
  whatsapp: 'https://wa.me/5531995557007',
  whatsappLabel: '+55 31 99555-7007',
} as const

export const EXECUTIVE_SNAPSHOT = [
  { value: '20+', label: 'anos de trajetória', sub: 'engenharia, tecnologia e negócios' },
  { value: '250+', label: 'profissionais liderados', sub: 'equipes multidisciplinares e operação' },
  { value: 'R$ 2 bi+', label: 'escala de CAPEX', sub: 'projetos e sistemas críticos' },
  { value: 'End-to-end', label: 'visão de tecnologia', sub: 'estratégia → produto → operação' },
] as const

export const EXECUTIVE_ROLES = [
  'CTO / Diretor de Tecnologia',
  'Technology Strategy',
  'Produto & IA',
  'Transformação & Arquitetura',
  'Board / Advisory',
] as const

export type ExecutiveCapability = {
  title: string
  text: string
  skills: string[]
}

export const EXECUTIVE_CAPABILITIES: ExecutiveCapability[] = [
  {
    title: 'Liderança & Negócio',
    text: 'Experiência de founder e executivo em ambientes nos quais pessoas, prazo, risco, investimento e operação precisam permanecer alinhados.',
    skills: ['Technology Strategy', 'Governança', 'Gestão de risco e capital', 'Liderança multidisciplinar'],
  },
  {
    title: 'Engenharia & Sistemas Críticos',
    text: 'Base construída em infraestrutura, energia, telecomunicações, automação e comissionamento de operações onde falha técnica tem consequência real.',
    skills: ['Sistemas críticos', 'Automação', 'Telecom', 'CAPEX / OPEX'],
  },
  {
    title: 'Produto & Software',
    text: 'Capacidade de transformar dores operacionais em produtos digitais, definir arquitetura, reduzir escopo e conduzir a passagem de MVP para operação.',
    skills: ['Product Strategy', 'Arquitetura de software', 'Cloud & integrações', 'MVP e escala'],
  },
  {
    title: 'Inteligência Artificial',
    text: 'IA tratada como sistema de produção: conectada a dados, processos, segurança, governança, custo e experiência de usuário.',
    skills: ['GenAI & agentes', 'RAG', 'Computer Vision', 'Edge AI & automação'],
  },
]

export const CAREER_GAINS: Record<string, { gain: string; skills: string[] }> = {
  'Grupo Quirino Terra': {
    gain:
      'Construiu disciplina de execução, liderança de campo e visão empresarial. A experiência como fundador adicionou responsabilidade sobre contratação, custos, risco, caixa e consequências reais das decisões.',
    skills: ['Liderança operacional', 'Sistemas críticos', 'Gestão de equipes', 'Visão empresarial'],
  },
  'SM&A Sistemas Elétricos': {
    gain:
      'Aprofundou diagnóstico técnico, automação, proteção e controle — formando a base de raciocínio para integrar sistemas físicos com software e dados.',
    skills: ['Automação industrial', 'Comissionamento', 'Proteção & controle', 'Diagnóstico técnico'],
  },
  'Progen S.A.': {
    gain:
      'Ampliou a visão de engenharia para projetos de grande escala, integrando disciplinas, orçamento e governança em ambientes de alta complexidade.',
    skills: ['CAPEX / OPEX', 'Engenharia multidisciplinar', 'Telecom & instrumentação', 'Governança técnica'],
  },
  'Vale · Anglo American': {
    gain:
      'Consolidou a perspectiva de owner: decisões técnicas avaliadas também por risco, capital, continuidade operacional e governança corporativa.',
    skills: ['Owner team', 'Gestão de risco', 'Decisão de capital', 'Governança corporativa'],
  },
  'Atimus Agro': {
    gain:
      'Transformou a bagagem de engenharia e operação em liderança C-level de tecnologia e produto, conectando times, arquitetura, dados e entrega de software.',
    skills: ['C-level', 'Produto digital', 'Times de engenharia', 'Arquitetura & dados'],
  },
  'BlackHex · Hipercube · Hiperenge · Maya': {
    gain:
      'Integra as camadas anteriores em venture building: estratégia, tecnologia, produto, IA, formação de times e criação de novos negócios sob uma mesma visão.',
    skills: ['Venture building', 'IA aplicada', 'Product strategy', 'Founder-led execution'],
  },
}

export type BusinessProblem = {
  title: string
  text: string
  signal: string
}

export const BUSINESS_PROBLEMS: BusinessProblem[] = [
  {
    title: 'IA sem caso de uso claro',
    text: 'A empresa quer aplicar inteligência artificial, mas ainda não sabe onde existe valor real, retorno mensurável ou risco aceitável.',
    signal: 'Estratégia & ROI',
  },
  {
    title: 'Integração com sistemas existentes',
    text: 'A prova de conceito funciona isolada, mas precisa conversar com dados, sistemas legados, APIs, permissões e processos reais da operação.',
    signal: 'Arquitetura & Integração',
  },
  {
    title: 'Produto novo saindo do papel',
    text: 'Existe uma oportunidade de produto ou SaaS, mas faltam decisões de escopo, arquitetura, experiência, modelo operacional e caminho para o MVP.',
    signal: 'Produto & Execução',
  },
  {
    title: 'Arquitetura crescendo sem direção',
    text: 'Custos, integrações, dados e dependências começaram a crescer e a empresa precisa simplificar antes que a complexidade vire dívida estrutural.',
    signal: 'CTO Advisory',
  },
  {
    title: 'Automação de processos complexos',
    text: 'Há trabalho manual, conhecimento espalhado e decisões repetitivas que podem ser transformados em fluxos, agentes e sistemas auditáveis.',
    signal: 'Automação & Agentes',
  },
  {
    title: 'Protótipo que precisa virar operação',
    text: 'O demo impressiona, mas agora precisa de segurança, observabilidade, governança, custos previsíveis, UX e confiabilidade para uso real.',
    signal: 'Engenharia de Produção',
  },
]

export type FeaturedCase = {
  by: string
  name: string
  category: string
  problem: string
  decision: string
  outcome: string
  href?: string
  hrefLabel?: string
}

export const FEATURED_CASES: FeaturedCase[] = [
  {
    by: 'Grupo BlackHex',
    name: 'Maya Vet Anest',
    category: 'Vertical AI · Saúde Veterinária',
    problem: 'Rotinas anestésicas acumulam cálculo, documentação e registros justamente quando a atenção do profissional precisa estar no paciente.',
    decision: 'Transformar o fluxo clínico em um produto vertical, automatizando tarefas repetitivas e organizando informação sem retirar do profissional a decisão clínica.',
    outcome: 'Evidencia capacidade de verticalizar IA em um domínio crítico, conectando produto, engenharia, experiência e responsabilidade operacional.',
    href: 'https://mayavetanest.ia.br',
    hrefLabel: 'Conhecer Maya Vet Anest',
  },
  {
    by: 'Grupo BlackHex',
    name: 'HiperBuild',
    category: 'Mentoria · Produto · IA',
    problem: 'Muita gente aprende ferramentas de IA, mas continua sem saber transformar uma ideia em produto, software funcional e negócio sustentável.',
    decision: 'Criar uma formação prática baseada em construção real: problema, produto, arquitetura, IA, software, validação e modelo de negócio na mesma jornada.',
    outcome: 'Transforma experiência prática de construção em método, formação executiva e geração de novos builders e oportunidades de negócio.',
    href: 'https://hiperbuild.ia.br',
    hrefLabel: 'Conhecer HiperBuild',
  },
  {
    by: 'Hipercube',
    name: 'Maya One',
    category: 'IA · Agentes · Automação',
    problem: 'Conhecimento, sistemas e execução técnica ficam fragmentados entre interfaces e fluxos diferentes.',
    decision: 'Projetar uma camada conversacional multimodal capaz de acessar conhecimento, acionar automações e interagir com sistemas por texto e voz.',
    outcome: 'Demonstra IA como interface operacional integrada a conhecimento, automações e sistemas, e não como chatbot isolado.',
    href: 'https://maya.hipercube.ia.br',
    hrefLabel: 'Conhecer Maya One',
  },
  {
    by: 'Grupo BlackHex · Hipercube',
    name: 'Meds · MedEvidence',
    category: 'IA · Conhecimento · Medicina',
    problem: 'Profissionais precisam localizar rapidamente informação clínica confiável em acervos extensos e sujeitos a atualização.',
    decision: 'Estruturar uma experiência de consulta rápida com IA referenciada em acervo curado e fontes clínicas definidas.',
    outcome: 'Demonstra governança de conhecimento, rastreabilidade e desenho responsável de IA em contexto sensível.',
    href: 'https://meds.ia.br',
    hrefLabel: 'Conhecer Meds',
  },
  {
    by: 'Hiperenge · Grupo BlackHex',
    name: 'Tesserion & HiperGED',
    category: 'Engenharia · Dados · Compliance',
    problem: 'Execução física, custo, documentação e versões de projetos podem divergir e criar perda de controle operacional.',
    decision: 'Conectar medição, orçamento e gestão documental em sistemas voltados à realidade de projetos de engenharia.',
    outcome: 'Mostra como conhecimento operacional de engenharia pode ser convertido em software B2B, dados e governança.',
  },
  {
    by: 'Grupo BlackHex',
    name: 'BrandPulse',
    category: 'IA · Social Media · Automação',
    problem: 'Planejamento, publicação, métricas, comentários e múltiplas redes ficam espalhados entre ferramentas e trabalho manual.',
    decision: 'Unificar operação social e automação com IA em uma plataforma preparada para integrações e agentes.',
    outcome: 'Conecta produto, integração e automação para transformar marketing em um sistema contínuo de operação e aprendizado.',
    href: 'https://brandpulse.ia.br',
    hrefLabel: 'Conhecer BrandPulse',
  },
]

export type LabProject = {
  name: string
  area: string
  text: string
  href?: string
}

export const LAB_PROJECTS: LabProject[] = [
  {
    name: 'Maya Home',
    area: 'Casa Inteligente · IA local',
    text: 'Automação residencial com foco em privacidade, resiliência e inteligência executada próxima da operação.',
    href: 'https://www.mayahome.ia.br',
  },
  {
    name: 'Maya Knox',
    area: 'Visão Computacional · Edge AI',
    text: 'Vigilância perimetral com processamento local e filtragem inteligente de eventos relevantes.',
    href: 'https://knox.mayahome.ia.br',
  },
  {
    name: 'Money Day',
    area: 'Fintech · Produto',
    text: 'Finanças pessoais com foco em reduzir fricção e organizar decisões em ciclos curtos de orçamento.',
    href: 'https://moneyday.ia.br',
  },
  {
    name: 'Athos',
    area: 'Experiência anterior · Produto B2B',
    text: 'Plataforma para gestão de consultoria técnica, rastreabilidade de entregas e documentação.',
  },
  {
    name: 'Lei do Bem',
    area: 'Experiência anterior · IA & Automação',
    text: 'Pipeline de OCR e classificação assistida por IA aplicado à análise documental de P&D.',
  },
]

export type WorkMode = {
  number: string
  title: string
  text: string
  delivers: string
}

export const WORK_MODES: WorkMode[] = [
  {
    number: '01',
    title: 'Diagnóstico & Estratégia',
    text: 'Entender o problema antes de escolher a tecnologia. Mapear processos, restrições, riscos, retorno e onde IA realmente cria vantagem.',
    delivers: 'Diagnóstico executivo · prioridades · roadmap',
  },
  {
    number: '02',
    title: 'Arquitetura',
    text: 'Desenhar sistemas, integrações, dados, segurança, custos e operação com simplicidade suficiente para evoluir sem virar um labirinto.',
    delivers: 'Arquitetura · decisões técnicas · plano de implementação',
  },
  {
    number: '03',
    title: 'Produto & Execução',
    text: 'Transformar a decisão em MVP, sistema ou produto operacional, priorizando valor, observabilidade e aprendizado rápido com usuário real.',
    delivers: 'MVP · implantação · evolução orientada por métricas',
  },
  {
    number: '04',
    title: 'Advisory Executivo',
    text: 'Apoiar CEO, CTO e liderança em decisões de tecnologia, produto e IA sem exigir a criação de uma grande estrutura interna para cada problema.',
    delivers: 'Decisão · governança · acompanhamento',
  },
]

export const COMMERCIAL = {
  eyebrow: 'Projetos · Advisory · Parcerias',
  title: 'Tecnologia, liderança ou novos negócios: vamos começar pelo problema certo.',
  text:
    'A conversa pode começar por um projeto, CTO advisory, arquitetura, produto, IA aplicada, parceria estratégica ou oportunidade de negócio. O ponto comum é transformar complexidade em decisão e execução.',
  primaryLabel: 'Discutir um projeto',
  secondaryLabel: 'Parcerias & ecossistema',
  secondaryHref: 'https://blackhex.com.br',
} as const

export const STRATEGY_NAV = [
  { href: '#executivo', label: 'perfil' },
  { href: '#problemas', label: 'problemas' },
  { href: '#cases', label: 'cases' },
  { href: '#competencias', label: 'competências' },
  { href: '#trajetoria', label: 'trajetória' },
  { href: '#grupo', label: 'ecossistema' },
  { href: '#contato', label: 'contato' },
] as const
