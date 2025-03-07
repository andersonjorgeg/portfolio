import { BaseComponent } from './base-component.js';

export class HeaderComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    this.isMenuOpen = false;
  }

  getTemplate() {
    return `
      <nav class="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <a class="text-accent text-xl font-bold" href="#">Anderson Jorge</a>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#projetos" class="text-gray-700 hover:text-accent transition-colors">Projetos</a>
              <a href="#sobreMin" class="text-gray-700 hover:text-accent transition-colors">Sobre mim</a>
              <a href="#contato" class="text-gray-700 hover:text-accent transition-colors">Contato</a>
              <a href="./assets/cv-anderson-jorge.pdf" download class="bg-accent hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Download CV
              </a>
            </div>
            <div class="md:hidden flex items-center">
              <button id="mobile-menu-button" class="text-gray-700 hover:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div id="mobile-menu" class="md:hidden hidden pt-2 pb-4">
            <a href="#projetos" class="block py-2 text-gray-700 hover:text-accent transition-colors">Projetos</a>
            <a href="#sobreMin" class="block py-2 text-gray-700 hover:text-accent transition-colors">Sobre mim</a>
            <a href="#contato" class="block py-2 text-gray-700 hover:text-accent transition-colors">Contato</a>
            <a href="./assets/cv-anderson-jorge.pdf" download class="block py-2 text-accent hover:text-blue-700 transition-colors">
              Download CV
            </a>
          </div>
        </div>
      </nav>
    `;
  }

  afterRender() {
    // Add event listeners after the component is rendered
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        mobileMenu.classList.toggle('hidden', !this.isMenuOpen);
      });
    }
  }
}