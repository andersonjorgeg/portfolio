// Import components
import { HeaderComponent } from './components/header.js';
import { HeroComponent } from './components/hero.js';
import { SkillsComponent } from './components/skills.js';
import { ProjectsComponent } from './components/projects.js';
import { ExperienceComponent } from './components/experience.js';
import { AboutComponent } from './components/about.js';
import { ContactComponent } from './components/contact.js';
import { CtaComponent } from './components/cta.js';
import { FooterComponent } from './components/footer.js';

// Import services
import { NavigationService } from './services/navigation.js';
import { FormService } from './services/form.js';

// Import utilities
import { ScrollUtils } from './utils/scroll.js';
import { DOMUtils } from './utils/dom.js';

// Initialize the application
class App {
  constructor() {
    this.initComponents();
    this.initServices();
    this.setupEventListeners();
  }

  initComponents() {
    // Initialize and render all components
    const header = new HeaderComponent('#header');
    const hero = new HeroComponent('#hero');
    const skills = new SkillsComponent('#skills');
    const projects = new ProjectsComponent('#projects');
    const experience = new ExperienceComponent('#experience');
    const about = new AboutComponent('#about');
    const contact = new ContactComponent('#contact');
    const cta = new CtaComponent('#cta');
    const footer = new FooterComponent('#footer');

    // Render all components
    header.render();
    hero.render();
    skills.render();
    projects.render();
    experience.render();
    about.render();
    contact.render();
    cta.render();
    footer.render();
  }

  initServices() {
    // Initialize services
    this.navigationService = new NavigationService();
    this.formService = new FormService('#contact-form');
  }

  setupEventListeners() {
    // Setup global event listeners
    ScrollUtils.initBackToTopButton();
    ScrollUtils.initSmoothScrolling();
    ScrollUtils.initActiveNavHighlighting();
  }
}

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});