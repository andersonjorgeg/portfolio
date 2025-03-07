// Base component class following the Single Responsibility Principle
export class BaseComponent {
  constructor(selector) {
    this.container = document.querySelector(selector);
    if (!this.container) {
      throw new Error(`Container with selector ${selector} not found`);
    }
  }

  // Template method to be implemented by child classes
  getTemplate() {
    throw new Error('getTemplate method must be implemented by child classes');
  }

  // Render method that all components will use
  render() {
    this.container.innerHTML = this.getTemplate();
    this.afterRender();
  }

  // Hook for post-render actions
  afterRender() {
    // Can be overridden by child classes
  }
}