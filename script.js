document.addEventListener('DOMContentLoaded', () => {
    // Manteremos apenas a rolagem suave, que é uma convenção moderna de UX.

    // Rolagem Suave
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Você pode adicionar uma função simples para alternar o Modo Escuro aqui, se desejar.
    /*
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };
    // Exemplo: document.getElementById('toggle-theme').addEventListener('click', toggleDarkMode);
    */
});
