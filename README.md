
# Elvra - Soluções em T.I. 💻

> Plataforma web oficial da **Elvra**, projetada para a divulgação de serviços técnicos de alto padrão, suporte em infraestrutura de hardware e otimização de sistemas.

---

## 🚀 Sobre o Projeto

O site da **Elvra** foi desenvolvido para funcionar tanto como um catálogo de conversão direta para clientes quanto como um portfólio de engenharia de software limpa.

A aplicação foi estruturada seguindo boas práticas de semântica HTML5, performance e modularização de código, sem a necessidade de frameworks pesados.

### 🎯 Diferenciais Técnicos Implementados

- **Arquitetura Modular (Component-Driven):**  
  Isolamento de estruturas globais (`header.html` e `footer.html`) injetadas de forma assíncrona nas páginas através da Fetch API do JavaScript, eliminando redundância de código.

- **Persistência de Estado (Theme Toggle):**  
  Interruptor nativo de tema (Dark/Light Mode) com persistência da preferência do usuário via `localStorage`.

- **Mobile-First & Responsividade:**  
  Layout totalmente adaptável para dispositivos móveis, com navegação otimizada através de menu sanduíche responsivo.

- **Otimização para SEO & Conversão:**  
  Arquitetura de links diretos integrada ao WhatsApp Business para automação de mensagens baseadas no serviço selecionado e arquivo `sitemap.xml` estruturado.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas da Web para garantir o menor tempo de carregamento e máxima fidelidade visual.

- **HTML5** — Estruturação semântica avançada
- **CSS3** — CSS Grid, Flexbox, animações de transição e variáveis de ambiente para temas
- **JavaScript (Vanilla JS)** — Manipulação assíncrona do DOM, Fetch API e LocalStorage
- **Font Awesome 6** — Biblioteca de ícones vetoriais

---

## 📂 Estrutura do Repositório

```text
├── index.html
│   └── Página inicial (Apresentação e Prova Social)
│
├── servicos.html
│   └── Catálogo interativo de serviços rápidos
│
├── nossosservicos.html
│   └── Galeria/Portfólio de casos de sucesso resolvidos
│
├── header.html
│   └── Template isolado do cabeçalho global
│
├── footer.html
│   └── Template isolado do rodapé global
│
├── sitemap.xml
│   └── Mapa do site atualizado para indexação do Google
│
├── styles/
│   ├── indexStyles.css
│   │   └── Estilização exclusiva da Home
│   │
│   ├── catalogoStyles.css
│   │   └── Estilização do catálogo de cartões
│   │
│   ├── nossosServicos.css
│   │   └── Estilização da galeria de projetos
│   │
│   ├── styleHeader.css
│   │   └── Regras do menu e switch de temas
│   │
│   └── styleFooter.css
│       └── Regras do rodapé e redes sociais
│
└── scripts/
    ├── indexScript.js
    │   └── Comportamentos específicos da Home
    │
    └── scriptFooterHeader.js
        └── Lógica de injeção assíncrona dos templates e tema
```

---

## 📝 Padronização de Commits

Este repositório utiliza a especificação de **[Conventional Commits](https://www.conventionalcommits.org/)** para manter o histórico de alterações limpo e legível.

Cada commit é categorizado de acordo com o propósito da alteração:

- `feat:` → Novas funcionalidades
- `fix:` → Correções de bugs
- `refactor:` → Refatorações internas
- `style:` → Ajustes visuais e formatação
- `docs:` → Alterações na documentação

---

## 👤 Autor

**André Mendes**  
*Idealização, Design e Desenvolvimento Técnico*

GitHub: https://github.com/andre0gondek
````
