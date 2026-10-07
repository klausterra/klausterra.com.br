export const POSITIONING = {
  name: 'Klaus Terra',
  title: 'Consultor Executivo em IA & Tecnologia · CTO · Founder',
  headline: ['IA e tecnologia para decisões', 'que fazem sentido para o negócio.'],
  subheadline:
    'Ajudo empresários e executivos a identificar onde a inteligência artificial realmente gera valor, reduzir decisões erradas e transformar oportunidades em projetos executáveis.',
  signature: 'Estratégia antes da ferramenta. Negócio antes do hype.',
  proof:
    'Minha atuação combina mais de duas décadas entre engenharia, sistemas críticos, liderança, software, produto, arquitetura e negócios. A consultoria parte do problema real, não da tecnologia da moda.',
  portrait: '/klaus-terra.jpg',
  portraitWebp: '/klaus-terra.webp',
  portraitAlt: 'Klaus Terra, consultor executivo em inteligência artificial e tecnologia',
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
  'Consultoria Executiva em IA',
  'CTO Advisory',
  'Technology Strategy',
  'Produto & Automação',
  'Arquitetura & Transformação',
] as const

export type ExecutiveCapability = {
  title: string
  text: string
  skills: string[]
}

export const EXECUTIVE_CAPABILITIES: ExecutiveCapability[] = [
  {
    title: 'Estratégia & Negócio',
    text: 'Apoio decisões de investimento, prioridade e adoção de tecnologia com leitura executiva de risco, retorno, operação e capacidade de execução.',
    skills: ['Technology Strategy', 'Governança', 'Priorização', 'Gestão de risco e capital'],
  },
  {
    title: 'IA & Automação',
    text: 'Identifico onde IA, agentes e automação podem reduzir atrito, acelerar processos ou criar novas capacidades sem transformar ferramenta em fim.',
    skills: ['GenAI & agentes', 'RAG', 'Automação', 'Computer Vision'],
  },
  {
    title: 'Produto & Software',
    text: 'Transformo oportunidades em escopo, arquitetura e plano de produto, conectando necessidade de negócio, usuário e engenharia.',
    skills: ['Product Strategy', 'Arquitetura de software', 'Cloud & integrações', 'MVP e escala'],
  },
  {
    title: 'Engenharia & Sistemas Críticos',
    text: 'Base técnica em infraestrutura, energia, telecom, automação e ambientes onde falha operacional tem consequência real.',
    skills: ['Sistemas críticos', 'Automação', 'Telecom', 'CAPEX / OPEX'],
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
    title: '“Onde IA realmente faz sentido na minha empresa?”',
    text: 'Mapeio processos, gargalos, riscos e oportunidades para separar casos de uso com valor real de iniciativas que só consomem tempo e orçamento.',
    signal: 'Diagnóstico Executivo',
  },
  {
    title: '“Preciso automatizar, mas não sei por onde começar.”',
    text: 'Organizo prioridades, dependências, dados, integrações e impacto operacional antes da escolha de ferramenta ou fornecedor.',
    signal: 'IA & Automação',
  },
  {
    title: '“Recebi uma proposta técnica e não sei se faz sentido.”',
    text: 'Atuo como segunda opinião executiva para avaliar arquitetura, escopo, custo, riscos, fornecedores e aderência ao problema de negócio.',
    signal: 'Second Opinion',
  },
  {
    title: '“Temos um produto ou projeto, mas falta direção técnica.”',
    text: 'Ajudo a reduzir escopo, escolher arquitetura, definir roadmap e alinhar tecnologia, produto e execução.',
    signal: 'CTO Advisory',
  },
  {
    title: '“A operação cresceu e a tecnologia virou um gargalo.”',
    text: 'Reviso processos, integrações, sistemas, dados e responsabilidades para reduzir complexidade e recuperar capacidade de decisão.',
    signal: 'Transformação',
  },
  {
    title: '“Quero alguém experiente para acompanhar as decisões.”',
    text: 'Atuação recorrente como conselheiro de tecnologia e IA para empresários, CEOs e lideranças que precisam de apoio sem montar uma estrutura executiva completa.',
    signal: 'Advisory Mensal',
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
    title: 'Diagnóstico Executivo de IA',
    text: 'Conversa estruturada para entender operação, gargalos, processos e oportunidades. O objetivo é identificar rapidamente o que merece atenção e o que não merece investimento agora.',
    delivers: 'Prioridades · riscos · oportunidades · próximos passos',
  },
  {
    number: '02',
    title: 'Roadmap de IA & Tecnologia',
    text: 'Aprofundamento do diagnóstico para transformar oportunidades em uma sequência executável de iniciativas, com dependências, esforço, impacto e critérios de decisão.',
    delivers: 'Roadmap · arquitetura · priorização · plano de implantação',
  },
  {
    number: '03',
    title: 'Second Opinion & Projetos',
    text: 'Avaliação independente de propostas, fornecedores, arquitetura, escopo ou projetos em andamento antes de comprometer orçamento, prazo ou operação.',
    delivers: 'Parecer executivo · riscos · alternativas · recomendação',
  },
  {
    number: '04',
    title: 'Advisory Executivo',
    text: 'Acompanhamento recorrente para empresários, CEOs e lideranças que precisam de apoio em decisões de IA, produto, arquitetura e tecnologia.',
    delivers: 'Decisão · governança · acompanhamento',
  },
]

export const COMMERCIAL = {
  eyebrow: 'Consultoria Executiva em IA & Tecnologia',
  title: 'Se a decisão envolve IA ou tecnologia e o impacto é de negócio, vale conversar.',
  text:
    'Você pode chegar com uma dúvida, uma proposta de fornecedor, um processo que precisa ser automatizado, um produto novo ou uma decisão de investimento. A primeira função da consultoria é organizar o problema antes de recomendar qualquer tecnologia.',
  primaryLabel: 'Falar sobre meu desafio',
  secondaryLabel: 'Conhecer a Hipercube',
  secondaryHref: 'https://hipercube.ia.br',
} as const

export const STRATEGY_NAV = [
  { href: '#problemas', label: 'quando me chamar' },
  { href: '#como-trabalho', label: 'consultoria' },
  { href: '#cases', label: 'cases' },
  { href: '#executivo', label: 'experiência' },
  { href: '#trajetoria', label: 'trajetória' },
  { href: '#contato', label: 'contato' },
] as const
