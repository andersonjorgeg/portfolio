# Anderson Jorge - Portfolio

## 📋 Visão Geral
Este é meu site de portfólio pessoal, desenvolvido para apresentar minhas habilidades como Desenvolvedor Front-end Junior. O projeto foi construído utilizando JavaScript vanilla, HTML5, CSS3 e Tailwind CSS.

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- Font Awesome (para ícones)

## 🏗️ Arquitetura e Padrões de Projeto

### Princípios SOLID Aplicados

O projeto foi estruturado seguindo os princípios SOLID para garantir um código limpo, modular e de fácil manutenção:

1. **S - Single Responsibility Principle (Princípio da Responsabilidade Única)**
   - Cada componente e serviço tem uma única responsabilidade
   - Exemplo: `NavigationService` é responsável apenas pela navegação

2. **O - Open/Closed Principle (Princípio Aberto/Fechado)**
   - Os componentes são extensíveis sem modificação do código existente
   - Novas seções podem ser adicionadas sem alterar a lógica principal

3. **L - Liskov Substitution Principle (Princípio da Substituição de Liskov)**
   - Todos os componentes herdam de `BaseComponent` e podem ser usados de forma intercambiável

4. **I - Interface Segregation Principle (Princípio da Segregação de Interface)**
   - Serviços específicos como `NavigationService` fornecem apenas os métodos necessários

5. **D - Dependency Inversion Principle (Princípio da Inversão de Dependência)**
   - Componentes dependem de abstrações, não de implementações concretas
   - Injeção de dependências via seletores

## 📂 Estrutura do Projeto