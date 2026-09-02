/** Todo o conteúdo da página. Editar aqui, não no JSX. */

export const IDENTITY = {
  name: 'Klaus Quirino Terra',
  eyebrow: 'Engenharia de produto · Brasil',
  headline: ['Do silício', 'ao agente.'],
  thesis:
    'Firmware em C no ESP32, rádio Zigbee, a rede do cliente, a infra em Proxmox, o serviço em Cloud Run, o app na loja e o agente de IA que atende no WhatsApp.',
  thesisEmphasis: 'Oito camadas — e eu escrevo em todas elas.',
  email: 'klaus@hipercube.ia.br',
  portrait: '/klaus-terra.jpg',
  portraitWebp: '/klaus-terra.webp',
  portraitAlt: 'Klaus Quirino Terra, de perfil, terno cinza e camisa branca',
  github: 'https://github.com/klausterra',
  site: 'https://klausterra.com.br',
} as const

export type Role = { org: string; text: string }
export const ROLES: Role[] = [
  { org: 'Atimus Agro', text: 'CTO e CPO. Plataforma de editais, incentivo fiscal à P&D e inteligência de marca para o agronegócio.' },
  { org: 'Hipercube', text: 'CEO. IA aplicada: produto, treinamento e automação de operação.' },
  { org: 'Hiperenge', text: 'CEO. Engenharia, automação predial e residencial, redes e documentos.' },
  { org: 'BlackHEx', text: 'CEO. Cibersegurança e inteligência clínica auditável.' },
]

/** A pilha, do topo (agente) para a base (silício). O nível é a posição física real. */
export type Layer = { level: string; name: string; tech: string; product: string }
export const LAYERS: Layer[] = [
  { level: 'L7', name: 'Agente', tech: 'Gemini 2.5 Pro · RAG · voz · WhatsApp / Telegram', product: 'Maya Hermes — a assistente que também programa' },
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
  { value: '20', label: 'produtos e plataformas' },
  { value: '113', label: 'repositórios' },
  { value: '8', label: 'camadas da pilha' },
  { value: '4', label: 'empresas' },
]

export type Product = { by: string; name: string; text: string; tech: string }
export const PRODUCTS: Product[] = [
  { by: 'Hiperenge', name: 'Maya Home',
    text: 'Automação residencial em quatro níveis: do controle por app à IA local que entende voz natural em português e antecipa a rotina da casa. Servidor no datacenter ou dentro da residência — a versão Edge funciona sem internet.',
    tech: 'Home Assistant · integrações próprias · Cloud Run · Firestore' },
  { by: 'Hiperenge', name: 'Maya Knox',
    text: 'Segurança patrimonial com visão computacional rodando na GPU do próprio cliente. Detecção por YOLO acelerada em TensorRT; nenhum frame de câmera sai da rede local.',
    tech: 'Frigate · YOLOv9 · ONNX · NVIDIA TensorRT' },
  { by: 'Atimus Agro', name: 'Athos',
    text: 'Plataforma de editais do agronegócio: portal do cliente, painel administrativo e API. Em reescrita greenfield conduzida em paralelo à operação, sem parar quem já usa.',
    tech: 'FastAPI · PostgreSQL 16 · Alembic · React 19' },
  { by: 'Atimus Agro', name: 'Lei do Bem',
    text: 'Lê notas fiscais em PDF — inclusive digitalizadas —, classifica a elegibilidade ao incentivo fiscal da Lei 11.196/2005 e devolve a planilha pronta. Reclassificação manual auditável e consulta em linguagem natural sobre o acervo.',
    tech: 'FastAPI · OCR · React · Cloud Run' },
  { by: 'Atimus Agro · Hipercube', name: 'BrandPulse',
    text: 'Monitoramento de marca multi-tenant, entregue em duas instâncias de produção independentes. Os segredos de cada cliente ficam cifrados em repouso, um por tenant.',
    tech: 'FastAPI · Fernet · Secret Manager · Next.js 14' },
  { by: 'BlackHEx · Hipercube', name: 'Meds / MedEvidence',
    text: 'Inteligência de evidência clínica para profissionais de saúde no Brasil. Não diagnostica e não prescreve: cita a diretriz, com posologia e protocolo quando o documento está no acervo. Cada área clínica fica bloqueada até existir um revisor humano responsável.',
    tech: 'PWA · Vite + React · Cloud Run · RAG sobre acervo curado' },
  { by: 'Hiperenge', name: 'Tesserion & GED',
    text: 'Gestão física e financeira de obras, e gestão eletrônica de documentos de projeto com permissão por perfil de usuário — engenharia que precisa saber quem viu qual revisão.',
    tech: 'Next.js 14 · Express · Prisma · Supabase' },
  { by: 'BlackHEx', name: 'Kali Ops',
    text: 'Plataforma de treinamento em Kali Linux: trilha prática de operações ofensivas e defensivas em laboratório isolado, para times que precisam aprender fazendo.',
    tech: 'Kali Linux · laboratório isolado · OWASP' },
  { by: 'Hipercube', name: 'Marketing autônomo',
    text: 'Um agente que publica sozinho, três vezes por dia: coleta notícia por RSS, escreve, gera a imagem com a logo aplicada, sobe no CDN e posta no Instagram e no LinkedIn. Nenhum operador no meio.',
    tech: 'Gemini · Imagen 4 · n8n · FastAPI · LXC' },
]

export type Principle = { title: string; text: string }
export const PRINCIPLES: Principle[] = [
  { title: 'Inferência local quando o dado é sensível',
    text: 'Vigilância roda YOLO na GPU do cliente, não numa nuvem de terceiro. O aplicativo de saúde processa os dados do Health Connect no aparelho e simplesmente não tem backend. Quando o dado é caro de vazar, ele não viaja.' },
  { title: 'Humano no ponto de decisão',
    text: 'No produto clínico, cada especialidade permanece bloqueada até haver um revisor responsável por ela — decisão registrada em ADR, não em reunião. O sistema cita a diretriz; quem decide é o profissional.' },
  { title: 'Núcleo único, verticais isoladas',
    text: 'A plataforma de IA é um núcleo replicado por vertical, cada uma com tenant, prompt e deploy próprios. Custa mais repositório e entrega isolamento de falha, de dado e de cliente.' },
  { title: 'Custo de IA é métrica de engenharia',
    text: 'Proxy próprio medindo token a token o que cada tarefa consome, com saldo, guardrails configuráveis e exportação para Prometheus. O gasto com modelo é tratado como qualquer outro SLI.' },
  { title: 'O que é público sai sanitizado',
    text: 'Tutoriais e repositórios de referência vão para fora com placeholders no lugar de IP, serial, MAC e nome de cliente. A versão que ensina não é a versão que expõe.' },
  { title: 'Auto-hospedar onde faz sentido',
    text: 'Gestão de projeto, BI, analytics e gestão de documentos rodando em Proxmox próprio. Menos assinatura, mais controle do dado — e a conta não cresce com o time.' },
]

export type Org = { role: string; name: string; text: string; href: string; label: string }
export const ORGS: Org[] = [
  { role: 'CTO & CPO', name: 'Atimus Agro', text: 'Tecnologia para o agronegócio: editais, incentivo fiscal à pesquisa e inteligência de marca.', href: 'https://atimus.agr.br', label: 'atimus.agr.br' },
  { role: 'CEO', name: 'Hipercube', text: 'IA aplicada — produto, automação de operação e a Hipercube Academy, com treinamentos e cursos.', href: 'http://hipercube.ia.br', label: 'hipercube.ia.br' },
  { role: 'CEO', name: 'Hiperenge', text: 'Engenharia e automação: residencial e predial, redes corporativas, obras e documentos técnicos.', href: 'https://www.hiperenge.com.br', label: 'hiperenge.com.br' },
  { role: 'CEO', name: 'BlackHEx', text: 'Cibersegurança, formação de times e inteligência clínica auditável para profissionais de saúde.', href: 'https://www.mayahome.ia.br', label: 'mayahome.ia.br' },
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

export const NAV = [
  { href: '#pilha', label: 'a pilha' },
  { href: '#produtos', label: 'produtos' },
  { href: '#empresas', label: 'empresas' },
  { href: '#engenharia', label: 'engenharia' },
  { href: '#contato', label: 'contato' },
] as const
