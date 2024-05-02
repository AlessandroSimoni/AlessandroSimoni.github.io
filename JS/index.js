document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.scroll-to-top');

    // Aggiungi un listener per il click sulla freccia
    scrollButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scrolla in modo fluido
        });
    });

    // Mostra o nascondi la freccia in base alla posizione dello scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) { // Mostra la freccia quando lo scroll supera i 200px
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});