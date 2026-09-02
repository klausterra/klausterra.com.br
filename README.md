# klausterra.com.br

Página pessoal de Klaus Quirino Terra. Site estático de um único arquivo, sem build.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | a página inteira — HTML, CSS e JS inline |
| `_headers` | cabeçalhos de segurança e CSP (lidos pelo Cloudflare Pages) |
| `robots.txt` | indexação |
| `sitemap.xml` | sitemap de uma URL |

Fontes vêm do Google Fonts (Bricolage Grotesque, Newsreader, JetBrains Mono);
todo o resto é local. Nenhuma dependência, nenhum `node_modules`, nenhum passo de build.

## Deploy — Cloudflare Pages

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Selecione este repositório, branch `main`
3. **Framework preset:** `None`
4. **Build command:** deixe vazio
5. **Build output directory:** `/`
6. Após o primeiro deploy: **Custom domains** → `klausterra.com.br` (e `www`, se quiser redirecionar)

Push em `main` publica automaticamente.

## Editar

`index.html` é auto-contido. Os tokens de cor ficam no bloco `:root` no topo do `<style>`,
com os temas claro e escuro definidos lado a lado — mexa nos tokens, não nos componentes.

Os números do bloco de estatísticas (produtos, repositórios, camadas, empresas) são
manuais: se mudarem, atualize também o `<meta name="description">` e o rodapé.
