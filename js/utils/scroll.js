// Scroll utilities following the Open/Closed Principle
export class ScrollUtils {
  static initBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove('opacity-0', 'invisible');
          backToTopButton.classList.add('opacity-100', 'visible');
        } else {
          backToTopButton.classList.remove('opacity-100', 'visible');
          backToTopButton.classList.add('opacity-0', 'invisible');
        }
      });
      
      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  static initSmoothScrolling() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  }

  static initActiveNavHighlighting() {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('text-accent');
            link.classList.add('text-gray-700');
          });
          
          const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('text-accent');
            activeLink.classList.remove('text-gray-700');
          }
        }
      });
    });
  }
  
  // Method to handle scroll animations
  static initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkIfInView = () => {
      const windowHeight = window.innerHeight;
      const windowTopPosition = window.scrollY;
      const windowBottomPosition = windowTopPosition + windowHeight;
      
      animateElements.forEach(element => {
        const elementHeight = element.offsetHeight;
        const elementTopPosition = element.offsetTop;
        const elementBottomPosition = elementTopPosition + elementHeight;
        
        // Check if element is in viewport
        if (
          (elementBottomPosition >= windowTopPosition) && 
          (elementTopPosition <= windowBottomPosition)
        ) {
          element.classList.add('animated');
        }
      });
    };
    
    // Run once to check for elements already in view
    checkIfInView();
    
    // Add event listener for scroll
    window.addEventListener('scroll', checkIfInView);
  }
  
  // Method to handle lazy loading of images
  static initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      let lazyLoadThrottleTimeout;
      
      const lazyLoad = () => {
        if (lazyLoadThrottleTimeout) {
          clearTimeout(lazyLoadThrottleTimeout);
        }
        
        lazyLoadThrottleTimeout = setTimeout(() => {
          const scrollTop = window.pageYOffset;
          const lazyImages = document.querySelectorAll('img[data-src]');
          
          lazyImages.forEach(img => {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
          });
          
          if (lazyImages.length === 0) {
            document.removeEventListener('scroll', lazyLoad);
            window.removeEventListener('resize', lazyLoad);
            window.removeEventListener('orientationChange', lazyLoad);
          }
        }, 20);
      };
      
      document.addEventListener('scroll', lazyLoad);
      window.addEventListener('resize', lazyLoad);
      window.addEventListener('orientationChange', lazyLoad);
    }
  }
}