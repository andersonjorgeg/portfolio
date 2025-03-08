import { BaseComponent } from './base-component.js';

export class ExperienceComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    this.experiences = [
      /* {
        title: "Desenvolvedor Frontend",
        period: "2021 - Atual",
        company: "Freelancer",
        description: "Desenvolvimento de aplicações web responsivas utilizando React, TypeScript e outras tecnologias modernas. Implementação de interfaces de usuário seguindo princípios de UX/UI e boas práticas de desenvolvimento.",
        active: true,
        link: "https://example.com/portfolio"
      }, */
      {
        title: "Estágio em Desenvolvimento Web",
        period: "2022",
        company: "Empresa Estudio Sync",
        description: "Participação em projetos de desenvolvimento web, manutenção de sistemas existentes e implementação de novas funcionalidades.",
        active: true,
        link: "https://estudiosync.com.br/"
      }
    ];

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

  getTemplate() {
    return `
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <!-- Experiência -->
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Experiência</h2>
              
              <div class="space-y-12">
                ${this.experiences.map(exp => this.renderExperienceItem(exp)).join('')}
              </div>
            </div>
            
            <!-- Formação -->
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Formação</h2>
              
              <div class="space-y-12">
                ${this.education.map(edu => this.renderEducationItem(edu)).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderExperienceItem(experience) {
    const borderClass = experience.active ? 'border-accent' : 'border-gray-200';
    const bgClass = experience.active ? 'bg-accent' : 'bg-gray-200';
    
    const companyDisplay = experience.link && experience.link.trim() !== '' 
      ? `<a href="${experience.link}" target="_blank" class="text-accent mb-2 hover:text-gray-600 transition-colors animate-pulse">${experience.company}</a>`
      : `<p class="text-gray-600 mb-2">${experience.company}</p>`;
    
    return `
      <div class="relative pl-8 border-l-2 ${borderClass}">
        <div class="absolute -left-2 top-0 w-4 h-4 rounded-full ${bgClass}"></div>
        <div class="mb-1 flex items-center">
          <h3 class="text-xl font-bold text-gray-900">${experience.title}</h3>
          <span class="ml-auto text-sm text-gray-500">${experience.period}</span>
        </div>
        ${companyDisplay}
        <p class="text-gray-600">
          ${experience.description}
        </p>
      </div>
    `;
  }

  renderEducationItem(education) {
    const borderClass = education.active ? 'border-accent' : 'border-gray-200';
    const bgClass = education.active ? 'bg-accent' : 'bg-gray-200';
    
    let content = '';
    
    if (education.courses) {
      content = `
        <ul class="text-gray-600 space-y-2">
          ${education.courses.map(course => 
            `<li>• ${course.link 
              ? `<a href="${course.link}" target="_blank" class="text-accent hover:text-gray-600 transition-colors animate-pulse">${course.name}</a>` 
              : course.name
            }</li>`
          ).join('')}
        </ul>
      `;
    } else {
      const institutionDisplay = education.link && education.link.trim() !== '' 
        ? `<a href="${education.link}" target="_blank" class="text-accent mb-2 hover:text-gray-600 transition-colors animate-pulse">${education.institution}</a>`
        : `<p class="text-gray-600 mb-2">${education.institution}</p>`;
        
      content = `
        ${institutionDisplay}
        <p class="text-gray-600">
          ${education.description}
        </p>
      `;
    }
    
    return `
      <div class="relative pl-8 border-l-2 ${borderClass}">
        <div class="absolute -left-2 top-0 w-4 h-4 rounded-full ${bgClass}"></div>
        <div class="mb-1 flex items-center">
          <h3 class="text-xl font-bold text-gray-900">${education.title}</h3>
          ${education.period ? `<span class="ml-auto text-sm text-gray-500">${education.period}</span>` : ''}
        </div>
        ${content}
      </div>
    `;
  }
}