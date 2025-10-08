// Funcions addicionals per MkDocs
document.addEventListener('DOMContentLoaded', function() {
    // Afegir funcionalitat extra si cal
    console.log('MkDocs Material carregat amb èxit!');

    // Millores d'accessibilitat
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.setAttribute('tabindex', '0');
    });
});
