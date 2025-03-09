import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pela seção hero (banner principal) do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class HeroComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    
    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      section: "relative bg-gradient-to-br from-primary to-secondary text-white overflow-hidden",
      overlay: {
        wrapper: "absolute inset-0",
        gradient: "absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"
      },
      container: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32",
      grid: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
      content: {
        wrapper: "space-y-8",
        titleWrapper: "",
        title: "text-4xl md:text-5xl font-bold leading-tight",
        highlight: "text-accent",
        subtitle: "mt-4 text-xl text-gray-300"
      },
      buttons: {
        wrapper: "flex flex-wrap gap-4",
        primary: "bg-accent hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center",
        secondary: "border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors"
      },
      socialLinks: {
        wrapper: "flex space-x-4",
        link: "text-white hover:text-accent transition-colors"
      },
      profileImage: {
        wrapper: "hidden md:block",
        container: "relative flex justify-center",
        glow: "absolute inset-0 bg-accent rounded-full blur-3xl opacity-20",
        frame: "relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-xl",
        image: "w-full h-full object-cover"
      }
    };
    
    // Links de redes sociais
    this.socialLinks = [
      { 
        icon: "fab fa-linkedin-in fa-lg", 
        href: "https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/", 
        external: true 
      },
      { 
        icon: "fab fa-github fa-lg", 
        href: "https://github.com/andersonjorgeg", 
        external: true 
      },
      { 
        icon: "fas fa-envelope fa-lg", 
        href: "mailto:anderson.jorge33@gmail.com", 
        external: false 
      }
    ];
  }

  /**
   * Renderiza o conteúdo textual da seção hero
   * @returns {string} HTML do conteúdo textual
   */
  renderHeroContent() {
    return `
      <div class="${this.classes.content.wrapper}">
        <div class="${this.classes.content.titleWrapper}">
          <h1 class="${this.classes.content.title}">
            Olá, eu sou<br>
            <span class="${this.classes.content.highlight}">Anderson Jorge</span>
          </h1>
          <p class="${this.classes.content.subtitle}">
            Desenvolvedor Frontend especializado em criar experiências web modernas e responsivas.
          </p>
        </div>
        
        ${this.renderButtons()}
        ${this.renderSocialLinks()}
      </div>
    `;
  }

  /**
   * Renderiza os botões de chamada para ação
   * @returns {string} HTML dos botões
   */
  renderButtons() {
    return `
      <div class="${this.classes.buttons.wrapper}">
        <a href="#projetos" class="${this.classes.buttons.primary}">
          <span>Ver projetos</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#contato" class="${this.classes.buttons.secondary}">
          Entre em contato
        </a>
      </div>
    `;
  }

  /**
   * Renderiza os links para redes sociais
   * @returns {string} HTML dos links sociais
   */
  renderSocialLinks() {
    return `
      <div class="${this.classes.socialLinks.wrapper}">
        ${this.socialLinks.map(social => `
          <a href="${social.href}" ${social.external ? 'target="_blank"' : ''} class="${this.classes.socialLinks.link}">
            <i class="${social.icon}"></i>
          </a>
        `).join('')}
      </div>
    `;
  }

  /**
   * Renderiza a imagem de perfil
   * @returns {string} HTML da imagem de perfil
   */
  renderProfileImage() {
    return `
      <div class="${this.classes.profileImage.wrapper}">
        <div class="${this.classes.profileImage.container}">
          <div class="${this.classes.profileImage.glow}"></div>
          <div class="${this.classes.profileImage.frame}">
            <img src="./img/perfil.png" alt="Anderson Jorge" class="${this.classes.profileImage.image}">
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML da seção hero
   * @returns {string} HTML completo da seção hero
   */
  getTemplate() {
    return `
      <section class="${this.classes.section}">
        <div class="${this.classes.overlay.wrapper}">
          <div class="${this.classes.overlay.gradient}"></div>
        </div>
        <div class="${this.classes.container}">
          <div class="${this.classes.grid}">
            ${this.renderHeroContent()}
            ${this.renderProfileImage()}
          </div>
        </div>
      </section>
    `;
  }
}