/**
 * NavigationService - Classe responsável pelo gerenciamento da navegação do site
 */
export class NavigationService {
  /**
   * Cria uma instância do serviço de navegação e inicializa os componentes
   */
  constructor() {
    // Configurações
    this.config = {
      headerOffset: 80,         // Altura do cabeçalho fixo em pixels
      scrollSpyOffset: 100,     // Offset para melhor experiência do usuário no ScrollSpy
      activeClass: 'active-nav-link', // Classe CSS para links ativos
      mobileMenuId: 'mobile-menu',    // ID do menu mobile
      mobileMenuButtonId: 'mobile-menu-button', // ID do botão do menu mobile
      backToTopThreshold: 300   // Distância de rolagem para mostrar o botão (em pixels)
    };
    
    // Inicializa os componentes de navegação
    this.setupMobileMenuToggle();
    this.setupNavLinks();
    this.setupScrollSpy();
  }

  /**
   * Configura o botão de alternância do menu mobile
   * Quando o botão é clicado, o menu é mostrado ou escondido
   */
  setupMobileMenuToggle() {
    document.addEventListener('click', (e) => {
      // Verifica se o clique foi no botão do menu ou em algum elemento dentro dele
      if (e.target.closest(`#${this.config.mobileMenuButtonId}`)) {
        const menu = document.getElementById(this.config.mobileMenuId);
        if (menu) {
          // Alterna a classe 'hidden' para mostrar/esconder o menu
          menu.classList.toggle('hidden');
        }
      }
    });
  }

  /**
   * Configura os links de navegação interna (âncoras)
   * Quando um link é clicado, a página rola suavemente até a seção correspondente
   */
  setupNavLinks() {
    document.addEventListener('click', (e) => {
      // Busca o elemento <a> mais próximo que tenha href começando com #
      const link = e.target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Obtém o ID do elemento alvo a partir do atributo href
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Rola suavemente até o elemento alvo
          this.smoothScrollTo(targetElement);
          
          // Fecha o menu mobile se estiver aberto
          this.closeMobileMenu();
          
          // Atualiza o estado ativo no menu de navegação
          this.updateActiveNavLink(targetId);
        }
      }
    });
  }
  
  /**
   * Fecha o menu mobile se estiver aberto
   * @private
   */
  closeMobileMenu() {
    const mobileMenu = document.getElementById(this.config.mobileMenuId);
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }
  
  /**
   * Realiza a rolagem suave até o elemento especificado
   * @param {HTMLElement} element - Elemento HTML para onde a página deve rolar
   */
  smoothScrollTo(element) {
    // Calcula a posição do elemento em relação ao topo da página
    const elementPosition = element.getBoundingClientRect().top;
    
    // Ajusta a posição considerando o scroll atual e o offset do cabeçalho
    const offsetPosition = elementPosition + window.pageYOffset - this.config.headerOffset;
    
    // Realiza a rolagem suave
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  /**
   * Atualiza o estado visual dos links de navegação, marcando o link ativo
   * @param {string} targetId - ID do elemento alvo (ex: "#sobre")
   */
  updateActiveNavLink(targetId) {
    // Remove a classe de ativo de todos os links de navegação
    const desktopNavLinks = document.querySelectorAll('nav .hidden.md\\:flex a[data-nav-link]');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a[data-nav-link]');
    
    // Update desktop links
    desktopNavLinks.forEach(navLink => {
      navLink.classList.remove(this.config.activeClass);
      if (navLink.getAttribute('href') === targetId) {
        navLink.classList.add(this.config.activeClass);
      }
    });
    
    // Update mobile links - they have different styling
    mobileNavLinks.forEach(navLink => {
      // Remove mobile active classes individually
      navLink.classList.remove('text-accent');
      navLink.classList.remove('font-medium');
      navLink.classList.add('text-gray-700');
      
      if (navLink.getAttribute('href') === targetId) {
        // Add mobile active styling individually
        navLink.classList.remove('text-gray-700');
        navLink.classList.add('text-accent');
        navLink.classList.add('font-medium');
      }
    });
  }
  
  /**
   * Configura o ScrollSpy para atualizar automaticamente o link ativo durante a rolagem
   * ScrollSpy detecta qual seção está visível na tela e atualiza o menu correspondente
   */
  setupScrollSpy() {
    // Adiciona um listener de rolagem com a opção passive para melhor performance
    window.addEventListener('scroll', () => {
      // Obtém a posição atual de rolagem
      const scrollPosition = window.scrollY;
      
      // Obtém todas as seções que possuem um ID definido
      const sections = document.querySelectorAll('section[id]');
      
      // Verifica cada seção para determinar qual está atualmente visível
      sections.forEach(section => {
        // Calcula a posição da seção em relação ao topo da página
        const sectionTop = section.offsetTop - this.config.scrollSpyOffset;
        const sectionHeight = section.offsetHeight;
        const sectionId = '#' + section.getAttribute('id');
        
        // Se a posição de rolagem estiver dentro dos limites da seção
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Atualiza o link ativo no menu de navegação
          this.updateActiveNavLink(sectionId);
        }
      });
    }, { passive: true }); // passive: true melhora a performance em dispositivos móveis
  }
  
  /**
   * Configura a visibilidade do botão de voltar ao topo com base na rolagem
   * @param {HTMLElement} button - O botão de voltar ao topo
   */
  setupBackToTopVisibility(button) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > this.config.backToTopThreshold) {
        // Mostra o botão quando a rolagem passar do limite definido
        button.classList.remove('opacity-0', 'invisible');
        button.classList.add('opacity-100');
      } else {
        // Esconde o botão quando a rolagem estiver acima do limite
        button.classList.remove('opacity-100');
        button.classList.add('opacity-0', 'invisible');
      }
    }, { passive: true });
  }
}