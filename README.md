````md
# Elvra - Soluções em T.I. 💻

> Plataforma web oficial da **Elvra**, desenvolvida para divulgação de serviços técnicos, suporte em infraestrutura de hardware e otimização de sistemas.

---

## 🚀 Sobre o Projeto

O site da **Elvra** foi projetado para atuar tanto como uma plataforma de conversão de clientes quanto como um portfólio técnico, demonstrando organização de código, performance e boas práticas de desenvolvimento web moderno.

A aplicação foi estruturada utilizando tecnologias nativas da Web, priorizando leveza, modularização e experiência do usuário, sem depender de frameworks pesados.

### 🎯 Diferenciais Técnicos

- **Arquitetura Modular (Component-Driven)**  
  Estruturas globais como `header.html` e `footer.html` foram isoladas e carregadas dinamicamente via **Fetch API**, eliminando redundância de código e facilitando manutenção.

- **Persistência de Estado (Theme Toggle)**  
  Implementação de alternância entre tema claro e escuro com persistência da preferência do usuário utilizando `localStorage`.

- **Mobile-First & Responsividade**  
  Interface totalmente responsiva, adaptada para diferentes tamanhos de tela, incluindo menu sanduíche otimizado para dispositivos móveis.

- **Otimização para SEO & Conversão**  
  Estrutura otimizada para indexação em mecanismos de busca, incluindo `sitemap.xml` e integração direta com o WhatsApp Business para automação de contato conforme o serviço selecionado.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias nativas da Web, garantindo baixo tempo de carregamento e alta fidelidade visual.

- **HTML5** — Estruturação semântica da aplicação
- **CSS3** — Flexbox, Grid Layout, animações e variáveis para temas
- **JavaScript (Vanilla JS)** — Manipulação assíncrona do DOM, Fetch API e LocalStorage
- **Font Awesome 6** — Biblioteca de ícones vetoriais

---

## 📂 Estrutura do Projeto

```text
├── index.html
│   └── Página inicial (apresentação e prova social)
│
├── servicos.html
│   └── Catálogo interativo de serviços
│
├── nossosservicos.html
│   └── Galeria e portfólio de serviços realizados
│
├── header.html
│   └── Template global do cabeçalho
│
├── footer.html
│   └── Template global do rodapé
│
├── sitemap.xml
│   └── Mapa do site para indexação
│
├── styles/
│   ├── indexStyles.css
│   │   └── Estilização da Home
│   │
│   ├── catalogoStyles.css
│   │   └── Estilização do catálogo de serviços
│   │
│   ├── nossosServicos.css
│   │   └── Estilização da galeria de projetos
│   │
│   ├── styleHeader.css
│   │   └── Estilização do cabeçalho e tema
│   │
│   └── styleFooter.css
│       └── Estilização do rodapé
│
└── scripts/
    ├── indexScript.js
    │   └── Scripts específicos da Home
    │
    └── scriptFooterHeader.js
        └── Injeção assíncrona dos templates e controle de tema
````

---

## 📝 Padronização de Commits

Este repositório utiliza a especificação de commits semânticos baseada em:

* `feat:` → Novas funcionalidades
* `fix:` → Correções de bugs
* `refactor:` → Refatorações internas
* `style:` → Ajustes visuais e formatação
* `docs:` → Alterações na documentação

Mais informações:
https://www.conventionalcommits.org/

---

## 👤 Autor

**André Mendes**
*Idealização, Design e Desenvolvimento Técnico*

GitHub: https://github.com/andre0gondek

```
```
