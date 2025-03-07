import { BaseComponent } from './base-component.js';

export class HeroComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }

  getTemplate() {
    return `
      <section class="relative bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              <div>
                <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                  Olá, eu sou<br>
                  <span class="text-accent">Anderson Jorge</span>
                </h1>
                <p class="mt-4 text-xl text-gray-300">
                  Desenvolvedor Frontend especializado em criar experiências web modernas e responsivas.
                </p>
              </div>
              
              <div class="flex flex-wrap gap-4">
                <a href="#projetos" class="bg-accent hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center">
                  <span>Ver projetos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#contato" class="border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors">
                  Entre em contato
                </a>
              </div>
              
              <div class="flex space-x-4">
                <a href="https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/" target="_blank" class="text-white hover:text-accent transition-colors">
                  <i class="fab fa-linkedin-in fa-lg"></i>
                </a>
                <a href="https://github.com/andersonjorgeg" target="_blank" class="text-white hover:text-accent transition-colors">
                  <i class="fab fa-github fa-lg"></i>
                </a>
                <a href="mailto:anderson.jorge33@gmail.com" class="text-white hover:text-accent transition-colors">
                  <i class="fas fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
            
            <div class="hidden md:block">
              <div class="relative flex justify-center">
                <div class="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20"></div>
                <div class="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                  <img src="./img/perfil.png" alt="Anderson Jorge" class="w-full h-full object-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}