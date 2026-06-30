document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            // Mostra ou esconde os links
            navLinks.classList.toggle('active');
            // Transforma o botão hambúrguer no ícone "X"
            mobileMenu.classList.toggle('is-active');
        });

        // Garante que o menu fecha ao carregar num link interno
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('is-active');
            });
        });
    }
});
