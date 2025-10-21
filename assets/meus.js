document.addEventListener("DOMContentLoaded", function() {
    // Selecciona els enllaços del menú amb text o URL específica
    document.querySelectorAll('nav.md-nav a').forEach(function(link) {
        // Exemple: obrir enllaços que continguin 'exemple.com' en nova pestanya
        if (link.href.includes('presentacions')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Canvia title de les presentacions
    document.addEventListener("DOMContentLoaded", function() {
        if (document.title === "Keynote") {
            document.title = "Docencia Xavier";
        }
    });

});
