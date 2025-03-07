import { BaseComponent } from './base-component.js';

export class ExperienceComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }

  getTemplate() {
    return `
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <!-- Experiência -->
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Experiência</h2>
              
              <div class="space-y-12">
                <div class="relative pl-8 border-l-2 border-accent">
                  <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                  <div class="mb-1 flex items-center">
                    <h3 class="text-xl font-bold text-gray-900">Desenvolvedor Frontend</h3>
                    <span class="ml-auto text-sm text-gray-500">2021 - Atual</span>
                  </div>
                  <p class="text-gray-600 mb-2">Freelancer</p>
                  <p class="text-gray-600">
                    Desenvolvimento de aplicações web responsivas utilizando React, TypeScript e outras tecnologias modernas.
                    Implementação de interfaces de usuário seguindo princípios de UX/UI e boas práticas de desenvolvimento.
                  </p>
                </div>
                
                <div class="relative pl-8 border-l-2 border-gray-200">
                  <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-200"></div>
                  <div class="mb-1 flex items-center">
                    <h3 class="text-xl font-bold text-gray-900">Estágio em Desenvolvimento Web</h3>
                    <span class="ml-auto text-sm text-gray-500">2020 - 2021</span>
                  </div>
                  <p class="text-gray-600 mb-2">Empresa XYZ</p>
                  <p class="text-gray-600">
                    Participação em projetos de desenvolvimento web, manutenção de sistemas existentes e implementação de novas funcionalidades.
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Formação -->
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Formação</h2>
              
              <div class="space-y-12">
                <div class="relative pl-8 border-l-2 border-accent">
                  <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                  <div class="mb-1 flex items-center">
                    <h3 class="text-xl font-bold text-gray-900">Análise e Desenvolvimento de Sistemas</h3>
                    <span class="ml-auto text-sm text-gray-500">2019 - 2022</span>
                  </div>
                  <p class="text-gray-600 mb-2">Anhanguera Educacional</p>
                  <p class="text-gray-600">
                    Formação em tecnologias de desenvolvimento de software, banco de dados, análise de sistemas e metodologias ágeis.
                  </p>
                </div>
                
                <div class="relative pl-8 border-l-2 border-gray-200">
                  <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-200"></div>
                  <div class="mb-1 flex items-center">
                    <h3 class="text-xl font-bold text-gray-900">Cursos e Certificações</h3>
                  </div>
                  <ul class="text-gray-600 space-y-2">
                    <li>• Desenvolvimento Web Completo - Udemy</li>
                    <li>• React: Do Zero ao Profissional - B7Web</li>
                    <li>• JavaScript Avançado - Alura</li>
                    <li>• TypeScript para Desenvolvedores React - Origamid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}