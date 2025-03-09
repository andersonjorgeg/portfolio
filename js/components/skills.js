import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pela seção de habilidades do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class SkillsComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    
    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      section: "py-20 bg-gray-50",
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      header: {
        wrapper: "text-center mb-16",
        title: "text-3xl font-bold text-gray-900 mb-4",
        description: "text-gray-600 max-w-2xl mx-auto"
      },
      // Modificado para exibir uma coluna em mobile, duas em tablets, três em desktop e quatro em telas grandes
      grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
      card: {
        wrapper: "bg-accent/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border border-accent/10",
        iconContainer: "bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
        title: "font-bold text-gray-900 mb-1",
        description: "text-gray-600 text-sm"
      }
    };
    
    this.skills = [
      {
        name: "JavaScript",
        icon: '<i class="fab fa-js-square text-2xl text-accent"></i>',
        description: "Programação frontend com ES6+ e manipulação do DOM"
      },
      {
        name: "HTML5",
        icon: '<i class="fab fa-html5 text-2xl text-accent"></i>',
        description: "Estruturação semântica e acessível de conteúdo web"
      },
      {
        name: "CSS3",
        icon: '<i class="fab fa-css3-alt text-2xl text-accent"></i>',
        description: "Estilização avançada com Flexbox, Grid e animações"
      },
      {
        name: "PHP",
        icon: '<i class="fab fa-php text-2xl text-accent"></i>',
        description: "Desenvolvimento backend e integração com bancos de dados"
      },
      {
        name: "Docker",
        icon: '<i class="fab fa-docker text-2xl text-accent"></i>',
        description: "Containerização de aplicações para deploy consistente"
      },
      {
        name: "Git",
        icon: '<i class="fab fa-git-alt text-2xl text-accent"></i>',
        description: "Controle de versão e colaboração em equipe"
      },
      {
        name: "Responsive Design",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
        description: "Criação de interfaces adaptáveis a diferentes dispositivos"
      },
      {
        name: "Desenvolvimento Web",
        icon: '<i class="fas fa-code text-2xl text-accent"></i>',
        description: "Criação de aplicações web completas e funcionais"
      }
    ];
  }

  /**
   * Renderiza o cabeçalho da seção de habilidades
   * @returns {string} HTML do cabeçalho
   */
  renderHeader() {
    return `
      <div class="${this.classes.header.wrapper}">
        <h2 class="${this.classes.header.title}">Minhas Habilidades</h2>
        <p class="${this.classes.header.description}">
          Sou especializado em tecnologias web, com foco em criar interfaces responsivas e funcionais, além de estudar também backend.
        </p>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML da seção
   * @returns {string} HTML completo da seção de habilidades
   */
  getTemplate() {
    return `
      <section id="skills" class="${this.classes.section}">
        <div class="${this.classes.container}">
          ${this.renderHeader()}
          
          <div class="${this.classes.grid}">
            ${this.skills.map(skill => this.renderSkillItem(skill)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Renderiza um card de habilidade individual
   * @param {Object} skill - Objeto com dados da habilidade
   * @returns {string} HTML do card de habilidade
   */
  renderSkillItem(skill) {
    return `
      <div class="${this.classes.card.wrapper}">
        <div class="${this.classes.card.iconContainer}">
          ${skill.icon}
        </div>
        <h3 class="${this.classes.card.title}">${skill.name}</h3>
        <p class="${this.classes.card.description}">${skill.description}</p>
      </div>
    `;
  }
}