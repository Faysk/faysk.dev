# faysk.dev

Hub pessoal do ecossistema Faysk: uma porta de entrada limpa para projetos, labs, ferramentas, estudos de caso e futuras superficies publicas.

Site em producao:

```txt
https://faysk.dev
```

Repositorio:

```txt
https://github.com/Faysk/faysk.dev
```

## Visao

O `faysk.dev` e o dominio principal. Ele funciona como um hub leve, rapido e facil de manter, sem carregar a responsabilidade tecnica de todos os projetos dentro dele.

A ideia central continua sendo:

```txt
faysk.dev           -> apresentacao, identidade e indice
lab.faysk.dev       -> browser diagnostics lab
tools.faysk.dev     -> ferramentas pequenas no futuro
work.faysk.dev      -> estudos de caso e escrita tecnica no futuro
```

O root domain nao deve virar um app pesado. Ele deve mostrar quem e Faysk, o que existe, o que esta em andamento e para onde o visitante deve ir.

## Estado Atual

O hub agora e um site estatico gerado com Astro e TypeScript.

Ele renderiza:

- hero principal com o dominio como sinal de primeira dobra;
- mapa visual do ecossistema;
- secao de modelo operacional;
- grid de projetos/labs;
- filtros por tipo;
- busca simples por texto;
- links para GitHub e `lab.faysk.dev`;
- manifesto, favicon, OG card, sitemap e headers para Cloudflare Pages.

## Arquitetura

```txt
faysk.dev/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
├── public/
│   ├── _headers
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── assets/
│       ├── icons/
│       └── img/
└── src/
    ├── components/
    ├── data/
    │   └── projects.ts
    ├── layouts/
    ├── pages/
    │   └── index.astro
    ├── scripts/
    └── styles/
```

## Como Funciona

O Astro gera HTML estatico a partir de componentes em `src/components`.

O conteudo editavel do hub fica principalmente em:

```txt
src/data/projects.ts
```

Esse arquivo concentra:

- `site`: metadados do dominio, URLs principais e descricao;
- `projectTypes`: tipos usados pelos filtros;
- `projects`: lista de projetos exibidos no grid;
- `operatingNotes`: cards do modelo operacional;
- `stackPrinciples`: principios de evolucao tecnica;
- `ecosystemSurfaces`: mapa de subdominios atuais e planejados.

Para adicionar um novo projeto ao hub, adicione um item em `projects`:

```ts
{
  name: "Nome do projeto",
  type: "project",
  status: "planned",
  url: "https://projeto.faysk.dev",
  repo: "https://github.com/Faysk/projeto",
  description: "Resumo curto do projeto.",
  stack: ["Cloudflare", "Astro"],
  featured: false
}
```

## Stack

- Astro
- TypeScript
- CSS modular em `src/styles/site.css`
- JavaScript pequeno apenas para filtros/busca
- Cloudflare Pages
- Build estatico em `dist/`

## Desenvolvimento Local

Instale as dependencias:

```powershell
npm install
```

Rode o servidor local:

```powershell
npm run dev
```

Depois acesse:

```txt
http://127.0.0.1:4321/
```

Valide o build:

```powershell
npm run build
```

Preview do build:

```powershell
npm run preview
```

## Deploy

Configuracao recomendada no Cloudflare Pages:

```txt
Framework preset: Astro
Build command:    npm run build
Build output:     dist
Root directory:   /
Production branch: main
Node version:     22 ou superior
```

Dominio:

```txt
faysk.dev
```

O arquivo `public/_headers` e copiado para `dist/_headers` durante o build.

## Modelo de Repositorios

A estrategia recomendada e manter cada projeto serio em um repositorio separado.

```txt
E:\Project\
├── faysk.dev\       -> hub / root domain
├── faysk-lab\       -> lab.faysk.dev
├── faysk-tools\     -> tools.faysk.dev no futuro
└── nome-projeto\    -> projeto.faysk.dev no futuro
```

Essa separacao evita que um experimento quebre o dominio principal, melhora o versionamento e permite deploys independentes no Cloudflare Pages.

## Direcao Visual

O hub deve ser:

- limpo;
- moderno;
- legivel;
- rapido;
- responsivo;
- com identidade propria;
- menos "dashboard tecnico" e mais "home base".

O lab pode ser mais experimental. O hub precisa ser mais calmo e objetivo.

## Roadmap

### Curto Prazo

- Refinar textos de apresentacao pessoal.
- Adicionar links reais de contato quando estiverem definidos.
- Adicionar screenshots ou preview cards dos projetos principais.
- Melhorar metadados sociais com uma imagem OG rasterizada, se necessario.

### Medio Prazo

- Criar secoes de estudos de caso.
- Adicionar timeline de projetos.
- Criar content collections para escrita tecnica.
- Criar padrao visual reutilizavel para futuros subdominios.
- Adicionar analytics privacy-friendly, se fizer sentido.

### Longo Prazo

- Integrar conteudo dinamico via Cloudflare Workers ou D1 somente quando houver necessidade real.
- Criar um indice automatico de projetos publicados.
- Criar areas dedicadas como `tools.faysk.dev`, `work.faysk.dev` ou `notes.faysk.dev`.
- Evoluir o hub para uma central de portfolio, produtos, labs e escrita tecnica.

## O Que Nao Deve Entrar Aqui

Evitar colocar no hub:

- telemetria pesada;
- experimentos instaveis;
- APIs invasivas;
- backend sem necessidade;
- codigo de projetos que merecem repositorio proprio.

O hub deve apontar para esses projetos, nao absorver todos eles.

## Licenca

MIT License.
