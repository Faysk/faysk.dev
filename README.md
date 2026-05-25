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

O `faysk.dev` e o dominio principal. Ele deve funcionar como um hub leve, rapido e facil de manter, sem carregar a responsabilidade tecnica de todos os projetos dentro dele.

A ideia central e:

```txt
faysk.dev           -> apresentacao, identidade e indice
lab.faysk.dev       -> browser diagnostics lab
projeto.faysk.dev   -> projetos independentes no futuro
tools.faysk.dev     -> ferramentas pequenas no futuro
```

O root domain nao precisa virar um app pesado. Ele deve mostrar quem e Faysk, o que existe, o que esta em andamento e para onde o visitante deve ir.

## Estado Atual

O hub hoje e uma aplicacao estatica feita com HTML, CSS e JavaScript vanilla.

Ele renderiza:

- hero principal com posicionamento do dominio;
- mapa visual do ecossistema;
- secao de modelo operacional;
- grid de projetos/labs;
- filtros por tipo;
- busca simples por texto;
- links para GitHub e `lab.faysk.dev`;
- manifesto, favicon, OG card e headers basicos para deploy estatico.

## Arquitetura

```txt
faysk.dev/
├── index.html
├── README.md
├── LICENSE
├── _headers
├── site.webmanifest
└── assets/
    ├── css/
    │   ├── variables.css
    │   ├── layout.css
    │   ├── components.css
    │   ├── responsive.css
    │   └── style.css
    ├── js/
    │   ├── app.js
    │   └── projects.js
    ├── icons/
    │   ├── favicon.svg
    │   └── mark.svg
    └── img/
        └── og-card.svg
```

## Como Funciona

O `index.html` contem apenas a estrutura base, metadados e o ponto de montagem:

```html
<div id="app"></div>
<script type="module" src="./assets/js/app.js"></script>
```

O arquivo `assets/js/app.js` monta a interface no browser usando ES Modules. O conteudo editavel do hub fica principalmente em `assets/js/projects.js`.

### `projects.js`

Esse arquivo concentra:

- `profile`: dados basicos do dominio, resumo, GitHub e URL do lab;
- `projectTypes`: tipos usados pelos filtros;
- `projects`: lista de projetos exibidos no grid;
- `operatingNotes`: cards que explicam o modelo de crescimento.

Para adicionar um novo projeto ao hub, adicione um item em `projects`:

```js
{
  name: "Nome do projeto",
  type: "project",
  status: "planned",
  url: "https://projeto.faysk.dev",
  repo: "https://github.com/Faysk/projeto",
  description: "Resumo curto do projeto.",
  stack: ["Cloudflare", "Vanilla JS"],
  featured: false
}
```

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

## Stack

- HTML5
- CSS3 modular
- JavaScript vanilla
- ES Modules
- Cloudflare Pages
- Sem build step
- Sem dependencias externas

## Desenvolvimento Local

O projeto funciona como site estatico. Voce pode abrir `index.html` diretamente ou servir com qualquer servidor simples.

Exemplo:

```powershell
cd E:\Project\faysk.dev
python -m http.server 4201
```

Depois acesse:

```txt
http://127.0.0.1:4201/
```

## Deploy

Configuracao recomendada no Cloudflare Pages:

```txt
Framework preset: None
Build command:    vazio
Build output:     /
Root directory:   /
Production branch: main
```

Dominio:

```txt
faysk.dev
```

Como o projeto nao tem build, o Cloudflare publica os arquivos estaticos diretamente.

## Headers

O arquivo `_headers` e usado para configurar headers basicos no Cloudflare Pages.

Objetivos:

- evitar MIME incorreto em CSS/JS;
- manter assets estaticos servidos corretamente;
- preparar seguranca basica sem travar experimentacao.

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

- Melhorar textos de apresentacao pessoal.
- Adicionar links reais de contato quando estiverem definidos.
- Refinar lista de projetos.
- Adicionar screenshots ou preview cards dos projetos principais.
- Melhorar metadados sociais do OG card.

### Medio Prazo

- Criar secoes de estudos de caso.
- Adicionar timeline de projetos.
- Adicionar pagina ou secao de stack/skills.
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

## Relacao Com o Lab

O antigo experimento de browser telemetry foi separado para:

```txt
https://lab.faysk.dev
https://github.com/Faysk/faysk-lab
```

Isso deixa o root domain livre para cumprir o papel de apresentacao e indice.

## Licenca

MIT License.
