import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pela seção de chamada para ação (CTA) do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class CtaComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    
    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      section: "py-20 bg-gradient-to-br from-primary to-secondary",
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      content: "text-center text-white",
      title: "text-3xl font-bold mb-6",
      description: "text-lg text-gray-200 mb-8 max-w-2xl mx-auto",
      buttonContainer: "flex flex-wrap justify-center gap-4",
      primaryButton: "bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center",
      secondaryButton: "border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
    };
  }

  /**
   * Renderiza o cabeçalho da seção CTA com título e descrição
   * @returns {string} HTML do cabeçalho
   */
  renderHeader() {
    return `
      <h2 class="${this.classes.title}">Pronto para começarmos um projeto juntos?</h2>
      <p class="${this.classes.description}">
        Estou disponível para oportunidades de trabalho em tempo integral.
        Vamos transformar suas ideias em realidade!
      </p>
    `;
  }

  /**
   * Renderiza os botões de ação
   * @returns {string} HTML dos botões
   */
  renderButtons() {
    return `
      <div class="${this.classes.buttonContainer}">
        <a href="#contato" class="${this.classes.primaryButton}">
          Iniciar conversa
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="./assets/curriculo-dev.pdf" download class="${this.classes.secondaryButton}">
          Download CV
        </a>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML da seção CTA
   * @returns {string} HTML completo da seção CTA
   */
  getTemplate() {
    return `
      <section class="${this.classes.section}">
        <div class="${this.classes.container}">
          <div class="${this.classes.content}">
            ${this.renderHeader()}
            ${this.renderButtons()}
          </div>
        </div>
      </section>
    `;
  }
}