import { BaseComponent } from './base-component.js';

export class FooterComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }

  getTemplate() {
    return `
      <footer class="bg-primary py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Logo e descrição -->
            <div>
              <h3 class="text-xl font-bold text-white mb-4">Anderson Jorge</h3>
              <p class="text-gray-400">
                Desenvolvedor Frontend especializado em criar experiências web modernas e responsivas.
              </p>
            </div>
            
            <!-- Links rápidos -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#projetos" class="text-gray-400 hover:text-accent transition-colors">Projetos</a>
                </li>
                <li>
                  <a href="#sobreMin" class="text-gray-400 hover:text-accent transition-colors">Sobre mim</a>
                </li>
                <li>
                  <a href="#contato" class="text-gray-400 hover:text-accent transition-colors">Contato</a>
                </li>
              </ul>
            </div>
            
            <!-- Redes sociais -->
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
              <div class="flex space-x-4">
                <a href="https://github.com/andersonjorgeg" target="_blank" class="text-gray-400 hover:text-accent transition-colors">
                  <i class="fab fa-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/" target="_blank" class="text-gray-400 hover:text-accent transition-colors">
                  <i class="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="mailto:anderson.jorge33@gmail.com" class="text-gray-400 hover:text-accent transition-colors">
                  <i class="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-800 mt-12 pt-8 text-center">
            <p class="text-gray-400">
              © ${new Date().getFullYear()} Anderson Jorge. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}