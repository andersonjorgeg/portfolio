import { BaseComponent } from './base-component.js';

/**
 * Componente responsável pelo cabeçalho/navegação do portfólio
 * Herda funcionalidades básicas do BaseComponent
 */
export class HeaderComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
    this.isMenuOpen = false;
    this.hasScrolled = false;
    
    // Objeto centralizado de classes CSS para facilitar manutenção
    this.classes = {
      nav: "fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200 transition-all duration-300",
      navScrolled: "shadow-md bg-white/95",
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      navWrapper: "flex justify-between h-16",
      logoWrapper: "flex items-center",
      logo: "text-accent text-xl font-bold",
      desktopMenu: "hidden md:flex items-center space-x-8",
      navLink: "text-gray-700 hover:text-accent transition-colors",
      activeNavLink: "text-accent font-medium",
      ctaButton: "bg-accent hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors",
      mobileMenuButton: {
        wrapper: "md:hidden flex items-center",
        button: "text-gray-700 hover:text-accent"
      },
      mobileMenu: "md:hidden hidden pt-2 pb-4",
      mobileNavLink: "block py-2 text-gray-700 hover:text-accent transition-colors",
      mobileActiveNavLink: "block py-2 text-accent font-medium",
      mobileCta: "block py-2 text-accent hover:text-blue-700 transition-colors"
    };
    
    // Links de navegação
    this.navLinks = [
      { text: "Projetos", href: "#projetos" },
      { text: "Sobre mim", href: "#sobreMin" },
      { text: "Contato", href: "#contato" }
    ];
  }

  /**
   * Renderiza o logo do site
   * @returns {string} HTML do logo
   */
  renderLogo() {
    return `
      <div class="${this.classes.logoWrapper}">
        <a class="${this.classes.logo}" href="#">Portfólio Anderson Jorge</a>
      </div>
    `;
  }

  /**
   * Renderiza o menu de navegação para desktop
   * @returns {string} HTML do menu desktop
   */
  renderDesktopMenu() {
    return `
      <div class="${this.classes.desktopMenu}">
        ${this.navLinks.map(link => 
          `<a href="${link.href}" class="${this.classes.navLink}" data-nav-link>${link.text}</a>`
        ).join('')}
        <a href="./assets/curriculo-dev.pdf" download class="${this.classes.ctaButton}">
          Download CV
        </a>
      </div>
    `;
  }

  /**
   * Renderiza o botão do menu mobile
   * @returns {string} HTML do botão do menu mobile
   */
  renderMobileMenuButton() {
    return `
      <div class="${this.classes.mobileMenuButton.wrapper}">
        <button id="mobile-menu-button" class="${this.classes.mobileMenuButton.button}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    `;
  }

  /**
   * Renderiza o menu mobile (inicialmente oculto)
   * @returns {string} HTML do menu mobile
   */
  renderMobileMenu() {
    return `
      <div id="mobile-menu" class="${this.classes.mobileMenu}">
        ${this.navLinks.map(link => 
          `<a href="${link.href}" class="${this.classes.mobileNavLink}" data-nav-link>${link.text}</a>`
        ).join('')}
        <a href="./assets/cv-anderson-jorge.pdf" download class="${this.classes.mobileCta}">
          Download CV
        </a>
      </div>
    `;
  }

  /**
   * Método principal que monta toda a estrutura HTML do cabeçalho
   * @returns {string} HTML completo do cabeçalho
   */
  getTemplate() {
    return `
      <nav id="main-nav" class="${this.classes.nav}">
        <div class="${this.classes.container}">
          <div class="${this.classes.navWrapper}">
            ${this.renderLogo()}
            ${this.renderDesktopMenu()}
            ${this.renderMobileMenuButton()}
          </div>
          ${this.renderMobileMenu()}
        </div>
      </nav>
    `;
  }

  /**
   * Método executado após a renderização do componente
   * Adiciona os event listeners necessários
   */
  afterRender() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        mobileMenu.classList.toggle('hidden', !this.isMenuOpen);
      });
    }
    
    // Adiciona evento de scroll para modificar a aparência da barra de navegação
    if (mainNav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20 && !this.hasScrolled) {
          mainNav.classList.add(...this.classes.navScrolled.split(' '));
          this.hasScrolled = true;
        } else if (window.scrollY <= 20 && this.hasScrolled) {
          mainNav.classList.remove(...this.classes.navScrolled.split(' '));
          this.hasScrolled = false;
        }
      }, { passive: true });
    }
    
    // Adiciona classe ativa ao link correspondente à seção atual
    this.updateActiveNavLink();
    window.addEventListener('scroll', () => {
      this.updateActiveNavLink();
    }, { passive: true });
  }
  
  /**
   * Atualiza o estado visual dos links de navegação, marcando o link ativo
   * baseado na seção visível atual
   */
  updateActiveNavLink() {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section[id]');
    const desktopNavLinks = document.querySelectorAll('.hidden.md\\:flex a[data-nav-link]');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a[data-nav-link]');
    
    // Remove active class from all links first
    desktopNavLinks.forEach(link => {
      link.classList.remove(...this.classes.activeNavLink.split(' '));
    });
    
    mobileNavLinks.forEach(link => {
      link.classList.remove('text-accent', 'font-medium');
      link.classList.add(...this.classes.mobileNavLink.split(' '));
    });
    
    // Find the current section and highlight corresponding links
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = '#' + section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Update desktop menu links
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === sectionId) {
            link.classList.add(...this.classes.activeNavLink.split(' '));
          }
        });
        
        // Update mobile menu links
        mobileNavLinks.forEach(link => {
          if (link.getAttribute('href') === sectionId) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-accent', 'font-medium');
          }
        });
      }
    });
  }
}