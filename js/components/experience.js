import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pela seção de experiência e formação do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class ExperienceComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    
    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      section: "py-20 bg-white",
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      grid: "grid grid-cols-1 md:grid-cols-2 gap-16",
      sectionTitle: "text-3xl font-bold text-gray-900 mb-8",
      itemsContainer: "space-y-12",
      timelineItem: {
        wrapper: "relative pl-8 border-l-2",
        activeBorder: "border-accent",
        inactiveBorder: "border-gray-200",
        dot: "absolute -left-2 top-0 w-4 h-4 rounded-full",
        activeDot: "bg-accent",
        inactiveDot: "bg-gray-200",
        header: "mb-1 flex flex-col sm:flex-row items-start sm:items-center",
        title: "text-xl font-bold text-gray-900",
        period: "sm:ml-auto text-sm text-gray-500 mt-1 sm:mt-0",
        company: "text-gray-600 mb-2",
        companyLink: "text-accent mb-2 hover:text-gray-600 transition-colors animate-pulse",
        description: "text-gray-600"
      },
      coursesList: "text-gray-600 space-y-2",
      courseLink: "text-accent hover:text-gray-600 transition-colors animate-pulse"
    };
    
    // Array com dados de experiência profissional
    this.experiences = [
      {
        title: "Estágio em Desenvolvimento Web",
        period: "2022",
        company: "Empresa Estudio Sync",
        description: "Participação em projetos de desenvolvimento web, manutenção de sistemas existentes e implementação de novas funcionalidades.",
        active: true,
        link: "https://estudiosync.com.br/"
      }
    ];

    // Array com dados de formação acadêmica e cursos
    this.education = [
      {
        title: "Análise e Desenvolvimento de Sistemas",
        period: "2019 - 2022",
        institution: "Anhanguera Educacional",
        description: "Formação em tecnologias de desenvolvimento de software, banco de dados, análise de sistemas e metodologias ágeis.",
        active: true, 
        link: "https://diplomas.somosb4.com.br/validar/671.671.1593f0db15f0"
      },
      {
        title: "Cursos e Certificações",
        courses: [
          { name: "Docker: Ferramenta essencial para Desenvolvedores - Udemy", link: "https://www.udemy.com/certificate/UC-5c23ae89-ceeb-4769-9c47-a6b4ef0e97c7/" },
          { name: "Introdução ao PHP - DevMedia", link: "https://www.devmedia.com.br/certificado/conclusao/?id=121126" },
          { name: "HTML: Fundamentos do HTML - DevMedia", link: "https://www.devmedia.com.br/certificado/conclusao/?id=115486" },
          { name: "Introdução a linguagem JavaScript - DevMedia", link: "https://www.devmedia.com.br/certificado/conclusao/?id=115565" },
        ],
        active: false
      }
    ];
  }

  /**
   * Renderiza a seção de experiência profissional
   * @returns {string} HTML da seção de experiência
   */
  renderExperienceSection() {
    return `
      <div>
        <h2 class="${this.classes.sectionTitle}">Experiência</h2>
        
        <div class="${this.classes.itemsContainer}">
          ${this.experiences.map(exp => this.renderExperienceItem(exp)).join('')}
        </div>
      </div>
    `;
  }

  /**
   * Renderiza a seção de formação acadêmica
   * @returns {string} HTML da seção de formação
   */
  renderEducationSection() {
    return `
      <div>
        <h2 class="${this.classes.sectionTitle}">Formação</h2>
        
        <div class="${this.classes.itemsContainer}">
          ${this.education.map(edu => this.renderEducationItem(edu)).join('')}
        </div>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML da seção
   * @returns {string} HTML completo da seção de experiência e formação
   */
  getTemplate() {
    return `
      <section class="${this.classes.section}">
        <div class="${this.classes.container}">
          <div class="${this.classes.grid}">
            ${this.renderExperienceSection()}
            ${this.renderEducationSection()}
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Renderiza um item de experiência profissional
   * @param {Object} experience - Objeto com dados da experiência
   * @returns {string} HTML do item de experiência
   */
  renderExperienceItem(experience) {
    const borderClass = experience.active ? this.classes.timelineItem.activeBorder : this.classes.timelineItem.inactiveBorder;
    const bgClass = experience.active ? this.classes.timelineItem.activeDot : this.classes.timelineItem.inactiveDot;
    
    const companyDisplay = experience.link && experience.link.trim() !== '' 
      ? `<a href="${experience.link}" target="_blank" class="${this.classes.timelineItem.companyLink}">${experience.company}</a>`
      : `<p class="${this.classes.timelineItem.company}">${experience.company}</p>`;
    
    return `
      <div class="${this.classes.timelineItem.wrapper} ${borderClass}">
        <div class="${this.classes.timelineItem.dot} ${bgClass}"></div>
        <div class="${this.classes.timelineItem.header}">
          <h3 class="${this.classes.timelineItem.title}">${experience.title}</h3>
          <span class="${this.classes.timelineItem.period}">${experience.period}</span>
        </div>
        ${companyDisplay}
        <p class="${this.classes.timelineItem.description}">
          ${experience.description}
        </p>
      </div>
    `;
  }

  /**
   * Renderiza um item de formação acadêmica ou lista de cursos
   * @param {Object} education - Objeto com dados da formação
   * @returns {string} HTML do item de formação
   */
  renderEducationItem(education) {
    const borderClass = education.active ? this.classes.timelineItem.activeBorder : this.classes.timelineItem.inactiveBorder;
    const bgClass = education.active ? this.classes.timelineItem.activeDot : this.classes.timelineItem.inactiveDot;
    
    let content = '';
    
    // Verifica se é uma lista de cursos ou uma formação acadêmica
    if (education.courses) {
      content = `
        <ul class="${this.classes.coursesList}">
          ${education.courses.map(course => 
            `<li>• ${course.link 
              ? `<a href="${course.link}" target="_blank" class="${this.classes.courseLink}">${course.name}</a>` 
              : course.name
            }</li>`
          ).join('')}
        </ul>
      `;
    } else {
      const institutionDisplay = education.link && education.link.trim() !== '' 
        ? `<a href="${education.link}" target="_blank" class="${this.classes.timelineItem.companyLink}">${education.institution}</a>`
        : `<p class="${this.classes.timelineItem.company}">${education.institution}</p>`;
        
      content = `
        ${institutionDisplay}
        <p class="${this.classes.timelineItem.description}">
          ${education.description}
        </p>
      `;
    }
    
    return `
      <div class="${this.classes.timelineItem.wrapper} ${borderClass}">
        <div class="${this.classes.timelineItem.dot} ${bgClass}"></div>
        <div class="${this.classes.timelineItem.header}">
          <h3 class="${this.classes.timelineItem.title}">${education.title}</h3>
          ${education.period ? `<span class="${this.classes.timelineItem.period}">${education.period}</span>` : ''}
        </div>
        ${content}
      </div>
    `;
  }
}