import { BaseComponent } from './base-component.js';

export class SkillsComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }

  getTemplate() {
    return `
      <section id="skills" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Minhas Habilidades</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Sou especializado em tecnologias frontend modernas, com foco em criar interfaces responsivas e de alta performance.
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <!-- Skill 1 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fab fa-react text-2xl text-accent"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">React</h3>
              <p class="text-gray-600 text-sm">Desenvolvimento de interfaces com componentes reutilizáveis</p>
            </div>
            
            <!-- Skill 2 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fab fa-js-square text-2xl text-accent"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">JavaScript</h3>
              <p class="text-gray-600 text-sm">Programação frontend com ES6+ e manipulação do DOM</p>
            </div>
            
            <!-- Skill 3 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fab fa-html5 text-2xl text-accent"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">HTML5</h3>
              <p class="text-gray-600 text-sm">Estruturação semântica e acessível de conteúdo web</p>
            </div>
            
            <!-- Skill 4 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fab fa-css3-alt text-2xl text-accent"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">CSS3</h3>
              <p class="text-gray-600 text-sm">Estilização avançada com Flexbox, Grid e animações</p>
            </div>
            
            <!-- Skill 5 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">TypeScript</h3>
              <p class="text-gray-600 text-sm">Desenvolvimento com tipagem estática para maior segurança</p>
            </div>
            
            <!-- Skill 6 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fab fa-node-js text-2xl text-accent"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">Node.js</h3>
              <p class="text-gray-600 text-sm">Desenvolvimento backend com JavaScript</p>
            </div>
            
            <!-- Skill 7 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fab fa-git-alt text-2xl text-accent"></i>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">Git</h3>
              <p class="text-gray-600 text-sm">Controle de versão e colaboração em equipe</p>
            </div>
            
            <!-- Skill 8 -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div class="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">Responsive Design</h3>
              <p class="text-gray-600 text-sm">Criação de interfaces adaptáveis a diferentes dispositivos</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}