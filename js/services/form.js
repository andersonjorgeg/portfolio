// Form service following the Single Responsibility Principle
export class FormService {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    if (this.form) {
      this.setupFormSubmission();
    }
  }

  setupFormSubmission() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert('Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.');
      this.form.reset();
    });
  }

  // Method to validate form data (can be expanded)
  validateForm() {
    let isValid = true;
    // Add validation logic here
    return isValid;
  }

  // Method to collect form data
  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }
}