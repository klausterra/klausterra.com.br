/** Todo o conteúdo da página. Editar aqui, não no JSX. */

export const IDENTITY = {
  name: 'Klaus Quirino Terra',
  title: 'Engenheiro · Executivo de tecnologia e produto',
  eyebrow: 'Brasil',
  headline: ['Do silício', 'ao agente.'],
  thesis:
    'Eu projeto o sistema inteiro: o chip dentro do sensor, a rede que o conecta, o servidor que guarda o dado, o aplicativo na mão da pessoa e a inteligência que decide o que fazer.',
  thesisEmphasis: 'Oito camadas — e eu escrevo em todas elas.',
  who:
    'Sou engenheiro eletricista. Passei vinte anos em obra, mineração e sistemas críticos antes de construir software — e nunca parei de escrever código. Hoje lidero tecnologia e produto nas empresas que fundei.',
  email: 'klaus@hipercube.ia.br',
  github: 'https://github.com/klausterra',
  linkedin: 'https://www.linkedin.com/in/klausterra',
  youtube: 'https://www.youtube.com/@klausterra',
  instagram: 'https://www.instagram.com/klausterra',
  whatsapp: 'https://wa.me/5531995557007',
  whatsappLabel: '+55 31 99555-7007',
  site: 'https://klausterra.hipercube.ia.br',
  portrait: '/klaus-terra.jpg',
  portraitWebp: '/klaus-terra.webp',
  portraitAlt: 'Klaus Quirino Terra, de perfil, terno cinza e camisa branca',
} as const

export type Role = { org: string; role: string; text: string; href?: string }
export const ROLES: Role[] = [
  { org: 'BlackHex', role: 'CEO & Founder', text: 'Grupo de investimento em tecnologias disruptivas — a holding por trás das empresas abaixo.', href: 'https://blackhex.com.br' },
  { org: 'Hipercube', role: 'CEO & Founder', text: 'Empresa de aplicativos e desenvolvimento: app, sistema, plataforma e time de engenharia sob medida.', href: 'https://hipercube.ia.br' },
  { org: 'Hiperenge', role: 'CEO', text: 'Engenharia elétrica, telecomunicações, automação e sistemas críticos — e a Maya, a linha de casa inteligente com IA.', href: 'https://www.hiperenge.com.br' },
]

/** A pilha, do topo (agente) para a base (silício). O nível é a posição física real. */
export type Layer = { level: string; name: string; tech: string; product: string }
export const LAYERS: Layer[] = [
  { level: 'L7', name: 'Agente', tech: 'Gemini 2.5 Pro · RAG · voz · WhatsApp / Telegram', product: 'Hermes — a assistente que também programa' },
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
  { value: '3', label: 'empresas' },
]

export type Product = {
  by: string
  name: string
  text: string
  tech: string
  href?: string
  hrefLabel?: string
  /** card em evidência: ocupa duas colunas e lista o que a plataforma entrega */
  featured?: boolean
  offers?: string[]
  cta?: string
}
export const PRODUCTS: Product[] = [
  { by: 'Grupo BlackHex', name: 'EmpreenderIA', featured: true,
    text: 'A plataforma de formação do grupo, para quem empreende e para o time que precisa executar. Não é biblioteca de vídeo: junta conteúdo, gente e mentoria no mesmo lugar — e a mentora de IA foi treinada em estratégia de negócio, não em motivação genérica.',
    offers: [
      'Cursos de alta qualidade, com acesso individual ou por assinatura',
      'Palestras corporativas presenciais ou ao vivo online, customizadas para a empresa',
      'E-books e conteúdos avulsos, para quem quer só um tema',
      'Networking Club: comunidade de troca de experiência e negócio entre empreendedores',
      'IA mentora de estratégia: responde sobre o seu negócio, não sobre negócio em geral',
      'Plano Corporate Premium com acompanhamento e atendimento personalizado',
    ],
    cta: 'Conhecer a EmpreenderIA',
    tech: 'React · Vite · Firebase · Cloudflare',
    // Endereço oficial: empreenderia.ia.br — temporariamente em empreenderia.hipercube.ia.br
    href: 'https://empreenderia.hipercube.ia.br', hrefLabel: 'empreenderia.hipercube.ia.br' },

  { by: 'Hiperenge', name: 'Maya Home',
    text: 'A casa aprende a rotina de quem mora nela e passa a agir sozinha — luz, clima, irrigação, som, energia e segurança. Você fala em português e ela entende. Se a internet cair, continua funcionando: o cérebro fica dentro da casa, não numa nuvem lá fora.',
    tech: 'Home Assistant · integrações próprias · Cloud Run · Firestore',
    href: 'https://www.mayahome.ia.br', hrefLabel: 'mayahome.ia.br' },

  { by: 'Hipercube', name: 'Hermes',
    text: 'Uma assistente que atende no WhatsApp, por texto ou por voz, e lembra do que já foi conversado antes. Para a equipe técnica ela vai além: escreve e corrige código sozinha, no servidor, sem ninguém abrir o editor.',
    tech: 'PWA · Gemini 2.5 Pro · FastAPI · Cloud Run · RAG',
    href: 'https://maya.hipercube.ia.br', hrefLabel: 'maya.hipercube.ia.br' },

  { by: 'Hiperenge', name: 'Maya Knox',
    text: 'Câmeras que entendem o que estão vendo e avisam só quando importa: pessoa no perímetro, não folha caindo. A análise roda num computador dentro do próprio imóvel — nenhuma imagem sai da rede do cliente.',
    tech: 'Frigate · YOLOv9 · ONNX · NVIDIA TensorRT',
    href: 'https://knox.mayahome.ia.br', hrefLabel: 'knox.mayahome.ia.br' },

  { by: 'Grupo BlackHex', name: 'Maya Vet Anest',
    text: 'Assistente para o veterinário anestesista na hora do procedimento: calcula a dose pelo peso do animal, monta a ficha anestésica e deixa o protocolo farmacológico à mão. Substitui a tabela impressa e a conta no papel.',
    tech: 'React · Express · Firebase · agente Gemini por tenant',
    href: 'https://mayavetanest.ia.br', hrefLabel: 'mayavetanest.ia.br' },

  { by: 'Atimus Agro', name: 'Lei do Bem',
    text: 'A Lei do Bem devolve imposto para a empresa que investe em pesquisa — mas exige comprovar nota por nota. O sistema lê as notas fiscais, inclusive as escaneadas, separa o que é elegível e entrega a planilha pronta para o contador. Semanas de conferência manual viram horas.',
    tech: 'FastAPI · OCR · React · Cloud Run' },

  { by: 'Atimus Agro', name: 'Athos',
    text: 'O software que organiza a operação da consultoria: o cliente acompanha o andamento do próprio projeto num portal, e a equipe controla prazo, documento e entrega num painel único.',
    tech: 'FastAPI · PostgreSQL 16 · Alembic · React 19 · GCP' },

  { by: 'Atimus Agro · Hipercube', name: 'BrandPulse',
    text: 'Acompanha o que se fala da marca da empresa e devolve isso em painel, sem depender de alguém garimpando menção na mão. Cada cliente tem seu espaço isolado, com os dados dele separados dos demais.',
    tech: 'FastAPI · Fernet · Secret Manager · Next.js 14',
    href: 'https://brandpulse.atimus.agr.br', hrefLabel: 'brandpulse.atimus.agr.br' },

  { by: 'Grupo BlackHex · Hipercube', name: 'Meds · MedEvidence',
    text: 'Consulta para o médico à beira do leito: pergunta em português e recebe a resposta com a diretriz citada, incluindo dose e protocolo de sala. Não dá diagnóstico e não receita — mostra a fonte, e a decisão continua sendo do profissional. Cada especialidade só é liberada quando existe um médico revisor responsável por ela.',
    tech: 'PWA · Vite + React · Cloud Run · RAG sobre acervo curado',
    href: 'https://meds.ia.br', hrefLabel: 'meds.ia.br' },

  { by: 'Hipercube', name: 'Hipercube Academy',
    text: 'A frente de formação da Hipercube: treina o time do cliente para colocar IA em uso de verdade na operação, em vez de assistir a mais uma demonstração e voltar para a planilha.',
    tech: 'Next.js 14 · Cloudflare Pages',
    href: 'https://hipercube.ia.br/academy', hrefLabel: 'hipercube.ia.br/academy' },

  { by: 'Grupo BlackHex', name: 'Money Day',
    text: 'App de finanças pessoais para quem nunca conseguiu manter uma planilha. Orçamento por semana em vez de por mês, sem culpa e sem cobrança — pensado para gente ocupada e para quem se perde em controle complicado.',
    tech: 'Kotlin + Jetpack Compose · React · Firebase · Open Finance',
    href: 'https://moneyday.ia.br', hrefLabel: 'moneyday.ia.br' },

  { by: 'Hiperenge · Grupo BlackHex', name: 'Tesserion e HiperGED',
    text: 'O Tesserion mostra a obra por dentro: o que foi executado e quanto custou, lado a lado, em vez de duas planilhas que nunca fecham. O HiperGED guarda os documentos do projeto e sabe quem viu qual revisão — é o que resolve discussão de responsabilidade meses depois.',
    tech: 'Next.js 14 · Express · Prisma · Supabase' },

  { by: 'Hipercube', name: 'Marketing autônomo',
    text: 'Um sistema que cuida das redes sociais da empresa sozinho: lê as notícias do setor, escreve o post, cria a imagem já com a marca aplicada e publica no Instagram e no LinkedIn, três vezes por dia. Ninguém aprova no meio do caminho.',
    tech: 'Gemini · Imagen 4 · n8n · FastAPI · LXC' },
]

export type Principle = { title: string; text: string }
export const PRINCIPLES: Principle[] = [
  { title: 'Dado sensível não viaja',
    text: 'A análise das câmeras acontece num computador dentro do imóvel do cliente, não numa nuvem de terceiro. O aplicativo de saúde processa tudo no próprio celular e nem tem servidor. É mais trabalhoso de construir e é a única forma de prometer privacidade sem asterisco.' },
  { title: 'Onde a decisão é grave, há uma pessoa respondendo',
    text: 'No produto de saúde, cada especialidade fica bloqueada até existir um médico revisor com nome próprio por ela. O sistema mostra a fonte e a conclusão é do profissional. Automatizar a decisão seria mais fácil de vender e mais difícil de defender numa auditoria.' },
  { title: 'IA não conserta bagunça de documento',
    text: 'Se o acervo tem procedimento revogado e três versões do mesmo contrato, a IA cita com precisão o documento errado — e entrega resposta errada com fonte, o que aumenta a confiança em vez de reduzir. Antes de falar de tecnologia: qual é a versão vigente, quem a mantém, e o que já foi revogado e continua circulando.' },
  { title: 'Projeto de IA se orça em consumo, não em usuário',
    text: 'Muito piloto fecha bem na planilha e desanda quando cresce, porque foi estimado por número de usuário e volume de página. Eu peço três linhas antes de aprovar: consumo por operação, volume no mês e custo unitário. Texto técnico em português consome mais que o equivalente em inglês — isso entra na conta no primeiro mês, não no terceiro.' },
  { title: 'Uma base comum, cada cliente isolado',
    text: 'A plataforma de IA tem um núcleo só, replicado para cada segmento — casa, clínica veterinária, consultório, jurídico. Cada um roda separado, com seus dados e seu deploy. Dá mais trabalho e garante que problema em um cliente não alcança os outros.' },
  { title: 'O que publico sai limpo',
    text: 'Tutoriais e projetos de referência vão para fora sem endereço de rede, número de série ou nome de cliente. A versão que ensina não é a versão que expõe.' },
]

export type Stop = { period: string; org: string; role: string; text: string }
export const TRACK: Stop[] = [
  { period: '2009 – 2018', org: 'Grupo Quirino Terra', role: 'Fundador',
    text: 'Comissionamento elétrico e infraestrutura, com equipes de até 250 profissionais entre engenheiros, técnicos de campo e staff. Rede aérea, mobilização, fornecedores e start de obra — entrega no prazo em operação de alta complexidade.' },
  { period: '2018 – 2020', org: 'SM&A Sistemas Elétricos', role: 'Engenheiro de automação e controle',
    text: 'Comissionamento de salas elétricas: checagem, parametrização e testes a frio e a quente, garantindo partida segura de sistemas de potência e controle.' },
  { period: '2020 – 2023', org: 'Progen S.A.', role: 'Engenheiro eletricista',
    text: 'Elétrica, automação, instrumentação e telecomunicações no Projeto New Steel, de separação magnética a seco, com orçamento previsto de R$ 2 bilhões. Controle de Capex e Opex em projetos estratégicos de mineração e indústria pesada.' },
  { period: '2023 – 2024', org: 'Vale · Anglo American', role: 'Engenheiro eletricista · Owner Team',
    text: 'Projeto de Recursos Hídricos da Vale no complexo Vargem Grande e disciplinas técnicas no Owner Team da Anglo American — interface técnica, qualidade de projeto e alinhamento entre engenharia, operação e entrega.' },
  { period: 'Atuação anterior', org: 'Atimus Agro', role: 'CTO e CPO · posição encerrada',
    text: 'Liderei tecnologia e produto na consultoria de inovação e incentivos fiscais à P&D para o agronegócio, incluindo plataformas digitais para a operação e para os clientes.' },
  { period: '2023 →', org: 'Hiperenge · Maya · Hipercube · BlackHex', role: 'CEO & Founder',
    text: 'A mesma disciplina de campo aplicada a produto digital: sistemas críticos, prazo, risco e Capex agora em plataformas de IA, automação e agro.' },
]

export type Degree = { period: string; course: string; school: string; current?: boolean }
export const EDUCATION: Degree[] = [
  { period: '1999 – 2004', course: 'Engenharia Elétrica com ênfase em Telecomunicações', school: 'Universidade de Uberaba' },
  { period: '2005 – 2006', course: 'Especialização em Automação de Processos Industriais', school: 'Universidade de Uberaba' },
  { period: '2007 – 2008', course: 'MGA — Gestão Estratégica Empresarial', school: 'FGV' },
  { period: '2010 – 2011', course: 'MBA Executivo Internacional em Gerenciamento de Projetos', school: 'FGV' },
  { period: '2016 – 2017', course: 'Especialização em Engenharia e Gerenciamento de Manutenção', school: 'UCAM · Universidad Católica San Antonio de Murcia' },
  { period: '2017 – 2018', course: 'Especialização em Finanças, Investimentos e Banking', school: 'PUCRS' },
  { period: '2019 – 2020', course: 'Pós-graduação em Cibersegurança Ofensiva', school: 'Acadi-TI' },
  { period: '2021 – 2022', course: 'MBA em Liderança, Gestão de Equipes e Produtividade', school: 'PUCRS' },
  { period: '2025 – 2026', course: 'Pós-graduação em IA aplicada à Engenharia e Arquitetura', school: 'EBPÓS · Escola Brasileira de Pós-Graduação' },
  { period: '2026 – 2027', course: 'Pós-graduação em Engenharia de Inteligência Artificial', school: 'UNIPDS', current: true },
]

export type Org = { role: string; name: string; text: string; href?: string; label?: string }
export const ORGS: Org[] = [
  { role: 'CEO & Founder · holding', name: 'BlackHex', text: 'Grupo de investimento em tecnologias disruptivas para os mercados residencial, corporativo e digital. Reúne as empresas e os produtos abaixo sob uma arquitetura técnica comum.', href: 'https://blackhex.com.br', label: 'blackhex.com.br' },
  { role: 'CEO & Founder', name: 'Hipercube', text: 'Empresa de aplicativos e desenvolvimento. Constrói app, sistema, plataforma e automação sob medida — e treina o time do cliente na Academy.', href: 'https://hipercube.ia.br', label: 'hipercube.ia.br' },
  { role: 'CEO', name: 'Hiperenge', text: 'Engenharia de energia, telecomunicações e automação, com 20+ anos em sistemas críticos. É dela a linha Maya, de casa inteligente com IA.', href: 'https://www.hiperenge.com.br', label: 'hiperenge.com.br' },
  { role: 'linha de produto · Hiperenge', name: 'Maya', text: 'Casa inteligente com IA para residências de alto padrão: automação que aprende a rotina, e vigilância que analisa a imagem dentro do próprio imóvel.', href: 'https://www.mayahome.ia.br', label: 'mayahome.ia.br' },
  { role: 'portfólio da holding', name: 'EmpreenderIA · Maya Vet Anest · Money Day · HiperGED · Alpha-se', text: 'Formação e mentoria de negócio com IA, assistência em anestesia veterinária, finanças pessoais, gestão de documentos e classificados digitais.', href: 'https://empreenderia.hipercube.ia.br', label: 'empreenderia.hipercube.ia.br' },
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
  eyebrow: 'Se você veio contratar',
  title: 'Sua empresa precisa de um app, um sistema ou um time de desenvolvimento?',
  text:
    'Isso é a Hipercube, a empresa de aplicativos e desenvolvimento do grupo. Levamos do diagnóstico ao produto no ar: aplicativo, plataforma interna, automação de processo e IA aplicada onde ela realmente resolve — com a mesma engenharia que sustenta os produtos desta página.',
  href: 'https://hipercube.ia.br',
  label: 'hipercube.ia.br',
} as const

export const NAV = [
  { href: '#pilha', label: 'a pilha' },
  { href: '#produtos', label: 'produtos' },
  { href: '#engenharia', label: 'engenharia' },
  { href: '#trajetoria', label: 'trajetória' },
  { href: '#formacao', label: 'formação' },
  { href: '#grupo', label: 'grupo' },
  { href: '#contratar', label: 'contratar' },
  { href: '#contato', label: 'contato' },
] as const
