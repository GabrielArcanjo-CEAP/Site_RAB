document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const glitchElement = document.querySelector('.glitch');

    // Função para adicionar o efeito Glitch no botão
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

            iterations += 1 / 3; // Velocidade do efeito
        }, 30);
    };

    // Glitch ao passar o mouse sobre o botão CTA
    ctaButton.addEventListener('mouseover', () => {
        applyGlitchEffect(ctaButton, 'VER DEMONSTRAÇÃO');
    });

    // Glitch (sutil) no Título do Logo (executa uma vez ao carregar)
    if (glitchElement) {
        applyGlitchEffect(glitchElement, 'ROVER 4WD');
    }

    // Exemplo de rolagem suave (Smooth Scroll)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
