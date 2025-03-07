import { BaseComponent } from './base-component.js';

export class AboutComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }

  getTemplate() {
    return `
      <section id="sobreMin" class="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4 text-white">Sobre mim</h2>
            <div class="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div class="md:col-span-1">
              <div class="relative flex justify-center">
                <div class="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20"></div>
                <div class="relative z-10 w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                  <img src="./img/perfil.png" alt="Anderson Jorge" class="w-full h-full object-cover">
                </div>
              </div>
            </div>
            
            <div class="md:col-span-2 space-y-6">
              <p class="text-lg font-medium text-gray-200 leading-relaxed">
                Sou um desenvolvedor Frontend apaixonado por criar experiências digitais intuitivas e de alto desempenho. Graduado em Análise e Desenvolvimento de Sistemas pela Anhanguera Educacional, estou constantemente buscando aprimorar minhas habilidades e conhecimentos.
              </p>
              <p class="text-lg font-medium text-gray-200 leading-relaxed">
                Tenho experiência com desenvolvimento de aplicações web completas, utilizando tecnologias modernas como React, TypeScript e Node.js. Meu objetivo é criar soluções que não apenas atendam às necessidades dos usuários, mas também proporcionem uma experiência agradável e eficiente.
              </p>
              <p class="text-lg font-medium text-gray-200 leading-relaxed">
                Busco oportunidades para atuar no planejamento e desenvolvimento de sistemas de pequeno, médio e grande porte, trabalhando em equipes que utilizam metodologias ágeis como Scrum e Kanban.
              </p>
              
              <div class="pt-6">
                <a href="#contato" class="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center">
                  <span>Entre em contato</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}