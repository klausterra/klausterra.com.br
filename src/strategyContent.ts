export const POSITIONING = {
  name: 'Klaus Terra',
  title: 'Engenheiro · Executivo de Tecnologia · Empreendedor',
  headline: ['Transformo problemas complexos de negócio', 'em tecnologia que funciona.'],
  subheadline:
    'Estratégia, arquitetura, software e inteligência artificial para empresas que precisam sair da ideia, integrar sistemas e chegar à operação.',
  signature: 'Tecnologia com mais clareza.',
  proof:
    'Duas décadas entre engenharia, sistemas críticos, software, produto e liderança — com produtos próprios, operações reais e decisões técnicas que precisam funcionar fora da apresentação.',
  portrait: '/klaus-terra.jpg',
  portraitWebp: '/klaus-terra.webp',
  portraitAlt: 'Klaus Terra, engenheiro e executivo de tecnologia',
  email: 'klaus@hipercube.ia.br',
  whatsapp: 'https://wa.me/5531995557007',
  whatsappLabel: '+55 31 99555-7007',
} as const

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
    by: 'Hipercube',
    name: 'Maya One',
    category: 'IA · Agentes · Automação',
    problem: 'Conhecimento, sistemas e execução técnica ficam fragmentados entre interfaces e fluxos diferentes.',
    decision: 'Projetar uma camada conversacional multimodal capaz de acessar conhecimento, acionar automações e interagir com sistemas por texto e voz.',
    outcome: 'IA tratada como interface operacional, e não apenas como chatbot isolado.',
    href: 'https://maya.hipercube.ia.br',
    hrefLabel: 'Conhecer Maya One',
  },
  {
    by: 'Grupo BlackHex',
    name: 'Maya Vet Anest',
    category: 'Vertical AI · Saúde Veterinária',
    problem: 'Rotinas anestésicas acumulam cálculo, documentação e registros justamente quando a atenção do profissional precisa estar no paciente.',
    decision: 'Transformar o fluxo clínico em produto vertical, automatizando tarefas repetitivas sem retirar do profissional a decisão clínica.',
    outcome: 'Um caso de IA vertical desenhado a partir do processo de trabalho, não a partir do modelo de linguagem.',
    href: 'https://mayavetanest.ia.br',
    hrefLabel: 'Conhecer Maya Vet Anest',
  },
  {
    by: 'Grupo BlackHex · Hipercube',
    name: 'Meds · MedEvidence',
    category: 'IA · Conhecimento · Medicina',
    problem: 'Profissionais precisam localizar rapidamente informação clínica confiável em acervos extensos e sujeitos a atualização.',
    decision: 'Estruturar uma experiência de consulta rápida com IA referenciada em acervo curado e fontes clínicas definidas.',
    outcome: 'Uso de IA orientado por governança de conhecimento e rastreabilidade, em vez de resposta genérica.',
    href: 'https://meds.ia.br',
    hrefLabel: 'Conhecer Meds',
  },
  {
    by: 'Hiperenge · Grupo BlackHex',
    name: 'Tesserion & HiperGED',
    category: 'Engenharia · Dados · Compliance',
    problem: 'Execução física, custo, documentação e versões de projetos podem divergir e criar perda de controle operacional.',
    decision: 'Conectar medição, orçamento e gestão documental em sistemas voltados à realidade de projetos de engenharia.',
    outcome: 'Software construído a partir de uma dor operacional conhecida em campo e gestão de projetos.',
  },
  {
    by: 'Grupo BlackHex',
    name: 'BrandPulse',
    category: 'IA · Social Media · Automação',
    problem: 'Planejamento, publicação, métricas, comentários e múltiplas redes ficam espalhados entre ferramentas e trabalho manual.',
    decision: 'Unificar operação social e automação com IA em uma plataforma preparada para integrações e agentes.',
    outcome: 'Marketing tratado como sistema operacional de distribuição e aprendizado, não como calendário de posts.',
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
    name: 'HiperBuild',
    area: 'Educação · Mentoria · Builders',
    text: 'Formação prática para transformar ideias em produtos e software com IA, conectando engenharia, produto e negócio.',
    href: 'https://hiperbuild.ia.br',
  },
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
  eyebrow: 'Projetos & Advisory',
  title: 'Tem um problema difícil de tecnologia ou IA?',
  text:
    'Conte o contexto. Se eu acreditar que consigo gerar valor, avançamos para uma conversa objetiva sobre diagnóstico, arquitetura, produto ou implantação.',
  primaryLabel: 'Discutir um projeto',
  secondaryLabel: 'Conhecer a Hipercube',
  secondaryHref: 'https://hipercube.ia.br',
} as const

export const STRATEGY_NAV = [
  { href: '#problemas', label: 'problemas' },
  { href: '#cases', label: 'cases' },
  { href: '#como-trabalho', label: 'como trabalho' },
  { href: '#trajetoria', label: 'trajetória' },
  { href: '#grupo', label: 'ecossistema' },
  { href: '#principios', label: 'princípios' },
  { href: '#contato', label: 'contato' },
] as const
