document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const glitchElement = document.querySelector('.glitch');

    // Função para adicionar o efeito Glitch/Erro Digital
    const applyGlitchEffect = (element, originalText) => {
        let iterations = 0;
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-";

        const interval = setInterval(() => {
            element.innerText = element.innerText.split("")
                .map((letter, index) => {
                    // Mapeia até que todos os caracteres voltem ao original
                    if (index < iterations) {
                        return originalText[index];
                    }
                    // Adiciona um caractere aleatório (glitch)
                    return alphabet[Math.floor(Math.random() * alphabet.length)];
                })
                .join("");

            if (iterations >= originalText.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3; // Velocidade do efeito
        }, 30);
    };

    document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const glitchElement = document.querySelector('.glitch');
    
    // NOVO: Seleção dos elementos do Modal
    const modal = document.getElementById('demo-modal');
    const closeButton = document.querySelector('.close-button');


    // 1. Função de Efeito Glitch (mantida)
    const applyGlitchEffect = (element, originalText) => {
        // ... (o código da função glitch permanece o mesmo)
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


    // 2. Lógica de Abrir e Fechar o Modal
    
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


    // 3. Efeitos visuais (Glitch) (mantidos)
    ctaButton.addEventListener('mouseover', () => {
        applyGlitchEffect(ctaButton, 'VER DEMONSTRAÇÃO');
    });

    if (glitchElement) {
        setTimeout(() => {
            applyGlitchEffect(glitchElement, 'ROVER 4WD');
        }, 500); 
    }

    // 4. Rolagem Suave (mantida)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

    // Glitch ao passar o mouse sobre o botão CTA
    ctaButton.addEventListener('mouseover', () => {
        applyGlitchEffect(ctaButton, 'VER DEMONSTRAÇÃO');
    });

    // Glitch (sutil) no Título do Logo (executa uma vez ao carregar)
    if (glitchElement) {
        // Atraso de 500ms para o efeito ser perceptível após o carregamento
        setTimeout(() => {
            applyGlitchEffect(glitchElement, 'ROVER 4WD');
        }, 500); 
    }

    // Rolagem suave para melhor UX
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
