// Dades de la prova
const PREGUNTES_TEST = [
    {
        pregunta: "Què és un element en HTML?",
        opcions: [
            "Un tipus de variable",
            "Una etiqueta que defineix una part de la pàgina web",
            "Un arxiu d'estils",
            "Un llenguatge de programació"
        ],
        resposta_correcta: 1
    },
    {
        pregunta: "Quin atribut s'utilitza per enllaçar un full d'estil extern en HTML?",
        opcions: ["src", "href", "rel", "target"],
        resposta_correcta: 1
    },
    {
        pregunta: "Quin és el selector correcte per a un element amb id=\"menu\" en CSS?",
        opcions: [".menu", "#menu", "menu", "*menu"],
        resposta_correcta: 1
    },
    {
        pregunta: "Quina funció té el mètode addEventListener en JavaScript?",
        opcions: [
            "Afegir un element al DOM",
            "Assignar un event a un element per escoltar accions de l'usuari",
            "Crear un objecte nou",
            "Executar un codi repetidament"
        ],
        resposta_correcta: 1
    }
];

// Variables globals per emmagatzemar les respostes
let respostesAlumne = {
    nom: '',
    preguntesTest: [],
    codiPractic: '',
    analisiCodi: '',
    dataProva: new Date()
};

// Inicialització de l'aplicació
document.addEventListener('DOMContentLoaded', function() {
    generarPreguntes();
});

// Funcions de navegació
function comenzarProva() {
    const nomInput = document.getElementById('nomAlumne');
    const nom = nomInput.value.trim();
    
    if (!nom) {
        alert('Si us plau, introdueix el teu nom abans de començar la prova.');
        nomInput.focus();
        return;
    }
    
    respostesAlumne.nom = nom;
    mostrarSeccio('preguntes');
}

function tornarInici() {
    mostrarSeccio('inici');
}

function seguentExercici() {
    if (!validarPreguntes()) {
        alert('Si us plau, respon a totes les preguntes abans de continuar.');
        return;
    }
    
    guardarRespostesTest();
    mostrarSeccio('exercici');
}

function tornarPreguntes() {
    mostrarSeccio('preguntes');
}

function seguentAnalisi() {
    const codiPractic = document.getElementById('codiPractic').value.trim();
    if (!codiPractic) {
        alert('Si us plau, escriu el codi per l\'exercici pràctic abans de continuar.');
        document.getElementById('codiPractic').focus();
        return;
    }
    
    respostesAlumne.codiPractic = codiPractic;
    mostrarSeccio('analisi');
}

function tornarExercici() {
    mostrarSeccio('exercici');
}

function veureMeusResultats() {
    const explicacio = document.getElementById('explicacioCodi').value.trim();
    if (!explicacio) {
        alert('Si us plau, explica què fa el codi abans de veure els resultats.');
        document.getElementById('explicacioCodi').focus();
        return;
    }
    
    respostesAlumne.analisiCodi = explicacio;
    calcularResultats();
    mostrarSeccio('resultats');
}

// Funció per mostrar seccions
function mostrarSeccio(seccio) {
    // Amagar totes les seccions
    const seccions = document.querySelectorAll('.section');
    seccions.forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    
    // Mostrar la secció seleccionada
    const seccioActual = document.getElementById(seccio);
    if (seccioActual) {
        seccioActual.classList.remove('hidden');
        seccioActual.classList.add('active');
    }
}

// Generar preguntes dinàmicament
function generarPreguntes() {
    const container = document.getElementById('preguntes-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    PREGUNTES_TEST.forEach((pregunta, index) => {
        const preguntaDiv = document.createElement('div');
        preguntaDiv.className = 'pregunta-item';
        
        preguntaDiv.innerHTML = `
            <div class="pregunta-titol">
                <strong>Pregunta ${index + 1}:</strong> ${pregunta.pregunta}
            </div>
            <div class="opcions-container">
                ${pregunta.opcions.map((opcio, opcioIndex) => `
                    <label class="opcio-item">
                        <input type="radio" name="pregunta_${index}" value="${opcioIndex}" required>
                        <span class="opcio-text">${opcio}</span>
                    </label>
                `).join('')}
            </div>
        `;
        
        container.appendChild(preguntaDiv);
    });
}

// Validar que totes les preguntes tinguin resposta
function validarPreguntes() {
    for (let i = 0; i < PREGUNTES_TEST.length; i++) {
        const respostaSeleccionada = document.querySelector(`input[name="pregunta_${i}"]:checked`);
        if (!respostaSeleccionada) {
            return false;
        }
    }
    return true;
}

// Guardar respostes del test
function guardarRespostesTest() {
    respostesAlumne.preguntesTest = [];
    
    for (let i = 0; i < PREGUNTES_TEST.length; i++) {
        const respostaSeleccionada = document.querySelector(`input[name="pregunta_${i}"]:checked`);
        if (respostaSeleccionada) {
            respostesAlumne.preguntesTest.push({
                preguntaIndex: i,
                respostaAlumne: parseInt(respostaSeleccionada.value),
                correcta: parseInt(respostaSeleccionada.value) === PREGUNTES_TEST[i].resposta_correcta
            });
        }
    }
}

// Calcular i mostrar resultats
function calcularResultats() {
    // Calcular puntuació del test
    const respostesCorrectes = respostesAlumne.preguntesTest.filter(r => r.correcta).length;
    const totalPreguntes = PREGUNTES_TEST.length;
    const percentatge = Math.round((respostesCorrectes / totalPreguntes) * 100);
    
    // Mostrar informació de l'alumne
    const resultatsAlumne = document.getElementById('resultat-alumne');
    resultatsAlumne.innerHTML = `
        <div class="alumne-nom">${respostesAlumne.nom}</div>
        <div class="data-prova">Prova realitzada el: ${formatarData(respostesAlumne.dataProva)}</div>
    `;
    
    // Mostrar puntuació
    const puntuacioDiv = document.getElementById('puntuacio-test');
    puntuacioDiv.innerHTML = `
        <span class="puntuacio-numero">${respostesCorrectes}/${totalPreguntes}</span>
        <div class="puntuacio-text">Has encertat ${respostesCorrectes} de ${totalPreguntes} preguntes (${percentatge}%)</div>
    `;
    
    // Mostrar detalls de cada resposta
    mostrarDetallRespostes();
    
    // Generar feedback personalitzat
    generarFeedback(percentatge);
    
    // Mostrar resum de respostes
    mostrarResumRespostes();
}

// Mostrar detalls de les respostes
function mostrarDetallRespostes() {
    const detallContainer = document.getElementById('respostes-detall');
    let html = '';
    
    respostesAlumne.preguntesTest.forEach((resposta, index) => {
        const pregunta = PREGUNTES_TEST[resposta.preguntaIndex];
        const respostaText = pregunta.opcions[resposta.respostaAlumne];
        const correctaText = pregunta.opcions[pregunta.resposta_correcta];
        
        html += `
            <div class="resposta-item ${resposta.correcta ? 'resposta-correcta' : 'resposta-incorrecta'}">
                <div class="resposta-text">
                    <strong>P${index + 1}:</strong> ${respostaText}
                    ${!resposta.correcta ? `<br><small>Correcta: ${correctaText}</small>` : ''}
                </div>
                <div class="resposta-status ${resposta.correcta ? 'correcta' : 'incorrecta'}">
                    ${resposta.correcta ? '✓ Correcta' : '✗ Incorrecta'}
                </div>
            </div>
        `;
    });
    
    detallContainer.innerHTML = html;
}

// Generar feedback personalitzat
function generarFeedback(percentatge) {
    const feedbackDiv = document.getElementById('feedback-personalitzat');
    let feedback = '';
    
    if (percentatge >= 80) {
        feedback = `
            <h4>Excel·lent treball! 🎉</h4>
            <p>Demostres un bon coneixement dels conceptes bàsics de DWEC. Estàs preparat/da per aprofundir en els temes més avançats del curs.</p>
        `;
    } else if (percentatge >= 60) {
        feedback = `
            <h4>Bon començament! 👍</h4>
            <p>Tens una base sòlida, però seria convenient revisar alguns conceptes teòrics abans d'avançar. Et recomanem repassar la documentació i fer alguns exercicis pràctics.</p>
        `;
    } else if (percentatge >= 40) {
        feedback = `
            <h4>Necessites reforçar els conceptes bàsics 📚</h4>
            <p>És important dedicar temps a revisar els fonaments d'HTML, CSS i JavaScript. Considera fer servir recursos addicionals com tutorials online o consultar amb el professor.</p>
        `;
    } else {
        feedback = `
            <h4>Recomanem començar pels fonaments ⚠️</h4>
            <p>És molt important establir una base sòlida abans de continuar. Et suggerim dedicar temps extra a estudiar els conceptes bàsics i fer pràctiques guiades.</p>
        `;
    }
    
    feedbackDiv.innerHTML = feedback;
}

// Mostrar resum de respostes
function mostrarResumRespostes() {
    // Resum de l'exercici pràctic
    const resumExercici = document.getElementById('resum-exercici');
    const codiTrunc = truncarText(respostesAlumne.codiPractic, 200);
    resumExercici.textContent = codiTrunc || 'No s\'ha proporcionat codi';
    
    // Resum de l'anàlisi
    const resumAnalisi = document.getElementById('resum-analisi');
    const analisiTrunc = truncarText(respostesAlumne.analisiCodi, 200);
    resumAnalisi.textContent = analisiTrunc || 'No s\'ha proporcionat explicació';
}

// Funcions auxiliars
function formatarData(data) {
    const opcions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return data.toLocaleDateString('ca-ES', opcions);
}

function truncarText(text, maxLength) {
    if (!text || text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
}

// Imprimir resultats
function imprimirResultats() {
    // Crear una nova finestra amb el contingut dels resultats
    const contingutResultats = document.getElementById('resultats').innerHTML;
    const finestra = window.open('', '_blank');
    
    finestra.document.write(`
        <!DOCTYPE html>
        <html lang="ca">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultats - Prova inicial DWEC</title>
            <link rel="stylesheet" href="style.css">
            <style>
                body { 
                    margin: 20px; 
                    font-family: Arial, sans-serif; 
                }
                .navegacion, .accions-finals { 
                    display: none !important; 
                }
                .progress-bar { 
                    display: none !important; 
                }
                .card {
                    box-shadow: none;
                    border: 1px solid #ccc;
                }
                @media print {
                    .no-print { display: none !important; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                ${contingutResultats}
            </div>
            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `);
    
    finestra.document.close();
}

// Reiniciar la prova
function reiniciarProva() {
    if (confirm('Estàs segur/a que vols reiniciar la prova? Es perdran totes les respostes actuals.')) {
        // Reiniciar les dades
        respostesAlumne = {
            nom: '',
            preguntesTest: [],
            codiPractic: '',
            analisiCodi: '',
            dataProva: new Date()
        };
        
        // Netejar els camps
        document.getElementById('nomAlumne').value = '';
        document.getElementById('codiPractic').value = '';
        document.getElementById('explicacioCodi').value = '';
        
        // Desmarcar les opcions de ràdio
        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
        
        // Tornar a l'inici
        mostrarSeccio('inici');
    }
}

// Event listeners addicionals per a funcionalitat millorada
document.addEventListener('DOMContentLoaded', function() {
    // Autoguardat de dades mentre l'usuari escriu (simulat en memòria)
    const codiPractic = document.getElementById('codiPractic');
    if (codiPractic) {
        codiPractic.addEventListener('input', function() {
            respostesAlumne.codiPractic = this.value;
        });
    }
    
    const explicacioCodi = document.getElementById('explicacioCodi');
    if (explicacioCodi) {
        explicacioCodi.addEventListener('input', function() {
            respostesAlumne.analisiCodi = this.value;
        });
    }
    
    // Guardar respostes de les preguntes test quan canvien
    document.addEventListener('change', function(e) {
        if (e.target.type === 'radio' && e.target.name.startsWith('pregunta_')) {
            guardarRespostesTest();
        }
    });
});