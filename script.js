document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const glitchElement = document.querySelector('.glitch');
    
    // Seleção dos elementos do Modal
    const modal = document.getElementById('demo-modal');
    const closeButton = document.querySelector('.close-button');


    // Função para adicionar o efeito Glitch/Erro Digital
    const applyGlitchEffect = (element, originalText) => {
        let iterations = 0;
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-";

        const interval = setInterval(() => {
            element.innerText = element.innerText.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return alphabet[Math.floor(Math.random() * alphabet.length)];
                })
                .join("");

            if (iterations >= originalText.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    };


    // Lógica de Abrir e Fechar o Modal
    
    // Abre o modal ao clicar no botão
    ctaButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fecha o modal ao clicar no 'x'
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


    // Efeitos visuais (Glitch)
    ctaButton.addEventListener('mouseover', () => {
        applyGlitchEffect(ctaButton, 'VER DEMONSTRAÇÃO');
    });

    if (glitchElement) {
        setTimeout(() => {
            applyGlitchEffect(glitchElement, 'ROVER 4WD');
        }, 500); 
    }

    // Rolagem Suave
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
