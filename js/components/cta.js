import { BaseComponent } from './base-component.js';

export class CtaComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }

  getTemplate() {
    return `
      <section class="py-20 bg-gradient-to-br from-primary to-secondary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center text-white">
            <h2 class="text-3xl font-bold mb-6">Pronto para começarmos um projeto juntos?</h2>
            <p class="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Estou disponível para projetos freelance e oportunidades de trabalho em tempo integral.
              Vamos transformar suas ideias em realidade!
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="#contato" class="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center">
                Iniciar conversa
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="./assets/cv-anderson-jorge.pdf" download class="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}