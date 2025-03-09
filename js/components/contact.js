import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pela seção de contato do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class ContactComponent extends BaseComponent {
  constructor(selector) {
    super(selector);

    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      section: "py-20 bg-white",
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      header: {
        wrapper: "text-center mb-16",
        title: "text-3xl font-bold text-gray-900 mb-4",
        description: "text-gray-600 max-w-2xl mx-auto"
      },
      grid: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto",
      card: {
        wrapper: "bg-accent/5 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow block group border border-accent/10",
        iconContainer: "bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors",
        title: "text-xl font-bold text-gray-900 mb-2",
        text: "text-accent group-hover:text-blue-700 transition-colors"
      }
    };

    // Array de objetos com informações de contato
    // Cada objeto contém título, ícone SVG/Font Awesome, texto e link
    this.contacts = [
      {
        title: "Email",
        // Ícone SVG para email
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>`,
        text: "anderson.jorge33@gmail.com",
        link: "mailto:anderson.jorge33@gmail.com" // Link para abrir cliente de email
      },
      {
        title: "LinkedIn",
        // Ícone do Font Awesome para LinkedIn
        icon: `<i class="fab fa-linkedin-in text-2xl text-accent"></i>`,
        text: "Anderson Jorge",
        link: "https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/"
      },
      {
        title: "GitHub",
        // Ícone do Font Awesome para GitHub
        icon: `<i class="fab fa-github text-2xl text-accent"></i>`,
        text: "andersonjorgeg",
        link: "https://github.com/andersonjorgeg"
      }
    ];
  }

  /**
   * Renderiza o cabeçalho da seção de contato
   * @returns {string} HTML do cabeçalho
   */
  renderHeader() {
    return `
      <div class="${this.classes.header.wrapper}">
        <h2 class="${this.classes.header.title}">Vamos Conversar</h2>
        <p class="${this.classes.header.description}">
          Sou um desenvolvedor Front-end Junior com 6 meses de experiência, atualmente em busca de oportunidades para crescer na área. Estou disponível para posições de entrada que me permitam desenvolver minhas habilidades em um ambiente de equipe.
        </p>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML da seção de contato
   * @returns {string} HTML completo da seção de contato
   */
  getTemplate() {
    return `
      <section id="contato" class="${this.classes.section}">
        <div class="${this.classes.container}">
          ${this.renderHeader()}
          
          <div class="${this.classes.grid}">
            ${this.contacts.map(contact => this.renderContactCard(contact)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Renderiza um cartão de contato individual
   * @param {Object} contact - Objeto com informações de contato (title, icon, text, link)
   * @returns {string} HTML do cartão de contato
   */
  renderContactCard(contact) {
    return `
      <a href="${contact.link}" ${contact.link.startsWith('mailto') ? '' : 'target="_blank"'} 
         class="${this.classes.card.wrapper}">
        <div class="${this.classes.card.iconContainer}">
          ${contact.icon}
        </div>
        <h3 class="${this.classes.card.title}">${contact.title}</h3>
        <span class="${this.classes.card.text}">
          ${contact.text}
        </span>
      </a>
    `;
  }
}