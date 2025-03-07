import { BaseComponent } from './base-component.js';

export class ProjectsComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }

  getTemplate() {
    return `
      <section id="projetos" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Meus Projetos</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Confira alguns dos meus trabalhos recentes. Cada projeto representa um desafio único que me ajudou a aprimorar minhas habilidades.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- projeto 1 -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div class="relative overflow-hidden">
                <img src="./img/projeto1.jpeg" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" alt="TaskMaster">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div class="p-4 w-full">
                    <div class="flex space-x-2 justify-end">
                      <a href="https://taskmaster-app.vercel.app/" target="_blank" class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a href="https://github.com/andersonjorgeg/taskmaster" target="_blank" class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl text-gray-900 mb-2">TaskMaster</h3>
                <p class="text-gray-600 mb-4">Aplicativo de gerenciamento de tarefas com recursos de categorização, priorização e lembretes.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Firebase</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <!-- projeto 2 -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div class="relative overflow-hidden">
                <img src="./img/projeto2.jpeg" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" alt="FitTracker">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div class="p-4 w-full">
                    <div class="flex space-x-2 justify-end">
                      <a href="https://fittracker-app.vercel.app/" target="_blank" class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a href="https://github.com/andersonjorgeg/fittracker" target="_blank" class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl text-gray-900 mb-2">FitTracker</h3>
                <p class="text-gray-600 mb-4">Aplicativo para acompanhamento de atividades físicas, nutrição e progresso de condicionamento.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React Native</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Redux</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Node.js</span>
                </div>
              </div>
            </div>

            <!-- projeto 3 -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div class="relative overflow-hidden">
                <img src="./img/projeto3.jpeg" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" alt="Web World">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div class="p-4 w-full">
                    <div class="flex space-x-2 justify-end">
                      <a href="https://web-world.vercel.app/" target="_blank" class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a href="https://github.com/andersonjorgeg/web-world" target="_blank" class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl text-gray-900 mb-2">Web World</h3>
                <p class="text-gray-600 mb-4">Portal de notícias sobre tecnologia com sistema de comentários e compartilhamento em redes sociais.</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">HTML</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">CSS</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">jQuery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}