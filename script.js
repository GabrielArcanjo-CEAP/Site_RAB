// O 'DOMContentLoaded' garante que o script só rode após o HTML ser totalmente carregado.
document.addEventListener('DOMContentLoaded', function() {
    
    // Log de inicialização do sistema
    console.log('// SYSTEM_INIT: [OK]');
    console.log('// INTERFACE_LOADED: [SUCCESS]');

    // Adicione aqui as funções para:
    // 1. Alternar o Menu Responsivo (Mobile)
    // 2. Efeitos de Scroll (fazer elementos aparecerem com o scroll)
    // 3. Funcionalidade de "Copiar Código" na seção de Programação
    
    // Exemplo de função: destacar a seção ativa na navegação
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Identifica qual seção está mais visível
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Aplica o destaque ao link ativo
        navLinks.forEach(a => {
            a.classList.remove('active-neon');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active-neon');
            }
        });
    });

    // Adicione CSS para .active-neon para dar o destaque futurista:
    // Exemplo em CSS:
    /* .active-neon {
        color: var(--color-secondary-accent) !important;
        text-shadow: 0 0 10px var(--color-secondary-accent), 0 0 20px var(--color-secondary-accent);
    }
    */
});
