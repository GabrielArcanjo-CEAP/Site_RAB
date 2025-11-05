// O 'DOMContentLoaded' garante que o script só rode após o HTML ser totalmente carregado.
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('O site está pronto! Vamos adicionar interatividade.');

    // --- Exemplo de Interatividade: Mensagem de Boas-Vindas ---
    
    // Você pode usar o JavaScript para, por exemplo,
    // mostrar um pop-up ou uma mensagem de console.
    
    const tituloPrincipal = document.querySelector('.hero h2');
    if (tituloPrincipal) {
        // Altera o texto após 2 segundos, um efeito simples.
        setTimeout(() => {
            // tituloPrincipal.textContent = 'Monte o Seu Agora!';
        }, 2000);
    }

    // --- Função para Menu Responsivo (se o menu for 'hamburguer') ---
    /* const nav = document.querySelector('nav ul');
    const menuButton = document.createElement('button');
    menuButton.textContent = '☰';
    menuButton.classList.add('menu-toggle');
    document.querySelector('header .container').appendChild(menuButton);

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    */

});
