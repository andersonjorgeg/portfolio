// Exporta a classe BaseComponent para que possa ser importada em outros arquivos
export class BaseComponent {
  // Define o construtor da classe que recebe um seletor CSS como parâmetro
  constructor(selector) {
    // Busca no DOM um elemento que corresponda ao seletor fornecido e o armazena na propriedade container
    this.container = document.querySelector(selector);
    // Verifica se o elemento foi encontrado
    if (!this.container) {
      // Se o elemento não foi encontrado, lança um erro com uma mensagem descritiva
      throw new Error(`Container with selector ${selector} not found`);
    }
  }

  // Define um método que deve ser sobrescrito pelas classes filhas
  // Este é um exemplo do padrão de design "Template Method"
  getTemplate() {
    // Lança um erro se uma classe filha não implementar este método
    throw new Error('getTemplate method must be implemented by child classes');
  }

  // Método que renderiza o conteúdo do componente no container
  render() {
    // Define o HTML interno do container como o resultado do método getTemplate
    this.container.innerHTML = this.getTemplate();
    // Chama o método afterRender para executar ações após a renderização
    this.afterRender();
  }

  // Define um método de gancho (hook) que pode ser sobrescrito pelas classes filhas
  // para executar ações após a renderização do componente
  afterRender() {
    // Este método está vazio por padrão e pode ser sobrescrito pelas classes filhas
  }
}