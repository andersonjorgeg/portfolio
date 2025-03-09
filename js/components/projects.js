import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pela seção de projetos do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class ProjectsComponent extends BaseComponent {
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
      projectsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
      projectCard: {
        wrapper: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group",
        imageContainer: "relative overflow-hidden",
        image: "w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300",
        overlay: {
          wrapper: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end",
          content: "p-4 w-full",
          buttonsWrapper: "flex space-x-2 justify-end",
          button: "bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 w-10 h-10 flex items-center justify-center"
        },
        content: {
          wrapper: "p-6",
          title: "font-bold text-xl text-gray-900 mb-2",
          description: "text-gray-600 mb-4",
          tags: {
            wrapper: "flex flex-wrap gap-2 mb-4",
            tag: "px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
          }
        }
      }
    };

    // Array com dados dos projetos
    this.projects = [
      {
        title: "Clone do Netflix",
        image: "./img/clone-netflix.jpeg",
        description: "Clone do Netflix usando a API do Tmdb",
        demoUrl: "https://netflix-reactjs-chi.vercel.app/",
        githubUrl: "https://github.com/andersonjorgeg/netflix-reactjs",
        tags: ["ReactJS", "Tmdb API", "Javascript"]
      },
      {
        title: "AluraKut",
        image: "./img/alura-kut.jpg",
        description: "Projeto criado na imersão da Alura inspirado na rede social orkut.",
        demoUrl: "https://alurakut-plum-nu.vercel.app/login",
        githubUrl: "https://github.com/andersonjorgeg/alurakut",
        tags: ["NextJS", "DatoCMS", "Javascript", "Styled Components"]
      },
      {
        title: "Clínica Médica",
        image: "./img/clinica-medica.jpg",
        description: "Um site simples para uma clínica médica.",
        demoUrl: "https://clinica-medica-eight.vercel.app/index.html",
        githubUrl: "https://github.com/andersonjorgeg/clinica-medica",
        tags: ["HTML", "CSS"]
      }
    ];
  }

  /**
   * Renderiza o cabeçalho da seção de projetos
   * @returns {string} HTML do cabeçalho
   */
  renderHeader() {
    return `
      <div class="${this.classes.header.wrapper}">
        <h2 class="${this.classes.header.title}">Meus Projetos</h2>
        <p class="${this.classes.header.description}">
          Confira alguns dos meus trabalhos recentes. Cada projeto representa um desafio único que me ajudou a aprimorar minhas habilidades.
        </p>
      </div>
    `;
  }

  /**
   * Renderiza os botões de ação do projeto (demo e github)
   * @param {Object} project - Dados do projeto
   * @returns {string} HTML dos botões
   */
  renderProjectButtons(project) {
    return `
      <div class="${this.classes.projectCard.overlay.buttonsWrapper}">
        <a href="${project.demoUrl}" target="_blank" class="${this.classes.projectCard.overlay.button}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <a href="${project.githubUrl}" target="_blank" class="${this.classes.projectCard.overlay.button}">
          <i class="fab fa-github"></i>
        </a>
      </div>
    `;
  }

  /**
   * Renderiza um card de projeto individual
   * @param {Object} project - Dados do projeto
   * @returns {string} HTML do card do projeto
   */
  renderProjectCard(project) {
    return `
      <div class="${this.classes.projectCard.wrapper}">
        <div class="${this.classes.projectCard.imageContainer}">
          <img src="${project.image}" class="${this.classes.projectCard.image}" alt="${project.title}">
          <div class="${this.classes.projectCard.overlay.wrapper}">
            <div class="${this.classes.projectCard.overlay.content}">
              ${this.renderProjectButtons(project)}
            </div>
          </div>
        </div>
        <div class="${this.classes.projectCard.content.wrapper}">
          <h3 class="${this.classes.projectCard.content.title}">${project.title}</h3>
          <p class="${this.classes.projectCard.content.description}">${project.description}</p>
          <div class="${this.classes.projectCard.content.tags.wrapper}">
            ${project.tags.map(tag => 
              `<span class="${this.classes.projectCard.content.tags.tag}">${tag}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML da seção
   * @returns {string} HTML completo da seção de projetos
   */
  getTemplate() {
    return `
      <section id="projetos" class="${this.classes.section}">
        <div class="${this.classes.container}">
          ${this.renderHeader()}
          
          <div class="${this.classes.projectsGrid}">
            ${this.projects.map(project => this.renderProjectCard(project)).join('')}
          </div>
        </div>
      </section>
    `;
  }
}