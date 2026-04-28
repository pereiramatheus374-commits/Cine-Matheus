# 🎬 CineMatheus

**Site ao vivo:** [pereiramatheus374-commits.github.io/Cine-Matheus](https://pereiramatheus374-commits.github.io/Cine-Matheus/)
**Repositório:** [github.com/pereiramatheus374-commits/Cine-Matheus](https://github.com/pereiramatheus374-commits/Cine-Matheus)

Site pessoal de curadoria de cinema — uma vitrine dos 10 filmes favoritos de Matheus, com busca, filtros por gênero, favoritos e formulário de contato.

## Funcionalidades

- **Catálogo de filmes** — 10 filmes com pôster, sinopse, diretor, elenco e nota IMDb
- **Busca em tempo real** — filtra por título enquanto você digita
- **Filtros por gênero** — botões gerados dinamicamente a partir dos dados
- **Favoritos** — marque e desmarque filmes; lista salva no `localStorage`
- **Modal de detalhes** — abre ao clicar em qualquer card
- **Formulário de contato** — envia e-mail via FormSubmit.co (sem backend)
- **Design responsivo** — funciona em desktop e mobile

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Marcação | HTML5 semântico |
| Estilos | CSS3 (variáveis, grid, flexbox, animações) |
| Lógica | JavaScript puro (ES5+) |
| Fonte | Google Fonts — Montserrat |
| E-mail | [FormSubmit.co](https://formsubmit.co) (sem servidor) |

## Estrutura

```
Site de Cinemia Matheus/
├── index.html      # Página principal com o catálogo
├── contato.html    # Página de contato com formulário
├── style.css       # Todos os estilos do projeto
├── script.js       # Lógica de filmes, filtros, modal e formulário
└── README.md       # Este arquivo
```

## Como rodar

Basta abrir o `index.html` direto no navegador — nenhuma instalação ou servidor é necessário.

> Para testar o envio do formulário de contato é preciso estar **online**, pois o FormSubmit.co faz uma chamada à API externa.

## Configurando o formulário de contato

O formulário envia mensagens para `pereira_matheus374@escola.pr.gov.br` via [FormSubmit.co](https://formsubmit.co).

Na **primeira vez** que o formulário for enviado, o FormSubmit vai mandar um e-mail de ativação para esse endereço. Basta clicar em **"Activate Form"** nesse e-mail e, a partir daí, todas as mensagens serão entregues normalmente.

## Autor

**Matheus Pereira** — projeto pessoal de cinema criado com HTML, CSS e JavaScript.
