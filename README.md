# AlphaMed Center

Uma landing page premium, moderna e totalmente responsiva desenvolvida para uma clínica médica de alto padrão. O projeto foi estruturado com foco em performance, acessibilidade e na melhor experiência do usuário (UX), especialmente em dispositivos móveis.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando apenas tecnologias web puras, garantindo leveza e carregamento rápido, sem dependência de bibliotecas pesadas:

* **HTML5** (Semântico e acessível)
* **CSS3** (Variáveis, Grid, Flexbox, Animações customizadas, Media Queries)
* **Vanilla JavaScript** (Lógica de interação, sliders e menu responsivo)
* **FontAwesome 6** (Ícones SVG otimizados)
* **Google Fonts** (Fonte tipográfica principal: *Outfit*)

## ✨ Principais Funcionalidades

* **Design Responsivo & Mobile-First:** O layout se adapta perfeitamente a computadores, tablets e smartphones.
* **Sidebar Menu Mobile:** Menu de navegação (off-canvas) para telas pequenas, com trava de rolagem de fundo (`body scroll lock`) e overlay com desfoque (*backdrop-filter*).
* **Galeria em Carrossel (Slider):** Galeria de imagens dinâmica (exibindo 3 imagens no desktop, 2 em tablets e 1 em mobile) com navegação suave criada puramente em Vanilla JS.
* **Animações "On-Scroll":** Efeitos de entrada suaves (`fade-up`, `fade-left`, `zoom-in`) controlados de forma eficiente via `IntersectionObserver`.
* **Botões Flutuantes (Floating Actions):**
  * Botão do **WhatsApp** com efeito "pulse" animado para rápido contato.
  * Botão de **Voltar ao Topo (Scroll to Top)** dinâmico, aparecendo apenas quando o usuário rola a tela.
* **Componentes de Alto Nível:** Cards interativos, efeitores "hover" complexos, crachás flutuantes e sombras com hierarquia visual.

## 📁 Estrutura de Arquivos

```text
/
├── index.html            # Arquivo principal (marcação e conteúdo)
├── README.md             # Documentação do projeto
└── assets/
    ├── css/
    │   └── style.css     # Todos os estilos centralizados (reset, variáveis, componentes, responsividade)
    ├── js/
    │   └── script.js     # Lógica interativa do frontend (menu, scroll, slider)
    └── img/              # Imagens e ícones (.jpg, .png) utilizados no site
```

## 🛠️ Como Executar o Projeto

Como o projeto utiliza tecnologias puras (Vanilla), não há necessidade de instalar dependências (como NPM ou Yarn) nem compilar arquivos (Webpack/Vite).

Para ver o projeto funcionando, você pode escolher uma das opções:

**Opção 1:** Simplesmente dê um clique duplo no arquivo `index.html` para abri-lo diretamente no seu navegador padrão.

**Opção 2:** Utilize uma extensão como o *Live Server* no VS Code:
1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito no `index.html`.
3. Selecione "Open with Live Server".

## 🎨 Contato e Manutenção

Para fazer alterações de estilo global (como cores da marca e fontes), você pode editar facilmente as variáveis CSS no início do arquivo `/assets/css/style.css`:

```css
:root {
    --clr-primary-dark: #0B3C5D; /* Azul escuro */
    --clr-accent: #2EC4B6;       /* Turquesa de destaque */
    --clr-white: #ffffff;
    /* ...outras configurações */
}
```

---
*Desenvolvido com foco na experiência digital em saúde.*
