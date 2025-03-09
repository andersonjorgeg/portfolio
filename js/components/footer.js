import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pelo rodapé do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class FooterComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    
    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      footer: "bg-primary py-12",
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
      column: {
        title: "text-lg font-semibold text-white mb-4",
        brandTitle: "text-xl font-bold text-white mb-4",
        text: "text-gray-400",
        linksList: "space-y-2",
        link: "text-gray-400 hover:text-accent transition-colors",
        socialIcons: "flex space-x-4",
        icon: "text-xl"
      },
      copyright: {
        wrapper: "border-t border-gray-800 mt-12 pt-8 text-center",
        text: "text-gray-400"
      }
    };
    
    // Links de navegação rápida
    this.quickLinks = [
      { text: "Projetos", href: "#projetos" },
      { text: "Sobre mim", href: "#sobreMin" },
      { text: "Contato", href: "#contato" }
    ];
    
    // Links de redes sociais
    this.socialLinks = [
      { 
        icon: "fab fa-github", 
        href: "https://github.com/andersonjorgeg", 
        external: true 
      },
      { 
        icon: "fab fa-linkedin-in", 
        href: "https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/", 
        external: true 
      },
      { 
        icon: "fas fa-envelope", 
        href: "mailto:anderson.jorge33@gmail.com", 
        external: false 
      }
    ];
  }

  /**
   * Renderiza a coluna com informações sobre o desenvolvedor
   * @returns {string} HTML da coluna de informações
   */
  renderBrandColumn() {
    return `
      <div>
        <h3 class="${this.classes.column.brandTitle}">Anderson Jorge</h3>
        <p class="${this.classes.column.text}">
          Desenvolvedor Frontend especializado em criar experiências web modernas e responsivas.
        </p>
      </div>
    `;
  }

  /**
   * Renderiza a coluna com links rápidos de navegação
   * @returns {string} HTML da coluna de links rápidos
   */
  renderQuickLinksColumn() {
    return `
      <div>
        <h4 class="${this.classes.column.title}">Links Rápidos</h4>
        <ul class="${this.classes.column.linksList}">
          ${this.quickLinks.map(link => `
            <li>
              <a href="${link.href}" class="${this.classes.column.link}">${link.text}</a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  /**
   * Renderiza a coluna com links para redes sociais
   * @returns {string} HTML da coluna de redes sociais
   */
  renderSocialLinksColumn() {
    return `
      <div>
        <h4 class="${this.classes.column.title}">Redes Sociais</h4>
        <div class="${this.classes.column.socialIcons}">
          ${this.socialLinks.map(social => `
            <a href="${social.href}" ${social.external ? 'target="_blank"' : ''} class="${this.classes.column.link}">
              <i class="${social.icon} ${this.classes.column.icon}"></i>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  /**
   * Renderiza a seção de copyright
   * @returns {string} HTML da seção de copyright
   */
  renderCopyright() {
    return `
      <div class="${this.classes.copyright.wrapper}">
        <p class="${this.classes.copyright.text}">
          © ${new Date().getFullYear()} Anderson Jorge. Todos os direitos reservados.
        </p>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML do rodapé
   * @returns {string} HTML completo do rodapé
   */
  getTemplate() {
    return `
      <footer class="${this.classes.footer}">
        <div class="${this.classes.container}">
          <div class="${this.classes.grid}">
            ${this.renderBrandColumn()}
            ${this.renderQuickLinksColumn()}
            ${this.renderSocialLinksColumn()}
          </div>
          
          ${this.renderCopyright()}
        </div>
      </footer>
    `;
  }
}