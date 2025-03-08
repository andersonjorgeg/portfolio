import { BaseComponent } from './base-component.js';

export class SkillsComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
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

  getTemplate() {
    return `
      <section id="skills" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Minhas Habilidades</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Sou especializado em tecnologias web, com foco em criar interfaces responsivas e funcionais, além de estudar também backend.
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            ${this.skills.map(skill => this.renderSkillItem(skill)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderSkillItem(skill) {
    return `
      <div class="bg-accent/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border border-accent/10">
        <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          ${skill.icon}
        </div>
        <h3 class="font-bold text-gray-900 mb-1">${skill.name}</h3>
        <p class="text-gray-600 text-sm">${skill.description}</p>
      </div>
    `;
  }
}