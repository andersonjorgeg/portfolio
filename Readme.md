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
```
portfolio/
├── css/
│   └── styles.css
├── js/
│   ├── components/
│   │   ├── base-component.js
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── contact.js
│   │   └── footer.js
│   ├── services/
│   │   ├── navigation.js
│   │   └── theme.js
│   └── app.js
├── img/
├── index.html
└── README.md
```

## 🚀 Características Principais
- Design responsivo para todos os dispositivos
- Navegação suave com scroll spy
- Carregamento dinâmico de componentes
- Arquitetura modular baseada em componentes
- Implementação de princípios SOLID

## 💻 Como Executar o Projeto
1. Clone o repositório
```bash
git clone https://github.com/andersonjorgeg/portfolio.git
```

2. Navegue até a pasta do projeto
```bash
cd portfolio
```

3. Abra o arquivo `index.html` em seu navegador ou use um servidor local

## 📱 Contato
- Email: anderson.jorge33@gmail.com
- LinkedIn: [Anderson Jorge](https://www.linkedin.com/in/andersonjorgedesenvolvedorjavascriptjunior/)
- GitHub: [andersonjorgeg](https://github.com/andersonjorgeg)

---

Desenvolvido por Anderson Jorge, 2023.
```

Este README explica detalhadamente como o projeto foi desenvolvido, com foco especial na implementação dos princípios SOLID na arquitetura do código. Inclui uma explicação de cada princípio SOLID e como foi aplicado no projeto, além de fornecer informações sobre a estrutura do projeto, tecnologias utilizadas e instruções para execução.