/** Todo o conteúdo da página. Editar aqui, não no JSX. */

export const IDENTITY = {
  name: 'Klaus Terra',
  fullName: 'Klaus Quirino Terra',
  title: 'Executivo de Tecnologia, Produto & IA',
  eyebrow: 'Founder & Executivo · Brasil',
  headline: ['Transformando engenharia, software e inteligência artificial', 'em produtos, empresas e negócios.'],
  thesis:
    'Eu projeto o sistema inteiro: o chip dentro do sensor, a rede que o conecta, o servidor que guarda o dado, o aplicativo na mão da pessoa e a inteligência que decide o que fazer.',
  thesisEmphasis: 'Oito camadas integradas — da infraestrutura de base à aplicação final.',
  who:
    'Engenheiro eletricista com duas décadas de experiência em sistemas críticos, infraestrutura e inovação. Da liderança em megaprojetos industriais à criação de plataformas digitais, firmware e IA em produção: hoje atuo como founder e executivo liderando tecnologia, produtos e estratégias no ecossistema de empresas que fundei.',
  email: 'klaus@hipercube.ia.br',
  github: 'https://github.com/klausterra',
  linkedin: 'https://www.linkedin.com/in/klausterra',
  youtube: 'https://www.youtube.com/@klausterra',
  instagram: 'https://www.instagram.com/klausterra',
  whatsapp: 'https://wa.me/5531995557007',
  whatsappLabel: '+55 31 99555-7007',
  site: 'https://klausterra.blackhex.com.br',
  portrait: '/klaus-terra.jpg',
  portraitWebp: '/klaus-terra.webp',
  portraitAlt: 'Klaus Terra, executivo de tecnologia e founder',
  emblem: {
    src: '/images/brasao-terra.png',
    srcJpeg: '/images/brasao-terra.jpg',
    srcSvg: '/images/brasao-terra.svg',
    alt: 'Brasão heráldico Terra — Virtute Stirpe Semper',
    title: 'Brasão Heráldico Terra',
    subtitle: 'Virtute · Stirpe · Semper',
    text: 'Símbolo de legado, continuidade e construção. Utilizado como elemento de identidade familiar e pessoal, representa tradição, responsabilidade e visão de longo prazo.',
    secondaryText:
      'A disciplina e a permanência da engenharia encontram a inovação contínua do software e da inteligência artificial. Um selo institucional que reflete solidez, compromisso e responsabilidade na construção de negócios perenes.',
  },
} as const

export type Role = { org: string; role: string; text: string; href?: string }
export const ROLES: Role[] = [
  { org: 'BlackHex', role: 'Founder & CEO', text: 'Holding e ecossistema de investimentos em tecnologia, software e inteligência artificial.', href: 'https://blackhex.com.br' },
  { org: 'Hipercube', role: 'Founder & CEO', text: 'Desenvolvimento de software, aplicativos, plataformas escaláveis e IA aplicada sob medida.', href: 'https://hipercube.ia.br' },
  { org: 'Hiperenge', role: 'CEO', text: 'Engenharia de energia, automação e sistemas críticos — 20+ anos de solidez e linha Maya.', href: 'https://www.hiperenge.com.br' },
]

/** A pilha, do topo (agente) para a base (silício). O nível é a posição física real. */
export type Layer = { level: string; name: string; tech: string; product: string }
export const LAYERS: Layer[] = [
  { level: 'L7', name: 'Agente', tech: 'Gemini 2.5 Pro · RAG · voz · WhatsApp / Telegram', product: 'Hermes — assistente autônoma e engenharia de software' },
  { level: 'L6', name: 'Aplicação', tech: 'React 19 · Vite · Next.js 14 · Kotlin + Compose', product: 'Athos, Meds, Money Day, Maya Home' },
  { level: 'L5', name: 'Borda', tech: 'Cloudflare Pages · Workers · D1 · Tunnel', product: 'proxy same-origin, cookies HttpOnly, CSP restrito' },
  { level: 'L4', name: 'Serviço', tech: 'FastAPI · Express · Cloud Run · PostgreSQL 16 · Firestore', product: 'APIs multi-tenant com segredo cifrado por cliente' },
  { level: 'L3', name: 'Infra', tech: 'Proxmox · LXC · Docker · GCP · Secret Manager', product: 'Plane, Metabase, Matomo e EDMS auto-hospedados' },
  { level: 'L2', name: 'Rede', tech: 'Omada SDN · WireGuard · VLAN · MQTT / EMQX', product: 'VPN site-to-site entre controladores de cliente' },
  { level: 'L1', name: 'Rádio', tech: 'Zigbee 802.15.4 · Wi-Fi CSI · mmWave · RTSP', product: 'presença sem câmera, lida no próprio canal Wi-Fi' },
  { level: 'L0', name: 'Silício', tech: 'ESP32-C6 em C / ESP-IDF · M5Stack · NVIDIA TensorRT', product: 'servidor web com OTA e captive portal em 4 MB de flash' },
]

export type Figure = { value: string; label: string }
export const FIGURES: Figure[] = [
  { value: '20+', label: 'anos de engenharia' },
  { value: '8', label: 'camadas da pilha' },
  { value: '113', label: 'repositórios' },
  { value: '10', label: 'formações' },
  { value: '3', label: 'empresas líderes' },
]

export type Product = {
  by: string
  name: string
  klausRole?: string
  problem?: string
  text: string
  tech: string
  href?: string
  hrefLabel?: string
  featured?: boolean
  offers?: string[]
  cta?: string
}
export const PRODUCTS: Product[] = [
  {
    by: 'Grupo BlackHex',
    name: 'EmpreenderIA',
    klausRole: 'Founder & Estratégia de Produto',
    featured: true,
    problem: 'Empreendedores e executivos enfrentam sobrecarga de ferramentas e falta de orientação prática e contextualizada para aplicar IA em seus negócios.',
    text: 'A plataforma de formação e ecossistema de negócios do grupo. Une formação executiva, comunidade de networking e mentoria estratégica com IA treinada em modelos reais de negócio.',
    offers: [
      'Cursos executivos e trilhas práticas de implementação de IA',
      'Palestras corporativas presenciais e imersões estratégicas',
      'E-books e frameworks práticos de tomada de decisão',
      'Networking Club: comunidade exclusiva entre founders e líderes',
      'IA mentora de estratégia: orientações sobre o negócio do usuário com privacidade',
      'Programa Corporate Premium para empresas e equipes de alta performance',
    ],
    cta: 'Conhecer a EmpreenderIA',
    tech: 'React · Vite · Firebase · Cloudflare',
    href: 'https://empreenderia.hipercube.ia.br',
    hrefLabel: 'empreenderia.hipercube.ia.br',
  },
  {
    by: 'Hiperenge',
    name: 'Maya Home',
    klausRole: 'Founder & Arquitetura de Produto',
    problem: 'Sistemas de automação dependentes de nuvens externas quebram a privacidade, sofrem com latência e param de funcionar quando a internet cai.',
    text: 'Automação residencial inteligente com aprendizado contínuo de rotina e processamento 100% on-premise. Controle por voz em português com privacidade absoluta e operação ininterrupta.',
    tech: 'Home Assistant · integrações próprias · Cloud Run · Firestore',
    href: 'https://www.mayahome.ia.br',
    hrefLabel: 'mayahome.ia.br',
  },
  {
    by: 'Hipercube',
    name: 'Hermes',
    klausRole: 'Founder & Engenharia de IA',
    problem: 'Comunicação corporativa dispersa e lentidão na execução técnica entre times de produto, atendimento e desenvolvimento.',
    text: 'Assistente inteligente multimodal que atende por texto e voz no WhatsApp/Telegram, mantém memória de longo prazo e executa rotinas técnicas e correções de código no servidor de forma autônoma.',
    tech: 'PWA · Gemini 2.5 Pro · FastAPI · Cloud Run · RAG',
    href: 'https://maya.hipercube.ia.br',
    hrefLabel: 'maya.hipercube.ia.br',
  },
  {
    by: 'Hiperenge',
    name: 'Maya Knox',
    klausRole: 'Founder & Visão Computacional',
    problem: 'Sistemas tradicionais de vigilância disparam alarmes falsos com folhas e animais, além de enviar vídeos privados para servidores externos.',
    text: 'Vigilância perimetral de alta precisão com IA que filtra apenas detecções relevantes. Processamento em tempo real com hardware local de alta performance — nenhum vídeo deixa a rede do cliente.',
    tech: 'Frigate · YOLOv9 · ONNX · NVIDIA TensorRT',
    href: 'https://knox.mayahome.ia.br',
    hrefLabel: 'knox.mayahome.ia.br',
  },
  {
    by: 'Grupo BlackHex · Hipercube',
    name: 'Meds · MedEvidence',
    klausRole: 'Founder & Estratégia de Produto',
    problem: 'Médicos e plantonistas necessitam de respostas rápidas e seguras sobre diretrizes clínicas, doses e protocolos de sala à beira do leito.',
    text: 'Plataforma de consulta clínica rápida com IA referenciada exclusivamente em diretrizes oficiais e acervo médico curado por especialistas responsáveis por cada área.',
    tech: 'PWA · Vite + React · Cloud Run · RAG sobre acervo curado',
    href: 'https://meds.ia.br',
    hrefLabel: 'meds.ia.br',
  },
  {
    by: 'Grupo BlackHex',
    name: 'Maya Vet Anest',
    klausRole: 'Founder & Concepção',
    problem: 'Cálculos manuais de doses anestésicas veterinárias em emergências aumentam o risco de erro e consomem tempo crítico.',
    text: 'Assistente digital veterinário que calcula dosagens por peso e espécie, gera fichas anestésicas completas e disponibiliza protocolos farmacológicos em segundos.',
    tech: 'React · Express · Firebase · agente Gemini por tenant',
    href: 'https://mayavetanest.ia.br',
    hrefLabel: 'mayavetanest.ia.br',
  },
  {
    by: 'Atimus Agro',
    name: 'Athos',
    klausRole: 'Tecnologia & Produto (Gestão Anterior)',
    problem: 'Consultorias de alta complexidade sofrem com falta de rastreabilidade de entregas, documentos e controle de prazos entre equipes e clientes.',
    text: 'Plataforma digital para gestão de consultoria técnica: portal do cliente com acompanhamento em tempo real, painel de controle operacional e controle rigoroso de compliance documental.',
    tech: 'FastAPI · PostgreSQL 16 · Alembic · React 19 · GCP',
  },
  {
    by: 'Atimus Agro',
    name: 'Lei do Bem',
    klausRole: 'Engenharia de IA & Automação (Gestão Anterior)',
    problem: 'Comprovação manual de milhares de notas fiscais de P&D para incentivos fiscais exige semanas de trabalho contábil exaustivo.',
    text: 'Pipeline inteligente de OCR e IA fiscal que analisa documentos escaneados, classifica itens elegíveis com rigor técnico e gera planilhas prontas para apuração contábil em minutos.',
    tech: 'FastAPI · OCR · React · Cloud Run',
  },
  {
    by: 'Grupo BlackHex',
    name: 'Money Day',
    klausRole: 'Founder & Produto',
    problem: 'A maioria dos aplicativos de finanças mensais é complexa e gera abandono por excesso de fricção no registro de despesas.',
    text: 'App de finanças pessoais focado em ciclos semanais de orçamento, proporcionando controle intuitivo e sem sobrecarga para o usuário moderno.',
    tech: 'Kotlin + Jetpack Compose · React · Firebase · Open Finance',
    href: 'https://moneyday.ia.br',
    hrefLabel: 'moneyday.ia.br',
  },
  {
    by: 'Hiperenge · Grupo BlackHex',
    name: 'Tesserion & HiperGED',
    klausRole: 'Founder & Arquitetura',
    problem: 'Divergências crônicas entre o que foi executado na obra e o custo real registrado, somadas a versões desatualizadas de projetos de engenharia.',
    text: 'Solução integrada para engenharia: o Tesserion cruza execução física com medições orçamentárias, enquanto o HiperGED audita acessos e revisões de arquivos técnicos.',
    tech: 'Next.js 14 · Express · Prisma · Supabase',
  },
  {
    by: 'Hipercube',
    name: 'Hipercube Academy',
    klausRole: 'Founder & Liderança Educacional',
    problem: 'Treinamentos genéricos de IA geram demonstrações teóricas sem impacto real na produtividade operacional das empresas.',
    text: 'Formação técnica e prática para capacitar equipes corporativas a aplicar inteligência artificial, automação e ferramentas modernas no dia a dia da operação.',
    tech: 'Next.js 14 · Cloudflare Pages',
    href: 'https://hipercube.ia.br/academy',
    hrefLabel: 'hipercube.ia.br/academy',
  },
  {
    by: 'Atimus Agro · Hipercube',
    name: 'BrandPulse',
    klausRole: 'Arquitetura de Dados & Segurança',
    problem: 'Monitoramento manual de menções e sentimento de marca em múltiplos canais sem proteção de dados de clientes.',
    text: 'Painel de inteligência de marca com monitoramento automatizado, relatórios sintéticos e isolamento criptográfico por tenant.',
    tech: 'FastAPI · Fernet · Secret Manager · Next.js 14',
    href: 'https://brandpulse.atimus.agr.br',
    hrefLabel: 'brandpulse.atimus.agr.br',
  },
  {
    by: 'Hipercube',
    name: 'Marketing Autônomo',
    klausRole: 'Engenharia de Automação & IA',
    problem: 'Criação constante de conteúdo corporativo consome horas de profissionais que deveriam focar em produto e estratégia.',
    text: 'Sistema autônomo que monitora tendências de mercado, redige artigos técnicos, gera imagens vetorizadas com a identidade da marca e programa publicações automaticamente.',
    tech: 'Gemini · Imagen 4 · n8n · FastAPI · LXC',
  },
]

export type Principle = { title: string; text: string }
export const PRINCIPLES: Principle[] = [
  {
    title: 'Dado sensível não viaja sem necessidade',
    text: 'A análise de vídeo e visão computacional ocorre no servidor local do cliente, nunca em nuvem de terceiros. Aplicações sensíveis processam dados na borda ou no próprio dispositivo, garantindo privacidade real por arquitetura, não por promessa contratual.',
  },
  {
    title: 'Onde a decisão é crítica, o ser humano é soberano',
    text: 'Em produtos de saúde e sistemas operacionais, a IA atua como ferramenta de ampliação e evidência, citando fontes canônicas. A decisão final pertence sempre ao profissional responsável.',
  },
  {
    title: 'Inteligência artificial não corrige governança desorganizada',
    text: 'Se a base de conhecimento contém documentos revogados e versões divergentes, a IA entregará erros com alta convicção. Antes do algoritmo, consolidamos a verdade documental e os critérios de validação.',
  },
  {
    title: 'IA se orça em consumo unitário, não em licença estática',
    text: 'Projetos escaláveis exigem previsibilidade de custo por operação, latência e volume de tokens. A arquitetura é desenhada com medição em tempo real e guardrails desde o dia zero.',
  },
  {
    title: 'Base arquitetural sólida, clientes estritamente isolados',
    text: 'Nossos ecossistemas compartilham padrões de engenharia de excelência, mas cada operação corporativa mantém seus dados, segredos e instâncias em ambientes segregados e protegidos.',
  },
  {
    title: 'Transparência e proteção de segredo industrial',
    text: 'O conhecimento e frameworks que compartilhamos publicamente são rigorosamente higienizados de dados confidenciais, chaves e topologias de clientes.',
  },
]

export type Stop = {
  phase: string
  period: string
  org: string
  role: string
  text: string
}
export const TRACK: Stop[] = [
  {
    phase: 'ENGENHARIA & INFRAESTRUTURA',
    period: '2009 – 2018',
    org: 'Grupo Quirino Terra',
    role: 'Fundador & Engenheiro Eletricista',
    text: 'Comissionamento elétrico de alta complexidade e infraestrutura pesada, liderando equipes de até 250 profissionais em subestações, redes de média/alta tensão e partidas de plantas com disciplina de prazo e segurança.',
  },
  {
    phase: 'AUTOMAÇÃO & CONTROLE',
    period: '2018 – 2020',
    org: 'SM&A Sistemas Elétricos',
    role: 'Engenheiro de Automação e Controle',
    text: 'Comissionamento técnico de salas elétricas industriais: checagem detalhada de malhas, parametrização de relés digitais e testes a frio e a quente para sistemas de potência e automação.',
  },
  {
    phase: 'SISTEMAS CRÍTICOS & MINERAÇÃO',
    period: '2020 – 2023',
    org: 'Progen S.A.',
    role: 'Engenheiro Eletricista Especialista',
    text: 'Engenharia elétrica, telecomunicações, instrumentação e automação no megaprojeto New Steel (separação magnética a seco com orçamento de R$ 2 bilhões). Gestão de Capex/Opex e conformidade de engenharia.',
  },
  {
    phase: 'GESTÃO ESTRATÉGICA & OWNER TEAM',
    period: '2023 – 2024',
    org: 'Vale · Anglo American',
    role: 'Engenheiro Eletricista · Owner Team',
    text: 'Projetos estratégicos de infraestrutura hídrica e disciplinas eletrotécnicas para plantas de grande porte, alinhando engenharia executiva, governança de risco e excelência operacional.',
  },
  {
    phase: 'TECNOLOGIA & PRODUTO',
    period: 'Atuação Anterior',
    org: 'Atimus Agro',
    role: 'CPO & CTO (Transição Concluída)',
    text: 'Liderança técnica e de produto em consultoria de inovação para o agronegócio, desenvolvendo plataformas de inteligência de dados, OCR fiscal para a Lei do Bem e automações corporativas.',
  },
  {
    phase: 'FOUNDER & LIDERANÇA EXECUTIVA',
    period: '2023 → Atual',
    org: 'BlackHex · Hipercube · Hiperenge · Maya',
    role: 'CEO & Founder',
    text: 'Liderança executiva de ecossistema integrado: aplicando o rigor de vinte anos de engenharia de campo e sistemas críticos à criação de empresas de software, produtos com IA e plataformas de alto valor.',
  },
]

export type Degree = { period: string; course: string; school: string; current?: boolean }
export const EDUCATION: Degree[] = [
  { period: '1999 – 2004', course: 'Engenharia Elétrica com ênfase em Telecomunicações', school: 'Universidade de Uberaba' },
  { period: '2005 – 2006', course: 'Especialização em Automação de Processos Industriais', school: 'Universidade de Uberaba' },
  { period: '2007 – 2008', course: 'MGA — Gestão Estratégica Empresarial', school: 'FGV - Fundação Getulio Vargas' },
  { period: '2010 – 2011', course: 'MBA Executivo Internacional em Gerenciamento de Projetos', school: 'FGV - Fundação Getulio Vargas' },
  { period: '2016 – 2017', course: 'Especialização em Engenharia e Gerenciamento de Manutenção', school: 'UCAM · Universidad Católica San Antonio de Murcia' },
  { period: '2017 – 2018', course: 'Especialização em Finanças, Investimentos e Banking', school: 'PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul' },
  { period: '2019 – 2020', course: 'Pós-graduação em Cibersegurança Ofensiva', school: 'Acadi-TI' },
  { period: '2021 – 2022', course: 'MBA em Liderança, Gestão de Equipes e Produtividade', school: 'PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul' },
  { period: '2025 – 2026', course: 'Pós-graduação em IA aplicada à Engenharia e Arquitetura', school: 'EBPÓS · Escola Brasileira de Pós-Graduação' },
  { period: '2026 – 2027', course: 'Pós-graduação em Engenharia de Inteligência Artificial', school: 'UNIPDS', current: true },
]

export type Org = { role: string; name: string; text: string; href?: string; label?: string; highlight?: boolean }
export const ORGS: Org[] = [
  {
    role: 'Holding · Ecossistema Empresarial',
    name: 'BlackHex',
    text: 'Grupo de investimento e venture builder em tecnologias disruptivas. Atua como a holding e plataforma que estrutura, conecta e impulsiona as empresas e produtos do ecossistema sob arquitetura técnica e governança compartilhadas.',
    href: 'https://blackhex.com.br',
    label: 'blackhex.com.br',
    highlight: true,
  },
  {
    role: 'Software · Aplicativos & IA',
    name: 'Hipercube',
    text: 'Empresa de tecnologia focada no desenvolvimento ágil de produtos digitais, aplicativos móveis, plataformas corporativas sob medida e inteligência artificial aplicada à produtividade.',
    href: 'https://hipercube.ia.br',
    label: 'hipercube.ia.br',
  },
  {
    role: 'Engenharia · Sistemas Críticos & Energia',
    name: 'Hiperenge',
    text: 'Engenharia elétrica, automação predial e industrial, telecomunicações e infraestrutura crítica com mais de 20 anos de experiência consolidada em projetos de alta complexidade.',
    href: 'https://www.hiperenge.com.br',
    label: 'hiperenge.com.br',
  },
  {
    role: 'Educação Executiva & Builders',
    name: 'Hiperbuild',
    text: 'Braço educacional e comunidade de builders focado em capacitar profissionais e líderes a conceber, construir e escalar soluções reais utilizando ferramentas modernas de IA.',
    href: 'https://hiperbuild.ia.br',
    label: 'hiperbuild.ia.br',
  },
  {
    role: 'Linha de Produtos · Casa Inteligente',
    name: 'Maya',
    text: 'Linha de produtos para automação residencial premium e segurança inteligente, integrando IA on-premise com proteção rigorosa da privacidade.',
    href: 'https://www.mayahome.ia.br',
    label: 'mayahome.ia.br',
  },
  {
    role: 'Portfólio de Ventures',
    name: 'Ventures do Ecossistema',
    text: 'EmpreenderIA (educação executiva & mentoria), Meds / MedEvidence (suporte clínico com IA), Money Day (finanças pessoais), Maya Vet Anest (anestesiologia veterinária) e HiperGED / Tesserion (engenharia & compliance).',
    href: 'https://blackhex.com.br',
    label: 'ecossistema blackhex',
  },
]

export type Repo = { name: string; text: string; label: string; href: string }
export const OPEN_SOURCE: Repo[] = [
  { name: 'tokens-monitor', text: 'Bridge OpenAI-compatible com contabilidade de token em tempo real, guardrails e métricas Prometheus.', label: 'PYTHON · MIT', href: 'https://github.com/klausterra/tokens-monitor' },
  { name: 'maya_garden', text: 'Irrigação inteligente no Home Assistant: duas zonas, motor de agendamento próprio e card Lovelace.', label: 'PYTHON · MIT', href: 'https://github.com/klausterra/maya_garden' },
  { name: 'esp32c6_webserver_at', text: 'Servidor web em ESP-IDF com OTA dupla, captive portal e comandos AT em 4 MB de flash.', label: 'C · ESP-IDF', href: 'https://github.com/klausterra/esp32c6_webserver_at' },
  { name: 'maya-commbox', text: 'Integração Home Assistant para módulos CommBox MIO, com detecção automática de modelo.', label: 'PYTHON', href: 'https://github.com/klausterra/maya-commbox' },
  { name: 'frigatenvidia', text: 'Referência sanitizada para rodar Frigate com YOLOv9 acelerado por TensorRT em GPU NVIDIA.', label: 'DOCKER · ONNX', href: 'https://github.com/klausterra/frigatenvidia' },
  { name: 'omada-sdn-para-cloud', text: 'Manual técnico em português para migrar sites do Omada on-premise para os controladores em nuvem.', label: 'GITHUB PAGES', href: 'https://github.com/klausterra/omada-sdn-para-cloud' },
  { name: 'token-calculator', text: 'Contagem de tokens em CLI, API e web, com preview token-a-token e estimativa de custo.', label: 'PYTHON · MIT', href: 'https://github.com/klausterra/token-calculator' },
  { name: 'todos os repositórios →', text: 'Dezenove projetos públicos entre integrações, firmware, ferramentas de IA e documentação técnica.', label: 'GITHUB', href: 'https://github.com/klausterra?tab=repositories' },
]

export type Social = { id: 'linkedin' | 'youtube' | 'instagram' | 'github'; label: string; handle: string; href: string }
export const SOCIAL: Social[] = [
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/klausterra', href: 'https://www.linkedin.com/in/klausterra' },
  { id: 'youtube', label: 'YouTube', handle: '@klausterra', href: 'https://www.youtube.com/@klausterra' },
  { id: 'instagram', label: 'Instagram', handle: '@klausterra', href: 'https://www.instagram.com/klausterra' },
  { id: 'github', label: 'GitHub', handle: 'klausterra', href: 'https://github.com/klausterra' },
]

export const OFFER = {
  eyebrow: 'Parcerias & Novos Negócios',
  title: 'Sua empresa precisa de software, inteligência artificial ou um time de tecnologia de alta performance?',
  text:
    'Por meio da Hipercube e do ecossistema BlackHex, transformamos diagnósticos estratégicos em produtos de software no ar: aplicativos móveis, plataformas corporativas escaláveis, automação inteligente de processos e agentes de IA — sustentados pela mesma engenharia de excelência apresentada neste site.',
  href: 'https://hipercube.ia.br',
  label: 'hipercube.ia.br',
} as const

export const NAV = [
  { href: '#pilha', label: 'a pilha' },
  { href: '#produtos', label: 'ventures & produtos' },
  { href: '#trajetoria', label: 'trajetória' },
  { href: '#legado', label: 'legado' },
  { href: '#grupo', label: 'blackhex' },
  { href: '#principios', label: 'princípios' },
  { href: '#formacao', label: 'formação' },
  { href: '#contato', label: 'contato' },
] as const
