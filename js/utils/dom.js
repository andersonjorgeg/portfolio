// DOM utilities following the Single Responsibility Principle
export class DOMUtils {
  // Method to create an element with attributes and children
  static createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else if (key === 'style') {
        Object.entries(value).forEach(([styleKey, styleValue]) => {
          element.style[styleKey] = styleValue;
        });
      } else if (key.startsWith('on') && typeof value === 'function') {
        element.addEventListener(key.substring(2).toLowerCase(), value);
      } else {
        element.setAttribute(key, value);
      }
    });
    
    // Append children
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        element.appendChild(child);
      }
    });
    
    return element;
  }
  
  // Method to toggle classes
  static toggleClass(element, className, force) {
    if (element) {
      element.classList.toggle(className, force);
    }
    return element;
  }
  
  // Method to add event listeners to multiple elements
  static addEventListenerToAll(selector, event, handler) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.addEventListener(event, handler);
    });
  }
  
  // Method to get all form data as an object
  static getFormData(form) {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
  }
  
  // Method to validate form inputs
  static validateFormInputs(form, rules = {}) {
    let isValid = true;
    const errors = {};
    
    // Process each field according to rules
    Object.entries(rules).forEach(([fieldName, fieldRules]) => {
      const field = form.elements[fieldName];
      if (!field) return;
      
      const value = field.value.trim();
      let fieldIsValid = true;
      let errorMessage = '';
      
      // Check required
      if (fieldRules.required && value === '') {
        fieldIsValid = false;
        errorMessage = fieldRules.requiredMessage || 'Este campo é obrigatório';
      }
      
      // Check email format
      if (fieldRules.email && value !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        fieldIsValid = false;
        errorMessage = fieldRules.emailMessage || 'Email inválido';
      }
      
      // Check min length
      if (fieldRules.minLength && value.length < fieldRules.minLength) {
        fieldIsValid = false;
        errorMessage = fieldRules.minLengthMessage || 
          `Este campo deve ter pelo menos ${fieldRules.minLength} caracteres`;
      }
      
      // Custom validation
      if (fieldRules.validate && typeof fieldRules.validate === 'function') {
        const customValid = fieldRules.validate(value);
        if (!customValid) {
          fieldIsValid = false;
          errorMessage = fieldRules.validateMessage || 'Campo inválido';
        }
      }
      
      // Update form validity
      isValid = isValid && fieldIsValid;
      
      // Store error message
      if (!fieldIsValid) {
        errors[fieldName] = errorMessage;
      }
    });
    
    return { isValid, errors };
  }
}