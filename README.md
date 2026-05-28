# Elvra - Soluções em T.I. 💻

> Plataforma web oficial da Elvra, projetada para a divulgação de serviços técnicos de alto padrão, suporte em infraestrutura de hardware e otimização de sistemas.

---

## 🚀 Sobre o Projeto

O site da **Elvra** foi desenvolvido para funcionar tanto como um catálogo de conversão direta para clientes quanto como um portfólio de engenharia de software limpa. A aplicação foi estruturada seguindo boas práticas de semântica HTML5, performance e modularização de código sem a necessidade de frameworks pesados.

### 🎯 Diferenciais Técnicos implementados:
*   **Arquitetura Modular (Component-Driven):** Isolamento de estruturas globais (`header.html` e `footer.html`) injetadas de forma assíncrona nas páginas através da API Fetch do JavaScript, eliminando redundância de código.
*   **Persistência de Estado (Theme Toggle):** Interruptor nativo de tema (Dark/Light Mode) com persistência do estado de preferência do usuário salvo via `localStorage`.
*   **Mobile-First & Responsividade:** Layout totalmente adaptável para dispositivos móveis, com navegação otimizada através de menu sanduíche responsivo.
*   **Otimização para SEO & Conversão:** Arquitetura de links diretos integrada ao WhatsApp Business para automação de mensagens baseadas no serviço selecionado e arquivo `sitemap.xml` estruturado.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias nativas da Web para garantir o menor tempo de carregamento e máxima fidelidade visual:

*   **HTML5** (Estruturação semântica avançada)
*   **CSS3** (CSS Grid, Flexbox, Animações de transição e Variáveis de Ambiente para Temas)
*   **JavaScript (Vanilla JS)** (Manipulação assíncrona do DOM, Fetch API e LocalStorage)
*   **Font Awesome 6** (Biblioteca de ícones vetoriais)

---

## 📂 Estrutura do Repositório

```text
├── index.html               # Página inicial (Apresentação e Prova Social)
├── servicos.html            # Catálogo interativo de serviços rápidos
├── nossosservicos.html      # Galeria/Portfólio de casos de sucesso resolvidos
├── header.html              # Template isolado do cabeçalho global
├── footer.html              # Template isolado do rodapé global
├── sitemap.xml              # Mapa do site atualizado para indexação do Google
│
├── styles/
│   ├── indexStyles.css      # Estilização exclusiva da Home
│   ├── catalogoStyles.css   # Estilização do catálogo de cartões
│   ├── nossosServicos.css   # Estilização da galeria de projetos
│   ├── styleHeader.css      # Regras do menu e switch de temas
│   └── styleFooter.css      # Regras do rodapé e redes sociais
│
└── scripts/
    ├── indexScript.js       # Comportamentos específicos da Home
    └── scriptFooterHeader.js # Lógica de injeção assíncrona dos templates e tema
