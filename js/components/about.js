import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pela seção "Sobre mim" do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class AboutComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    
    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      // Classes para parágrafos de texto
      paragraph: "text-lg font-medium text-gray-200 leading-relaxed",
      // Classes para a seção principal (gradiente de fundo)
      section: "py-20 bg-gradient-to-br from-primary to-secondary text-white",
      // Container principal com largura máxima e padding
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      // Estilos para o cabeçalho da seção
      header: {
        // container principal para o cabeçalho
        wrapper: "text-center mb-12",
        title: "text-3xl font-bold mb-4 text-white",
        underline: "w-16 h-1 bg-accent mx-auto" 
      },
      // Estilos para a imagem de perfil e seus efeitos
      profileImage: {
        // container principal para a imagem
        wrapper: "relative flex justify-center",
        glow: "absolute inset-0 bg-accent rounded-full blur-3xl opacity-20", // Efeito de brilho atrás da foto
        container: "relative z-10 w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-xl",
        image: "w-full h-full object-cover"
      },
      // Estilo para o botão de contato
      button: "bg-white text-primary hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center"
    };

    // Array com os textos dos parágrafos da seção "Sobre mim"
    this.paragraphs = [
      "Sou um desenvolvedor Frontend apaixonado por criar experiências digitais intuitivas e de alto desempenho. Graduado em Análise e Desenvolvimento de Sistemas pela Anhanguera Educacional, estou constantemente buscando aprimorar minhas habilidades e conhecimentos.",
      "Tenho experiência com desenvolvimento de aplicações web completas, utilizando tecnologias modernas como React, TypeScript e Node.js. Meu objetivo é criar soluções que não apenas atendam às necessidades dos usuários, mas também proporcionem uma experiência agradável e eficiente.",
      "Busco oportunidades para atuar no planejamento e desenvolvimento de sistemas de pequeno, médio e grande porte, trabalhando em equipes que utilizam metodologias ágeis como Scrum e Kanban."
    ];
  }

  /**
   * Renderiza o cabeçalho da seção com título e linha decorativa
   * @returns {string} HTML do cabeçalho
   */
  renderHeader() {
    return `
      <div class="${this.classes.header.wrapper}">
        <h2 class="${this.classes.header.title}">Sobre mim</h2>
        <div class="${this.classes.header.underline}"></div>
      </div>
    `;
  }

  /**
   * Renderiza a imagem de perfil com efeito de brilho
   * @returns {string} HTML da imagem de perfil
   */
  renderProfileImage() {
    return `
      <div class="${this.classes.profileImage.wrapper}">
        <div class="${this.classes.profileImage.glow}"></div>
        <div class="${this.classes.profileImage.container}">
          <img src="./img/perfil.png" alt="Anderson Jorge" class="${this.classes.profileImage.image}">
        </div>
      </div>
    `;
  }

  /**
   * Renderiza o botão de contato com ícone de seta
   * @returns {string} HTML do botão de contato
   */
  renderContactButton() {
    return `
      <div class="pt-6">
        <a href="#contato" class="${this.classes.button}">
          <span>Entre em contato</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML da seção
   * @returns {string} HTML completo da seção "Sobre mim"
   */
  getTemplate() {
    return `
      <section id="sobreMin" class="${this.classes.section}">
        <div class="${this.classes.container}">
          ${this.renderHeader()}
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <!-- Coluna da imagem (1/3 em telas médias) -->
            <div class="md:col-span-1">
              <figure class="m-0">
                ${this.renderProfileImage()}
                <figcaption class="sr-only">Foto de perfil de Anderson Jorge</figcaption>
              </figure>
            </div>
            
            <!-- Coluna do texto (2/3 em telas médias) -->
            <article class="md:col-span-2 space-y-6">
              <!-- Mapeia o array de parágrafos para elementos HTML -->
              ${this.paragraphs.map(text => `
                <p class="${this.classes.paragraph}">
                  ${text}
                </p>
              `).join('')}
              
              ${this.renderContactButton()}
            </article>
          </div>
        </div>
      </section>
    `;
  }
}