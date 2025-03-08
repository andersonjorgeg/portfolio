import { BaseComponent } from './base-component.js';

export class ContactComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    this.contacts = [
      {
        title: "Email",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>`,
        text: "anderson.jorge33@gmail.com",
        link: "mailto:anderson.jorge33@gmail.com"
      },
      {
        title: "LinkedIn",
        icon: `<i class="fab fa-linkedin-in text-2xl text-accent"></i>`,
        text: "Anderson Jorge",
        link: "https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/"
      },
      {
        title: "GitHub",
        icon: `<i class="fab fa-github text-2xl text-accent"></i>`,
        text: "andersonjorgeg",
        link: "https://github.com/andersonjorgeg"
      }
    ];
  }

  getTemplate() {
    return `
      <section id="contato" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Vamos Conversar</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Sou um desenvolvedor Front-end Junior com 6 meses de experiência, atualmente em busca de oportunidades para crescer na área. Estou disponível para posições de entrada que me permitam desenvolver minhas habilidades em um ambiente de equipe.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            ${this.contacts.map(contact => this.renderContactCard(contact)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderContactCard(contact) {
    return `
      <a href="${contact.link}" ${contact.link.startsWith('mailto') ? '' : 'target="_blank"'} 
         class="bg-accent/5 p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow block group border border-accent/10">
        <div class="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
          ${contact.icon}
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">${contact.title}</h3>
        <span class="text-accent group-hover:text-blue-700 transition-colors">
          ${contact.text}
        </span>
      </a>
    `;
  }
}