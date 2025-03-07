// Navigation service following the Interface Segregation Principle
export class NavigationService {
  constructor() {
    this.setupMobileMenuToggle();
    this.setupNavLinks();
    this.setupScrollSpy();
  }

  setupMobileMenuToggle() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('#mobile-menu-button')) {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
          menu.classList.toggle('hidden');
        }
      }
    });
  }

  setupNavLinks() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Enhanced smooth scrolling with easing
          this.smoothScrollTo(targetElement);
          
          // Close mobile menu if open
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
          
          // Update active state in navigation
          this.updateActiveNavLink(targetId);
        }
      }
    });
  }
  
  smoothScrollTo(element) {
    const headerOffset = 80; // Adjust for header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  updateActiveNavLink(targetId) {
    // Remove active class from all nav links
    document.querySelectorAll('nav a').forEach(navLink => {
      navLink.classList.remove('active-nav-link');
      if (navLink.getAttribute('href') === targetId) {
        navLink.classList.add('active-nav-link');
      }
    });
  }
  
  setupScrollSpy() {
    // Track scroll position and update active nav link
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      // Get all sections that have an ID defined
      const sections = document.querySelectorAll('section[id]');
      
      // Find the section that is currently in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for better UX
        const sectionHeight = section.offsetHeight;
        const sectionId = '#' + section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.updateActiveNavLink(sectionId);
        }
      });
    }, { passive: true });
  }
}