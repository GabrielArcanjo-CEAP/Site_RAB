document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um listener ao botão "Ver Demonstração"
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Rola suavemente até a seção de detalhes do projeto
            document.getElementById('projeto').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Opcional: Adicionar um efeito de digitação (typing effect) no H1.
    // É mais complexo, mas muito moderno! Deixei o esqueleto.
    // Você pode procurar tutoriais sobre 'Typed.js' ou implementar manualmente.
});
