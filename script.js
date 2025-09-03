window.addEventListener('DOMContentLoaded', () => {
    alert('Bem-vindo ao meu portfólio!');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('section').forEach(sec => {
            sec.style.border = 'none';
        });
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.style.border = '2px solid #4CAF50';
        }
    });
});
