# klausterra.com.br

Site pessoal de Klaus Quirino Terra. React 19 + Vite 7 + TypeScript, exportado como site estático.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # tsc -b && vite build → dist/
npm run preview  # serve o dist/
npm run check    # só a checagem de tipos
```

## Deploy — Cloudflare Pages

| Campo | Valor |
|---|---|
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 ou superior |

Push em `main` publica automaticamente. Depois do primeiro deploy: **Custom domains → `klausterra.com.br`**.

## Onde mexer

**Para editar conteúdo, o arquivo é `src/content.ts`.** Todo o texto da página vive lá, em arrays tipados —
camadas da pilha, produtos, princípios, empresas, repositórios abertos, links de navegação e os números do
bloco de estatísticas. Adicionar um produto é acrescentar um objeto ao array `PRODUCTS`; nada de JSX.

```
index.html              entry do Vite: meta tags, SEO, JSON-LD, fontes, tema pré-paint
public/                 copiado direto para dist/ sem processar
  _headers              CSP e cabeçalhos de segurança (lidos pelo Cloudflare Pages)
  robots.txt
  sitemap.xml
src/
  content.ts            ← todo o conteúdo da página
  index.css             tokens de cor e todos os estilos
  useTheme.ts           tema claro/escuro com persistência
  App.tsx               composição das seções
  components/
    TopBar.tsx  Hero.tsx  Stack.tsx  Section.tsx
    Products.tsx  Principles.tsx  Orgs.tsx  OpenSource.tsx
    Contact.tsx  Footer.tsx  icons.tsx
```

### Estilos

`src/index.css` é CSS puro organizado por tokens. O bloco `:root` define a paleta clara; os blocos
`@media (prefers-color-scheme: dark)` e `:root[data-theme="dark"]` redefinem **só os tokens**. Para mudar
cor, mexa nos tokens — nunca dentro dos componentes.

Os três estados de tema: sem escolha explícita a página segue o sistema operacional (nenhum `data-theme`
no `<html>`); o botão grava a escolha em `localStorage` e passa a mandar nas duas direções.

### Tipografia

Bricolage Grotesque (títulos), Newsreader (corpo), JetBrains Mono (rótulos e dados), via Google Fonts.
A CSP em `public/_headers` libera exatamente `fonts.googleapis.com` e `fonts.gstatic.com` — se trocar de
provedor de fonte, atualize a CSP também.

## Manutenção

Os números do bloco de estatísticas (`FIGURES` em `content.ts`) são manuais. Se mudarem, atualize também
o `<meta name="description">` e o `og:description` no `index.html`.
