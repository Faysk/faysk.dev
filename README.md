# Faysk DevOps

Portfolio DevOps para automacao, CI/CD, infraestrutura, operacao cloud e entregas prontas para producao. O dominio continua sendo `faysk.dev`, mas a marca publica agora aponta para Faysk DevOps.

Site em producao:

```txt
https://faysk.dev
```

Repositorio:

```txt
https://github.com/Faysk/faysk.dev
```

## Visao

O `faysk.dev` e o dominio principal. Ele funciona como uma vitrine leve, rapida e facil de manter para mostrar experiencia real em infraestrutura, suporte, automacao, CI/CD, cloud, troubleshooting e entrega de projetos.

A ideia central continua sendo simples:

```txt
faysk.dev           -> marca DevOps, portfolio, timeline e indice
lab.faysk.dev       -> browser diagnostics lab
tools.faysk.dev     -> ferramentas pequenas no futuro
work.faysk.dev      -> estudos de caso e escrita tecnica no futuro
```

O root domain nao deve virar um app pesado. Ele deve mostrar a marca profissional, o que ja foi entregue, quais areas tecnicas sustentam esse trabalho e para onde o visitante deve ir.

## Estado Atual

O hub agora e um site estatico gerado com Astro e TypeScript.

Ele renderiza:

- hero principal com identidade Faysk DevOps e pipeline visual;
- mapa visual de superficies publicas e entregas;
- timeline profissional em formato de esteira DevOps;
- secao de modelo operacional focada em delivery, infraestrutura e operacao;
- grid de projetos, labs e trabalhos de cliente;
- filtros por tipo;
- busca simples por texto;
- links para GitHub e `lab.faysk.dev`;
- manifesto, favicon, marca SVG, OG card, sitemap e headers para Cloudflare Pages.

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
- `careerTimeline`: linha do tempo profissional usada pela esteira DevOps;
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

O site deve ter cara de DevOps:

- marca escura, tecnica e confiavel;
- sinais visuais de pipeline, automacao e operacao;
- verde/ciano/azul como acentos de terminal, observabilidade e cloud;
- leitura rapida em desktop e mobile;
- logo, favicon e OG card alinhados com automacao e infraestrutura;
- conteudo objetivo, sem parecer landing page generica.

O lab pode ser mais experimental. O dominio principal precisa transmitir presenca profissional, clareza e maturidade operacional.

## Roadmap

### Curto Prazo

- Refinar textos finais de apresentacao pessoal.
- Adicionar links reais de contato quando estiverem definidos.
- Adicionar screenshots ou preview cards dos projetos principais.
- Melhorar metadados sociais com uma imagem OG rasterizada, se necessario.

### Medio Prazo

- Criar secoes de estudos de caso.
- Evoluir a timeline para estudos de caso por etapa da esteira DevOps.
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
