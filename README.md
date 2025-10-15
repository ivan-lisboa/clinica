clinica

# Funcionalidades Principais (Front-end)
O projeto atual foca na estrutura e design das seguintes páginas:

Página Inicial (index.html): Apresentação da clínica, serviços, especialidades e depoimentos.

Agendamento de Consulta (agendamento.html): Formulário completo para que pacientes possam solicitar agendamentos.

Registro de Pacientes (cadastro_paciente.html): Formulário de cadastro de novos usuários.

Registro de Médicos (cadastro_medico.html): Formulário de cadastro para novos profissionais da saúde (área administrativa).

# Stack Tecnológica
Linguagens HTML5 Estrutura semântica das páginas. Estilização CSS3 Layout responsivo, design e animações. Ícones Font Awesome 6.4.0 Ícones de alta qualidade para melhor UX. Interatividade JavaScript (Vanilla) Menu responsivo (hambúrguer) e botão "Voltar ao Topo" com smooth scrolling. Metodologia Mobile-First Uso extensivo de Media Queries para adaptação de layout.

# Estrutura do Projeto
clínica-medvida/ ├── index.html ├── agendamento.html ├── cadastro_paciente.html ├── cadastro_medico.html ├── login.html ├── style.css └── js/ └── main.js

# Detalhe do CSS
O arquivo style.css utiliza Variáveis CSS (:root) para padronizar cores e tamanhos, facilitando a manutenção e a customização. O design é totalmente responsivo, garantindo a adaptação a diferentes dispositivos (desktops, tablets e celulares).

# Detalhe do JavaScript
O arquivo js/main.js contém a lógica essencial de interação:

window.onscroll: Controla a visibilidade do botão "Voltar ao Topo".

window.scrollTo: Implementa a rolagem suave ao clicar no botão "Voltar ao Topo".

Menu Mobile (hambúrguer): Lógica para abrir/fechar o menu de navegação em telas menores (<= 768px).
