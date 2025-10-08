// Dades dels exercicis
const exercicisData = {
    "exercicis": [
        {
            "num": 1,
            "titol": "Primer programa",
            "enunciat": "Escriu un programa que mostri un alert amb el missatge \"Hola Món\".",
            "solucio": "// Solució Exercici 1\nalert(\"Hola Món\");\n\n// Explicació:\n// La funció alert() mostra una finestra emergent amb el missatge especificat.\n// És una de les formes més simples d'interactuar amb l'usuari.",
            "explicacio": "Aquest és l'exercici més bàsic. La funció alert() és una funció global que mostra un missatge a l'usuari en una finestra modal."
        },
        {
            "num": 2,
            "titol": "Escriptura a la pàgina",
            "enunciat": "Escriu un programa que escrigui \"Benvingut a JavaScript\" a la pàgina web utilitzant document.write().",
            "solucio": "// Solució Exercici 2\ndocument.write(\"Benvingut a JavaScript\");\n\n// Explicació:\n// document.write() escriu directament al document HTML.\n// Atenció: no és recomanable usar-ho en aplicacions modernes.",
            "explicacio": "document.write() escriu contingut directament al document HTML. Tot i que funciona, en aplicacions modernes és millor utilitzar altres mètodes com innerHTML."
        },
        {
            "num": 3,
            "titol": "Operacions aritmètiques",
            "enunciat": "Crea un programa que sumi dos números (per exemple, 15 + 25) i mostri el resultat per consola utilitzant console.log().",
            "solucio": "// Solució Exercici 3\nlet num1 = 15;\nlet num2 = 25;\nlet suma = num1 + num2;\n\nconsole.log(\"El resultat de \" + num1 + \" + \" + num2 + \" = \" + suma);\n// o alternativament:\nconsole.log(`El resultat de ${num1} + ${num2} = ${suma}`);\n\n// Explicació:\n// Declarem variables per emmagatzemar els números i el resultat.\n// console.log() mostra informació a la consola del navegador.",
            "explicacio": "Les variables ens permeten emmagatzemar valors. L'operador + suma números i console.log() ens permet veure els resultats a la consola del navegador (F12)."
        },
        {
            "num": 4,
            "titol": "Variables bàsiques",
            "enunciat": "Declara dues variables: nom i edat. Assigna els teus valors personals i mostra'ls per consola amb un missatge personalitzat com \"Hola, em dic [nom] i tinc [edat] anys\".",
            "solucio": "// Solució Exercici 4\nlet nom = \"Maria\";\nlet edat = 20;\n\nconsole.log(\"Hola, em dic \" + nom + \" i tinc \" + edat + \" anys\");\n// o amb template literals:\nconsole.log(`Hola, em dic ${nom} i tinc ${edat} anys`);\n\n// Explicació:\n// Les variables ens permeten emmagatzemar diferents tipus de dades.\n// Podem concatenar strings amb + o usar template literals amb ``.",
            "explicacio": "Les variables són contenidors per emmagatzemar dades. Podem combinar text i variables utilitzant concatenació (+) o template literals (`${variable}`)."
        },
        {
            "num": 5,
            "titol": "Entrada de dades",
            "enunciat": "Crea un programa que demani el nom de l'usuari amb prompt() i el saludi amb un alert personalitzat.",
            "solucio": "// Solució Exercici 5\nlet nomUsuari = prompt(\"Com et dius?\");\nalert(\"Hola \" + nomUsuari + \"! Benvingut/da!\");\n\n// Explicació:\n// prompt() mostra una finestra per introduir text i retorna el valor introduït.\n// Emmagatzemem la resposta en una variable per usar-la després.",
            "explicacio": "prompt() permet a l'usuari introduir dades. El valor retornat es pot emmagatzemar en una variable per utilitzar-lo posteriorment."
        },
        {
            "num": 6,
            "titol": "Calculadora simple",
            "enunciat": "Demana dos números a l'usuari utilitzant prompt(), suma'ls i mostra el resultat amb un alert. Recorda utilitzar parseInt() o parseFloat() per convertir els strings a números.",
            "solucio": "// Solució Exercici 6\nlet num1 = parseFloat(prompt(\"Introdueix el primer número:\"));\nlet num2 = parseFloat(prompt(\"Introdueix el segon número:\"));\nlet resultat = num1 + num2;\n\nalert(\"La suma de \" + num1 + \" + \" + num2 + \" = \" + resultat);\n\n// Explicació:\n// prompt() sempre retorna un string, per això cal convertir-lo a número.\n// parseFloat() converteix strings a números decimals.\n// parseInt() seria per a números enters.",
            "explicacio": "prompt() sempre retorna strings. Per fer operacions matemàtiques, hem de convertir-los a números amb parseInt() (enters) o parseFloat() (decimals)."
        },
        {
            "num": 7,
            "titol": "Comparació de números",
            "enunciat": "Escriu un programa que demani dos números a l'usuari i determini quin és el més gran, o si són iguals.",
            "solucio": "// Solució Exercici 7\nlet num1 = parseFloat(prompt(\"Introdueix el primer número:\"));\nlet num2 = parseFloat(prompt(\"Introdueix el segon número:\"));\n\nif (num1 > num2) {\n    alert(num1 + \" és més gran que \" + num2);\n} else if (num2 > num1) {\n    alert(num2 + \" és més gran que \" + num1);\n} else {\n    alert(\"Els dos números són iguals\");\n}\n\n// Explicació:\n// Utilitzem if/else if/else per comparar els valors.\n// Els operadors de comparació són: >, <, >=, <=, ==, ===",
            "explicacio": "Les estructures condicionals (if/else) ens permeten executar codi diferent segons les condicions. Els operadors de comparació avaluen relacions entre valors."
        },
        {
            "num": 8,
            "titol": "Paritat",
            "enunciat": "Crea un programa que demani un número a l'usuari i determini si és parell o senar utilitzant l'operador mòdul (%).",
            "solucio": "// Solució Exercici 8\nlet numero = parseInt(prompt(\"Introdueix un número:\"));\n\nif (numero % 2 === 0) {\n    alert(numero + \" és parell\");\n} else {\n    alert(numero + \" és senar\");\n}\n\n// Explicació:\n// L'operador % (mòdul) retorna la resta d'una divisió.\n// Si un número dividit per 2 té resta 0, és parell.",
            "explicacio": "L'operador mòdul (%) retorna la resta d'una divisió. Si numero % 2 === 0, el número és parell; si no, és senar."
        },
        {
            "num": 9,
            "titol": "Comptador amb bucle for",
            "enunciat": "Escriu un bucle for que compti del 1 al 10 i mostri cada número per consola.",
            "solucio": "// Solució Exercici 9\nfor (let i = 1; i <= 10; i++) {\n    console.log(i);\n}\n\n// Explicació:\n// El bucle for té tres parts: inicialització (i=1), condició (i<=10), increment (i++)\n// El codi dins del bucle s'executa mentre la condició sigui certa.",
            "explicacio": "El bucle for repeteix codi un número determinat de vegades. Té tres parts: inicialització, condició i increment/decrement."
        },
        {
            "num": 10,
            "titol": "Comptador invers amb while",
            "enunciat": "Utilitza un bucle while per comptar del 10 al 1 en ordre descendent i mostrar cada número per consola.",
            "solucio": "// Solució Exercici 10\nlet i = 10;\nwhile (i >= 1) {\n    console.log(i);\n    i--; // equivalent a i = i - 1\n}\n\n// Explicació:\n// El bucle while executa el codi mentre la condició sigui certa.\n// Hem de recordar decrementar i per evitar un bucle infinit.",
            "explicacio": "El bucle while repeteix codi mentre una condició sigui certa. És important modificar la variable de control dins del bucle per evitar bucles infinits."
        },
        {
            "num": 11,
            "titol": "Taula de multiplicar",
            "enunciat": "Crea un programa que demani un número a l'usuari i mostri la seva taula de multiplicar del 1 al 10.",
            "solucio": "// Solució Exercici 11\nlet numero = parseInt(prompt(\"De quin número vols veure la taula de multiplicar?\"));\n\nconsole.log(\"Taula de multiplicar del \" + numero + \":\");\nfor (let i = 1; i <= 10; i++) {\n    let resultat = numero * i;\n    console.log(numero + \" x \" + i + \" = \" + resultat);\n}\n\n// Explicació:\n// Combinem entrada de dades, bucles i operacions aritmètiques.\n// Cada iteració calcula i mostra una multiplicació.",
            "explicacio": "Aquest exercici combina varios conceptes: entrada de dades, bucles i operacions aritmètiques per crear una taula de multiplicar completa."
        },
        {
            "num": 12,
            "titol": "Validació d'edat",
            "enunciat": "Escriu un programa que demani l'edat de l'usuari i indiqui si és menor d'edat (menor de 18 anys), adult (18-65 anys) o jubilat (més de 65 anys).",
            "solucio": "// Solució Exercici 12\nlet edat = parseInt(prompt(\"Quina edat tens?\"));\n\nif (edat < 18) {\n    alert(\"Ets menor d'edat\");\n} else if (edat >= 18 && edat <= 65) {\n    alert(\"Ets adult\");\n} else {\n    alert(\"Ets jubilat/da\");\n}\n\n// Explicació:\n// Utilitzem múltiples condicions amb operadors lògics.\n// && significa \"i\" (ambdues condicions han de ser certes).",
            "explicacio": "Aquest exercici utilitza múltiples condicions amb operadors lògics (&&) per classificar segons rangs d'edat."
        },
        {
            "num": 13,
            "titol": "Comptar vocals",
            "enunciat": "Crea una funció que rebi un text i compti quantes vocals (a, e, i, o, u) conté. Mostra el resultat per consola.",
            "solucio": "// Solució Exercici 13\nfunction comptarVocals(text) {\n    let vocals = \"aeiouAEIOU\";\n    let comptador = 0;\n    \n    for (let i = 0; i < text.length; i++) {\n        if (vocals.includes(text[i])) {\n            comptador++;\n        }\n    }\n    \n    return comptador;\n}\n\n// Prova de la funció\nlet frase = prompt(\"Introdueix un text:\");\nlet numVocals = comptarVocals(frase);\nconsole.log(\"El text té \" + numVocals + \" vocals\");\n\n// Explicació:\n// Creem una funció que recorre cada caràcter del text.\n// includes() comprova si un caràcter està dins de l'string de vocals.",
            "explicacio": "Aquest exercici introdueix funcions, bucles sobre strings i el mètode includes() per buscar caràcters específics."
        },
        {
            "num": 14,
            "titol": "Array bàsic",
            "enunciat": "Crea un array amb els noms de 5 fruites i utilitza un bucle per mostrar cada fruita per consola amb el seu índex.",
            "solucio": "// Solució Exercici 14\nlet fruites = [\"poma\", \"plàtan\", \"taronja\", \"kiwi\", \"maduixa\"];\n\nfor (let i = 0; i < fruites.length; i++) {\n    console.log(\"Índex \" + i + \": \" + fruites[i]);\n}\n\n// Alternativa amb for...of:\nlet index = 0;\nfor (let fruita of fruites) {\n    console.log(\"Índex \" + index + \": \" + fruita);\n    index++;\n}\n\n// Explicació:\n// Els arrays emmagatzemen múltiples valors amb índexs numèrics (començant per 0).\n// .length ens dona el número d'elements de l'array.",
            "explicacio": "Els arrays són llistes ordenades d'elements. Accedim als elements per índex [0, 1, 2...] i podem recórrer-los amb bucles."
        },
        {
            "num": 15,
            "titol": "Suma d'elements d'array",
            "enunciat": "Escriu un programa que tingui un array de números i calculi la suma de tots els seus elements.",
            "solucio": "// Solució Exercici 15\nlet numeros = [10, 5, 8, 15, 3, 12];\nlet suma = 0;\n\nfor (let i = 0; i < numeros.length; i++) {\n    suma += numeros[i]; // equivalent a suma = suma + numeros[i]\n}\n\nconsole.log(\"Els números són: \" + numeros);\nconsole.log(\"La suma total és: \" + suma);\n\n// Alternativa més moderna:\n// let suma = numeros.reduce((total, num) => total + num, 0);\n\n// Explicació:\n// Inicialitzem una variable suma a 0 i hi anem afegint cada element.\n// L'operador += és una forma abreujada de sumar i assignar.",
            "explicacio": "Aquest exercici mostra com recórrer un array acumulant valors. L'operador += és molt útil per a operacions d'acumulació."
        },
        {
            "num": 16,
            "titol": "Element màxim",
            "enunciat": "Crea una funció que rebi un array de números i retorni el valor màxim sense utilitzar Math.max().",
            "solucio": "// Solució Exercici 16\nfunction trobarMaxim(array) {\n    if (array.length === 0) {\n        return null; // array buit\n    }\n    \n    let maxim = array[0]; // assumim que el primer és el màxim\n    \n    for (let i = 1; i < array.length; i++) {\n        if (array[i] > maxim) {\n            maxim = array[i];\n        }\n    }\n    \n    return maxim;\n}\n\n// Prova de la funció\nlet numeros = [3, 7, 2, 9, 1, 8];\nlet maxim = trobarMaxim(numeros);\nconsole.log(\"L'array: \" + numeros);\nconsole.log(\"El valor màxim és: \" + maxim);\n\n// Explicació:\n// Comparem cada element amb el màxim actual i l'actualitzem si trobem un de més gran.",
            "explicacio": "Aquest algorisme troba el màxim comparant cada element amb el valor màxim trobat fins al moment. És un exemple clàssic de cerca en arrays."
        },
        {
            "num": 17,
            "titol": "Manipulació del DOM",
            "enunciat": "Crea una pàgina HTML amb un botó. Quan es cliqui el botó, ha de canviar el text d'un paràgraf.",
            "solucio": "<!-- HTML -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Exercici 17</title>\n</head>\n<body>\n    <p id=\"paragraf\">Text original</p>\n    <button onclick=\"canviarText()\">Canviar text</button>\n    \n    <script>\n        function canviarText() {\n            let paragraf = document.getElementById(\"paragraf\");\n            paragraf.innerHTML = \"Text canviat amb JavaScript!\";\n        }\n    </script>\n</body>\n</html>\n\n// Explicació:\n// document.getElementById() selecciona un element pel seu id.\n// innerHTML permet modificar el contingut HTML d'un element.\n// onclick és un event handler que executa codi quan es clica.",
            "explicacio": "Aquest exercici introdueix la manipulació del DOM. Utilitzem getElementById() per seleccionar elements i innerHTML per modificar-ne el contingut."
        },
        {
            "num": 18,
            "titol": "Canvi de colors",
            "enunciat": "Escriu un programa que canviï el color de fons d'un element <h1> quan es faci clic sobre ell.",
            "solucio": "<!-- HTML -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Exercici 18</title>\n</head>\n<body>\n    <h1 id=\"titol\" onclick=\"canviarColor()\">Clica'm per canviar de color!</h1>\n    \n    <script>\n        let colors = [\"red\", \"blue\", \"green\", \"orange\", \"purple\", \"pink\"];\n        let colorActual = 0;\n        \n        function canviarColor() {\n            let titol = document.getElementById(\"titol\");\n            titol.style.backgroundColor = colors[colorActual];\n            colorActual = (colorActual + 1) % colors.length;\n        }\n    </script>\n</body>\n</html>\n\n// Explicació:\n// style.backgroundColor permet canviar el color de fons.\n// Utilitzem l'operador % per tornar al principi de l'array quan arribem al final.",
            "explicacio": "Aquest exercici mostra com modificar els estils CSS des de JavaScript utilitzant la propietat style dels elements del DOM."
        },
        {
            "num": 19,
            "titol": "Generador de números aleatoris",
            "enunciat": "Crea un programa que generi un número aleatori entre 1 i 100 cada vegada que es premi un botó i el mostri a la pàgina.",
            "solucio": "<!-- HTML -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Exercici 19</title>\n</head>\n<body>\n    <p>Número aleatori: <span id=\"numero\">--</span></p>\n    <button onclick=\"generarNumero()\">Generar número</button>\n    \n    <script>\n        function generarNumero() {\n            let numeroAleatori = Math.floor(Math.random() * 100) + 1;\n            document.getElementById(\"numero\").innerHTML = numeroAleatori;\n        }\n    </script>\n</body>\n</html>\n\n// Explicació:\n// Math.random() genera un número decimal entre 0 i 1.\n// Math.floor() arrodoneix cap avall per obtenir un enter.\n// Multipliquem per 100 i sumem 1 per obtenir números de 1 a 100.",
            "explicacio": "Math.random() genera números aleatoris. Per obtenir enters en un rang específic, utilitzem Math.floor() i operacions aritmètiques."
        },
        {
            "num": 20,
            "titol": "Calculadora de preus amb IVA",
            "enunciat": "Desenvolupa un programa que demani el preu d'un producte i el percentatge d'IVA, i calculi el preu final. La fórmula és: preu final = preu + (preu × IVA / 100).",
            "solucio": "// Solució Exercici 20\nfunction calcularPreuAmbIVA() {\n    let preuBase = parseFloat(prompt(\"Introdueix el preu del producte:\"));\n    let percentatgeIVA = parseFloat(prompt(\"Introdueix el percentatge d'IVA:\"));\n    \n    let importIVA = preuBase * percentatgeIVA / 100;\n    let preuFinal = preuBase + importIVA;\n    \n    alert(\"Preu base: \" + preuBase + \"€\");\n    alert(\"IVA (\" + percentatgeIVA + \"%): \" + importIVA.toFixed(2) + \"€\");\n    alert(\"Preu final: \" + preuFinal.toFixed(2) + \"€\");\n}\n\n// Executem la funció\ncalcularPreuAmbIVA();\n\n// Explicació:\n// toFixed(2) arrodoneix a 2 decimals per mostrar preus correctament.\n// Calculem l'import de l'IVA per separat per mostrar el desglossament.",
            "explicacio": "Aquest exercici practica càlculs amb decimals i formatació de números. toFixed() és útil per mostrar preus amb el format correcte."
        },
        {
            "num": 21,
            "titol": "Validador de contrasenya",
            "enunciat": "Crea una funció que validi si una contrasenya té almenys 8 caràcters i conté almenys una lletra majúscula i una minúscula.",
            "solucio": "// Solució Exercici 21\nfunction validarContrasenya(password) {\n    if (password.length < 8) {\n        return false;\n    }\n    \n    let teMajuscula = false;\n    let teMinuscula = false;\n    \n    for (let i = 0; i < password.length; i++) {\n        let caracter = password[i];\n        if (caracter >= 'A' && caracter <= 'Z') {\n            teMajuscula = true;\n        }\n        if (caracter >= 'a' && caracter <= 'z') {\n            teMinuscula = true;\n        }\n    }\n    \n    return teMajuscula && teMinuscula;\n}\n\n// Prova\nlet contrasenya = prompt(\"Introdueix una contrasenya:\");\nif (validarContrasenya(contrasenya)) {\n    alert(\"Contrasenya vàlida!\");\n} else {\n    alert(\"Contrasenya no vàlida. Ha de tenir almenys 8 caràcters, una majúscula i una minúscula.\");\n}",
            "explicacio": "Aquest exercici combina validacions de longitud i tipus de caràcters utilitzant comparacions ASCII i bucles."
        },
        {
            "num": 22,
            "titol": "Calculadora d'IMC",
            "enunciat": "Crea un programa que calculi l'Índex de Massa Corporal (IMC = pes / altura²) i indiqui la categoria corresponent.",
            "solucio": "// Solució Exercici 22\nfunction calcularIMC() {\n    let pes = parseFloat(prompt(\"Introdueix el teu pes en kg:\"));\n    let altura = parseFloat(prompt(\"Introdueix la teva altura en metres:\"));\n    \n    let imc = pes / (altura * altura);\n    let categoria;\n    \n    if (imc < 18.5) {\n        categoria = \"Baix pes\";\n    } else if (imc < 25) {\n        categoria = \"Pes normal\";\n    } else if (imc < 30) {\n        categoria = \"Sobrepès\";\n    } else {\n        categoria = \"Obesitat\";\n    }\n    \n    alert(`El teu IMC és ${imc.toFixed(2)} (${categoria})`);\n}\n\ncalcularIMC();",
            "explicacio": "L'IMC és un càlcul matemàtic que permet classificar el pes corporal segons estàndards mèdics."
        },
        {
            "num": 23,
            "titol": "Ordenació de tres números",
            "enunciat": "Escriu un programa que demani tres números i els mostri ordenats de menor a major.",
            "solucio": "// Solució Exercici 23\nlet num1 = parseFloat(prompt(\"Primer número:\"));\nlet num2 = parseFloat(prompt(\"Segon número:\"));\nlet num3 = parseFloat(prompt(\"Tercer número:\"));\n\nlet numeros = [num1, num2, num3];\nnumeros.sort((a, b) => a - b);\n\nalert(`Números ordenats de menor a major: ${numeros[0]}, ${numeros[1]}, ${numeros[2]}`);\n\n// Alternativa sense sort():\nlet menor, mitjà, major;\n\nif (num1 <= num2 && num1 <= num3) {\n    menor = num1;\n    mitjà = (num2 <= num3) ? num2 : num3;\n    major = (num2 <= num3) ? num3 : num2;\n} else if (num2 <= num1 && num2 <= num3) {\n    menor = num2;\n    mitjà = (num1 <= num3) ? num1 : num3;\n    major = (num1 <= num3) ? num3 : num1;\n} else {\n    menor = num3;\n    mitjà = (num1 <= num2) ? num1 : num2;\n    major = (num1 <= num2) ? num2 : num1;\n}\n\nalert(`Ordenats: ${menor}, ${mitjà}, ${major}`);",
            "explicacio": "Podem utilitzar el mètode sort() dels arrays o fer comparacions manuals amb condicionals."
        },
        {
            "num": 24,
            "titol": "Joc d'endevinar números",
            "enunciat": "Crea un joc on l'ordinador pensi un número entre 1 i 10, i l'usuari hagi d'endevinar-lo amb màxim 3 intents.",
            "solucio": "// Solució Exercici 24\nfunction jocEndevinar() {\n    let numeroSecret = Math.floor(Math.random() * 10) + 1;\n    let intents = 0;\n    let maxIntents = 3;\n    let encertat = false;\n    \n    alert(\"He pensat un número entre 1 i 10. Tens 3 intents per endevinar-lo!\");\n    \n    while (intents < maxIntents && !encertat) {\n        intents++;\n        let intent = parseInt(prompt(`Intent ${intents}/${maxIntents}: Quin número creus que és?`));\n        \n        if (intent === numeroSecret) {\n            alert(`Felicitats! Has encertat el número ${numeroSecret} en ${intents} intents!`);\n            encertat = true;\n        } else if (intent < numeroSecret) {\n            alert(\"El número és més gran!\");\n        } else {\n            alert(\"El número és més petit!\");\n        }\n    }\n    \n    if (!encertat) {\n        alert(`Game Over! El número era ${numeroSecret}`);\n    }\n}\n\njocEndevinar();",
            "explicacio": "Aquest joc combina números aleatoris, bucles while, condicionals i control del flux del programa."
        },
        {
            "num": 25,
            "titol": "Comptador de paraules",
            "enunciat": "Escriu una funció que compti el nombre de paraules en una frase. Les paraules estan separades per espais.",
            "solucio": "// Solució Exercici 25\nfunction comptarParaules(frase) {\n    // Eliminem espais al principi i final, i dividim per espais\n    let paraules = frase.trim().split(' ');\n    \n    // Si la frase està buida, retornem 0\n    if (frase.trim() === '') {\n        return 0;\n    }\n    \n    // Filtrem paraules buides (espais dobles)\n    paraules = paraules.filter(paraula => paraula !== '');\n    \n    return paraules.length;\n}\n\n// Prova de la funció\nlet text = prompt(\"Introdueix una frase:\");\nlet numParaules = comptarParaules(text);\nalert(`La frase té ${numParaules} paraules`);\n\n// Alternativa més simple:\nfunction comptarParaulesSimple(frase) {\n    return frase.trim().split(/\\s+/).filter(p => p).length;\n}",
            "explicacio": "Utilitzem split() per dividir la frase en paraules i filter() per eliminar elements buits."
        },
        {
            "num": 26,
            "titol": "Calculadora amb funcions",
            "enunciat": "Crea una calculadora amb funcions separades per sumar, restar, multiplicar i dividir. Inclou validació per la divisió per zero.",
            "solucio": "// Solució Exercici 26\nfunction sumar(a, b) {\n    return a + b;\n}\n\nfunction restar(a, b) {\n    return a - b;\n}\n\nfunction multiplicar(a, b) {\n    return a * b;\n}\n\nfunction dividir(a, b) {\n    if (b === 0) {\n        return \"Error: No es pot dividir per zero\";\n    }\n    return a / b;\n}\n\nfunction calculadora() {\n    let num1 = parseFloat(prompt(\"Primer número:\"));\n    let operacio = prompt(\"Operació (+, -, *, /):\");\n    let num2 = parseFloat(prompt(\"Segon número:\"));\n    let resultat;\n    \n    switch (operacio) {\n        case '+':\n            resultat = sumar(num1, num2);\n            break;\n        case '-':\n            resultat = restar(num1, num2);\n            break;\n        case '*':\n            resultat = multiplicar(num1, num2);\n            break;\n        case '/':\n            resultat = dividir(num1, num2);\n            break;\n        default:\n            resultat = \"Operació no vàlida\";\n    }\n    \n    alert(`Resultat: ${resultat}`);\n}\n\ncalculadora();",
            "explicacio": "Dividim la funcionalitat en funcions petites i reutilitzables. Switch és ideal per múltiples condicions."
        },
        {
            "num": 27,
            "titol": "Array de números parells",
            "enunciat": "Crea un programa que generi un array amb els primers 10 números parells (2, 4, 6, 8, ...).",
            "solucio": "// Solució Exercici 27\nlet numerosPareells = [];\n\nfor (let i = 1; i <= 10; i++) {\n    numerosPareells.push(i * 2);\n}\n\nconsole.log(\"Primers 10 números parells:\", numerosPareells);\n\n// Alternativa amb while:\nlet parells = [];\nlet numero = 2;\nlet comptador = 0;\n\nwhile (comptador < 10) {\n    parells.push(numero);\n    numero += 2;\n    comptador++;\n}\n\nconsole.log(\"Amb while:\", parells);\n\n// Alternativa més moderna amb Array.from:\nlet parellsModern = Array.from({length: 10}, (_, i) => (i + 1) * 2);\nconsole.log(\"Amb Array.from:\", parellsModern);",
            "explicacio": "Podem generar seqüències matemàtiques amb bucles o utilitzant mètodes moderns d'arrays."
        },
        {
            "num": 28,
            "titol": "Inversió d'un string",
            "enunciat": "Escriu una funció que rebi un string i el retorni invertit (per exemple: \"hola\" -> \"aloh\").",
            "solucio": "// Solució Exercici 28\nfunction invertirString(str) {\n    return str.split('').reverse().join('');\n}\n\n// Prova\nlet paraula = prompt(\"Introdueix una paraula:\");\nlet paraulaInvertida = invertirString(paraula);\nalert(`\"${paraula}\" invertida és \"${paraulaInvertida}\"`);;\n\n// Alternativa amb bucle:\nfunction invertirStringManual(str) {\n    let resultat = '';\n    for (let i = str.length - 1; i >= 0; i--) {\n        resultat += str[i];\n    }\n    return resultat;\n}\n\n// Alternativa amb recursivitat:\nfunction invertirRecursiu(str) {\n    if (str === '') return '';\n    return invertirRecursiu(str.substr(1)) + str.charAt(0);\n}",
            "explicacio": "split(), reverse() i join() són mètodes útils per manipular strings. També podem fer-ho manualment amb bucles."
        },
        {
            "num": 29,
            "titol": "Comprovador de palíndroms",
            "enunciat": "Crea una funció que determini si una paraula és un palíndrom (es llegeix igual cap endavant i cap enrere).",
            "solucio": "// Solució Exercici 29\nfunction esPalindrom(str) {\n    // Convertim a minúscules i eliminem espais\n    let textNet = str.toLowerCase().replace(/\\s/g, '');\n    let textInvertit = textNet.split('').reverse().join('');\n    return textNet === textInvertit;\n}\n\n// Prova\nlet text = prompt(\"Introdueix una paraula o frase:\");\nif (esPalindrom(text)) {\n    alert(`\"${text}\" és un palíndrom!`);\n} else {\n    alert(`\"${text}\" no és un palíndrom.`);\n}\n\n// Alternativa comparant caràcters:\nfunction esPalindromManual(str) {\n    let textNet = str.toLowerCase().replace(/\\s/g, '');\n    let longitud = textNet.length;\n    \n    for (let i = 0; i < longitud / 2; i++) {\n        if (textNet[i] !== textNet[longitud - 1 - i]) {\n            return false;\n        }\n    }\n    return true;\n}",
            "explicacio": "Un palíndrom es llegeix igual en ambdues direccions. Hem de normalitzar el text abans de comparar."
        },
        {
            "num": 30,
            "titol": "Cerca en array",
            "enunciat": "Escriu una funció que cerqui un element en un array i retorni la seva posició, o -1 si no el troba.",
            "solucio": "// Solució Exercici 30\nfunction cercarElement(array, element) {\n    for (let i = 0; i < array.length; i++) {\n        if (array[i] === element) {\n            return i;\n        }\n    }\n    return -1;\n}\n\n// Prova\nlet numeros = [10, 25, 30, 45, 50, 75];\nlet elementACercar = parseInt(prompt(\"Quin número vols cercar?\"));\nlet posicio = cercarElement(numeros, elementACercar);\n\nif (posicio !== -1) {\n    alert(`El número ${elementACercar} està a la posició ${posicio}`);\n} else {\n    alert(`El número ${elementACercar} no s'ha trobat a l'array`);\n}\n\n// Utilitzant el mètode indexOf (més modern):\nlet posicioModerna = numeros.indexOf(elementACercar);\nconsole.log(\"Amb indexOf:\", posicioModerna);",
            "explicacio": "Aquest és l'algorisme de cerca lineal. JavaScript té el mètode indexOf() que fa el mateix."
        },
        {
            "num": 31,
            "titol": "Generador de nombres aleatoris",
            "enunciat": "Crea una funció que generi un array de n números aleatoris entre un valor mínim i màxim.",
            "solucio": "// Solució Exercici 31\nfunction generarNombresAleatoris(quantitat, min, max) {\n    let numeros = [];\n    \n    for (let i = 0; i < quantitat; i++) {\n        let numeroAleatori = Math.floor(Math.random() * (max - min + 1)) + min;\n        numeros.push(numeroAleatori);\n    }\n    \n    return numeros;\n}\n\n// Prova\nlet quantitat = parseInt(prompt(\"Quants números vols generar?\"));\nlet min = parseInt(prompt(\"Valor mínim:\"));\nlet max = parseInt(prompt(\"Valor màxim:\"));\n\nlet nombresGenerats = generarNombresAleatoris(quantitat, min, max);\nalert(`Números generats: ${nombresGenerats.join(', ')}`);\n\n// Alternativa més moderna:\nfunction generarNombresModern(quantitat, min, max) {\n    return Array.from({length: quantitat}, () => \n        Math.floor(Math.random() * (max - min + 1)) + min\n    );\n}",
            "explicacio": "Combinem Math.random() amb operacions matemàtiques per generar números en rangs específics."
        },
        {
            "num": 32,
            "titol": "Filtre de números parells",
            "enunciat": "Donat un array de números, crea un nou array que contingui només els números parells.",
            "solucio": "// Solució Exercici 32\nlet numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\nlet numerosPareells = [];\n\nfor (let i = 0; i < numeros.length; i++) {\n    if (numeros[i] % 2 === 0) {\n        numerosPareells.push(numeros[i]);\n    }\n}\n\nconsole.log(\"Array original:\", numeros);\nconsole.log(\"Només parells:\", numerosPareells);\n\n// Alternativa amb filter (més moderna):\nlet parellsFilter = numeros.filter(num => num % 2 === 0);\nconsole.log(\"Amb filter:\", parellsFilter);\n\n// Funció reutilitzable:\nfunction filtrarParells(array) {\n    return array.filter(numero => numero % 2 === 0);\n}\n\n// Prova amb números introduïts per l'usuari:\nlet numerosUsuari = prompt(\"Introdueix números separats per comes:\").split(',').map(Number);\nlet parellsUsuari = filtrarParells(numerosUsuari);\nalert(`Números parells: ${parellsUsuari.join(', ')}`);",
            "explicacio": "El mètode filter() és perfecte per crear nous arrays amb elements que compleixin una condició."
        },
        {
            "num": 33,
            "titol": "Comptador de caràcters",
            "enunciat": "Escriu una funció que compti quantes vegades apareix cada caràcter en un string i mostri els resultats.",
            "solucio": "// Solució Exercici 33\nfunction comptarCaracters(str) {\n    let comptador = {};\n    \n    for (let i = 0; i < str.length; i++) {\n        let caracter = str[i];\n        if (comptador[caracter]) {\n            comptador[caracter]++;\n        } else {\n            comptador[caracter] = 1;\n        }\n    }\n    \n    return comptador;\n}\n\n// Prova\nlet text = prompt(\"Introdueix un text:\");\nlet resultat = comptarCaracters(text);\n\nconsole.log(\"Comptador de caràcters:\");\nfor (let caracter in resultat) {\n    console.log(`'${caracter}': ${resultat[caracter]}`);\n}\n\n// Alternativa més moderna:\nfunction comptarCaractersModern(str) {\n    return [...str].reduce((comptador, caracter) => {\n        comptador[caracter] = (comptador[caracter] || 0) + 1;\n        return comptador;\n    }, {});\n}",
            "explicacio": "Utilitzem un objecte com a mapa per comptar occurrències. Els objectes són ideals per emmagatzemar parells clau-valor."
        },
        {
            "num": 34,
            "titol": "Validador d'email",
            "enunciat": "Crea una funció que validi si un string té format d'email vàlid (conté @ i punt després de @).",
            "solucio": "// Solució Exercici 34\nfunction validarEmail(email) {\n    // Comprovem que conté exactament un @\n    let parts = email.split('@');\n    if (parts.length !== 2) {\n        return false;\n    }\n    \n    let [nomUsuari, domini] = parts;\n    \n    // El nom d'usuari no pot estar buit\n    if (nomUsuari.length === 0) {\n        return false;\n    }\n    \n    // El domini ha de contenir almenys un punt\n    if (!domini.includes('.')) {\n        return false;\n    }\n    \n    // El domini no pot començar o acabar amb punt\n    if (domini.startsWith('.') || domini.endsWith('.')) {\n        return false;\n    }\n    \n    return true;\n}\n\n// Prova\nlet email = prompt(\"Introdueix un email:\");\nif (validarEmail(email)) {\n    alert(`${email} és un email vàlid!`);\n} else {\n    alert(`${email} no és un email vàlid.`);\n}\n\n// Alternativa amb expressió regular:\nfunction validarEmailRegex(email) {\n    let regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    return regex.test(email);\n}",
            "explicacio": "Validem emails comprovant l'estructura bàsica. Les expressions regulars ofereixen validacions més sofisticades."
        },
        {
            "num": 35,
            "titol": "Ordenació d'array",
            "enunciat": "Implementa l'algoritme de bombolla (bubble sort) per ordenar un array de números de menor a major.",
            "solucio": "// Solució Exercici 35\nfunction bubbleSort(arr) {\n    let n = arr.length;\n    let arrayOrdenat = [...arr]; // Copiem l'array per no modificar l'original\n    \n    for (let i = 0; i < n - 1; i++) {\n        for (let j = 0; j < n - i - 1; j++) {\n            if (arrayOrdenat[j] > arrayOrdenat[j + 1]) {\n                // Intercanviem elements\n                let temp = arrayOrdenat[j];\n                arrayOrdenat[j] = arrayOrdenat[j + 1];\n                arrayOrdenat[j + 1] = temp;\n            }\n        }\n    }\n    \n    return arrayOrdenat;\n}\n\n// Prova\nlet numeros = [64, 34, 25, 12, 22, 11, 90];\nconsole.log(\"Array original:\", numeros);\n\nlet numerosOrdenats = bubbleSort(numeros);\nconsole.log(\"Array ordenat:\", numerosOrdenats);\n\n// Comparació amb sort() nativa:\nlet ordenatNatiu = [...numeros].sort((a, b) => a - b);\nconsole.log(\"Amb sort() nativa:\", ordenatNatiu);",
            "explicacio": "Bubble sort és un algoritme senzill que compara elements adjacents i els intercanvia si estan desordenats."
        },
        {
            "num": 36,
            "titol": "Calculadora de factorial",
            "enunciat": "Escriu una funció que calculi el factorial d'un número (n! = n × (n-1) × ... × 1).",
            "solucio": "// Solució Exercici 36\nfunction factorial(n) {\n    if (n < 0) {\n        return \"El factorial no està definit per números negatius\";\n    }\n    if (n === 0 || n === 1) {\n        return 1;\n    }\n    \n    let resultat = 1;\n    for (let i = 2; i <= n; i++) {\n        resultat *= i;\n    }\n    return resultat;\n}\n\n// Prova\nlet numero = parseInt(prompt(\"Introdueix un número per calcular el seu factorial:\"));\nlet resultatFactorial = factorial(numero);\n\nif (typeof resultatFactorial === 'number') {\n    alert(`${numero}! = ${resultatFactorial}`);\n} else {\n    alert(resultatFactorial);\n}\n\n// Alternativa recursiva:\nfunction factorialRecursiu(n) {\n    if (n < 0) return \"Error\";\n    if (n === 0 || n === 1) return 1;\n    return n * factorialRecursiu(n - 1);\n}\n\nconsole.log(\"Factorial recursiu de 5:\", factorialRecursiu(5));",
            "explicacio": "El factorial és un càlcul matemàtic que es pot implementar amb bucles o recursivitat."
        },
        {
            "num": 37,
            "titol": "Conversor de temperatura",
            "enunciat": "Crea un programa que converteixi temperatures entre Celsius, Fahrenheit i Kelvin.",
            "solucio": "// Solució Exercici 37\nfunction celsiusAFahrenheit(celsius) {\n    return (celsius * 9/5) + 32;\n}\n\nfunction celsiusAKelvin(celsius) {\n    return celsius + 273.15;\n}\n\nfunction fahrenheitACelsius(fahrenheit) {\n    return (fahrenheit - 32) * 5/9;\n}\n\nfunction kelvinACelsius(kelvin) {\n    return kelvin - 273.15;\n}\n\nfunction convertirTemperatura() {\n    let temperatura = parseFloat(prompt(\"Introdueix la temperatura:\"));\n    let escalaOrigen = prompt(\"Escala d'origen (C/F/K):\").toUpperCase();\n    let escalaDestí = prompt(\"Escala de destí (C/F/K):\").toUpperCase();\n    \n    let celsius;\n    \n    // Primer convertim tot a Celsius\n    switch (escalaOrigen) {\n        case 'C':\n            celsius = temperatura;\n            break;\n        case 'F':\n            celsius = fahrenheitACelsius(temperatura);\n            break;\n        case 'K':\n            celsius = kelvinACelsius(temperatura);\n            break;\n        default:\n            alert(\"Escala d'origen no vàlida\");\n            return;\n    }\n    \n    // Després convertim de Celsius a l'escala destí\n    let resultat;\n    switch (escalaDestí) {\n        case 'C':\n            resultat = celsius;\n            break;\n        case 'F':\n            resultat = celsiusAFahrenheit(celsius);\n            break;\n        case 'K':\n            resultat = celsiusAKelvin(celsius);\n            break;\n        default:\n            alert(\"Escala de destí no vàlida\");\n            return;\n    }\n    \n    alert(`${temperatura}°${escalaOrigen} = ${resultat.toFixed(2)}°${escalaDestí}`);\n}\n\nconvertirTemperatura();",
            "explicacio": "Les conversions de temperatura segueixen fórmules matemàtiques específiques. Utilitzem Celsius com a punt intermedi."
        },
        {
            "num": 38,
            "titol": "Comptador de vocals i consonants",
            "enunciat": "Escriu una funció que compti separately les vocals i consonants d'un text.",
            "solucio": "// Solució Exercici 38\nfunction comptarVocalsIConsonants(text) {\n    let vocals = 'aeiouAEIOU';\n    let comptadorVocals = 0;\n    let comptadorConsonants = 0;\n    \n    for (let i = 0; i < text.length; i++) {\n        let caracter = text[i];\n        \n        // Només comptem lletres\n        if (caracter.match(/[a-zA-ZàèìòùáéíóúüïöñçÀÈÌÒÙÁÉÍÓÚÜÏÖÑÇ]/)) {\n            if (vocals.includes(caracter)) {\n                comptadorVocals++;\n            } else {\n                comptadorConsonants++;\n            }\n        }\n    }\n    \n    return {\n        vocals: comptadorVocals,\n        consonants: comptadorConsonants,\n        total: comptadorVocals + comptadorConsonants\n    };\n}\n\n// Prova\nlet text = prompt(\"Introdueix un text:\");\nlet resultat = comptarVocalsIConsonants(text);\n\nalert(`Vocals: ${resultat.vocals}\\nConsonants: ${resultat.consonants}\\nTotal lletres: ${resultat.total}`);\n\n// Versió amb mètodes més moderns:\nfunction comptarModern(text) {\n    let lletres = text.match(/[a-zA-ZàèìòùáéíóúüïöñçÀÈÌÒÙÁÉÍÓÚÜÏÖÑÇ]/g) || [];\n    let vocals = lletres.filter(c => 'aeiouAEIOU'.includes(c)).length;\n    let consonants = lletres.length - vocals;\n    \n    return { vocals, consonants, total: lletres.length };\n}",
            "explicacio": "Utilitzem expressions regulars per identificar lletres i després les classifiquem com a vocals o consonants."
        },
        {
            "num": 39,
            "titol": "Cerca del segon element més gran",
            "enunciat": "Troba el segon element més gran d'un array de números sense utilitzar sort().",
            "solucio": "// Solució Exercici 39\nfunction segonMesGran(arr) {\n    if (arr.length < 2) {\n        return \"L'array necessita almenys 2 elements\";\n    }\n    \n    let primer = -Infinity;\n    let segon = -Infinity;\n    \n    for (let i = 0; i < arr.length; i++) {\n        if (arr[i] > primer) {\n            segon = primer;\n            primer = arr[i];\n        } else if (arr[i] > segon && arr[i] !== primer) {\n            segon = arr[i];\n        }\n    }\n    \n    if (segon === -Infinity) {\n        return \"Tots els elements són iguals\";\n    }\n    \n    return segon;\n}\n\n// Prova\nlet numeros = [1, 3, 4, 5, 0, 2];\nconsole.log(\"Array:\", numeros);\nconsole.log(\"Segon més gran:\", segonMesGran(numeros));\n\n// Prova amb números de l'usuari\nlet numerosUsuari = prompt(\"Introdueix números separats per comes:\")\n    .split(',')\n    .map(Number)\n    .filter(n => !isNaN(n));\n\nlet segon = segonMesGran(numerosUsuari);\nalert(`El segon número més gran és: ${segon}`);",
            "explicacio": "Mantenim rastreig dels dos valors més grans mentre recorrem l'array una sola vegada."
        },
        {
            "num": 40,
            "titol": "Generador de patrons",
            "enunciat": "Crea un programa que generi un patró triangular d'asteriscs de n files.",
            "solucio": "// Solució Exercici 40\nfunction generarTriangle(files) {\n    let patron = '';\n    \n    for (let i = 1; i <= files; i++) {\n        let fila = '';\n        \n        // Afegim espais per centrar\n        for (let j = 0; j < files - i; j++) {\n            fila += ' ';\n        }\n        \n        // Afegim asteriscs\n        for (let k = 0; k < 2 * i - 1; k++) {\n            fila += '*';\n        }\n        \n        patron += fila + '\\n';\n    }\n    \n    return patron;\n}\n\n// Prova\nlet numFiles = parseInt(prompt(\"Quantes files vols al triangle?\"));\nlet triangle = generarTriangle(numFiles);\nconsole.log(triangle);\n\n// Patró rectangle simple:\nfunction generarRectangle(files, columnes) {\n    let patron = '';\n    for (let i = 0; i < files; i++) {\n        for (let j = 0; j < columnes; j++) {\n            patron += '* ';\n        }\n        patron += '\\n';\n    }\n    return patron;\n}\n\n// Patró de triangle invers:\nfunction generarTriangleInvers(files) {\n    let patron = '';\n    for (let i = files; i >= 1; i--) {\n        let fila = ' '.repeat(files - i) + '*'.repeat(2 * i - 1);\n        patron += fila + '\\n';\n    }\n    return patron;\n}",
            "explicacio": "Utilitzem bucles niats per generar patrons geomètrics. La lògica matemàtica determina els espais i asteriscs."
        },
        {
            "num": 41,
            "titol": "Validador de número de telèfon",
            "enunciat": "Crea una funció que validi si un número de telèfon espanyol té el format correcte (9 dígits començant per 6, 7, 8 o 9).",
            "solucio": "// Solució Exercici 41\nfunction validarTelefon(telefon) {\n    // Eliminem espais, guions i parèntesis\n    let telefonNet = telefon.replace(/[\\s\\-\\(\\)]/g, '');\n    \n    // Comprovem que només té dígits\n    if (!/^\\d+$/.test(telefonNet)) {\n        return false;\n    }\n    \n    // Comprovem la longitud\n    if (telefonNet.length !== 9) {\n        return false;\n    }\n    \n    // Comprovem que comença per 6, 7, 8 o 9\n    let primerDigit = telefonNet[0];\n    if (!['6', '7', '8', '9'].includes(primerDigit)) {\n        return false;\n    }\n    \n    return true;\n}\n\n// Prova\nlet telefon = prompt(\"Introdueix un número de telèfon:\");\nif (validarTelefon(telefon)) {\n    alert(`${telefon} és un número de telèfon vàlid!`);\n} else {\n    alert(`${telefon} no és un número de telèfon vàlid.`);\n}\n\n// Versió amb expressió regular més compacta:\nfunction validarTelefonRegex(telefon) {\n    let telefonNet = telefon.replace(/[\\s\\-\\(\\)]/g, '');\n    return /^[6-9]\\d{8}$/.test(telefonNet);\n}\n\n// Exemples de telèfons vàlids:\nconsole.log(validarTelefon(\"666123456\")); // true\nconsole.log(validarTelefon(\"123456789\")); // false\nconsole.log(validarTelefon(\"66 612 34 56\")); // true",
            "explicacio": "Validem telèfons eliminant format i comprovant longitud i primer dígit segons les regles espanyoles."
        },
        {
            "num": 42,
            "titol": "Calculadora de mitjana i mediana",
            "enunciat": "Escriu funcions per calcular la mitjana aritmètica i la mediana d'un array de números.",
            "solucio": "// Solució Exercici 42\nfunction calcularMitjana(numeros) {\n    if (numeros.length === 0) {\n        return 0;\n    }\n    \n    let suma = numeros.reduce((total, num) => total + num, 0);\n    return suma / numeros.length;\n}\n\nfunction calcularMediana(numeros) {\n    if (numeros.length === 0) {\n        return 0;\n    }\n    \n    // Ordenem l'array\n    let numerosOrdenats = [...numeros].sort((a, b) => a - b);\n    let longitud = numerosOrdenats.length;\n    \n    if (longitud % 2 === 0) {\n        // Si la longitud és parell, la mediana és la mitjana dels dos valors centrals\n        let index1 = longitud / 2 - 1;\n        let index2 = longitud / 2;\n        return (numerosOrdenats[index1] + numerosOrdenats[index2]) / 2;\n    } else {\n        // Si la longitud és senar, la mediana és el valor central\n        let indexCentral = Math.floor(longitud / 2);\n        return numerosOrdenats[indexCentral];\n    }\n}\n\n// Prova\nlet numerosText = prompt(\"Introdueix números separats per comes:\");\nlet numeros = numerosText.split(',').map(Number).filter(n => !isNaN(n));\n\nlet mitjana = calcularMitjana(numeros);\nlet mediana = calcularMediana(numeros);\n\nalert(`Números: ${numeros.join(', ')}\\nMitjana: ${mitjana.toFixed(2)}\\nMediana: ${mediana}`);\n\n// Funció per calcular moda (valor més freqüent):\nfunction calcularModa(numeros) {\n    let frequencia = {};\n    let maxFreq = 0;\n    let moda = [];\n    \n    // Comptem frequències\n    numeros.forEach(num => {\n        frequencia[num] = (frequencia[num] || 0) + 1;\n        if (frequencia[num] > maxFreq) {\n            maxFreq = frequencia[num];\n        }\n    });\n    \n    // Trobem tots els valors amb màxima freqüència\n    for (let num in frequencia) {\n        if (frequencia[num] === maxFreq) {\n            moda.push(Number(num));\n        }\n    }\n    \n    return moda;\n}",
            "explicacio": "La mitjana és la suma dividida pel nombre d'elements. La mediana és el valor central quan els números estan ordenats."
        },
        {
            "num": 43,
            "titol": "Joc de pedra, paper, tisora",
            "enunciat": "Implementa el joc clàssic de pedra, paper, tisora contra l'ordinador.",
            "solucio": "// Solució Exercici 43\nfunction jocPedraPaperTisora() {\n    let opcions = ['pedra', 'paper', 'tisora'];\n    let puntuacioUsuari = 0;\n    let puntuacioOrdinador = 0;\n    let rondes = 0;\n    \n    function jugarRonda() {\n        let eleccioUsuari = prompt(\"Escull: pedra, paper o tisora (o 'sortir' per acabar):\").toLowerCase();\n        \n        if (eleccioUsuari === 'sortir') {\n            mostrarResultatFinal();\n            return false;\n        }\n        \n        if (!opcions.includes(eleccioUsuari)) {\n            alert(\"Opció no vàlida. Tria pedra, paper o tisora.\");\n            return true;\n        }\n        \n        let eleccioOrdinador = opcions[Math.floor(Math.random() * 3)];\n        \n        alert(`Tu: ${eleccioUsuari}\\nOrdinador: ${eleccioOrdinador}`);\n        \n        let resultat = determinarGuanyador(eleccioUsuari, eleccioOrdinador);\n        \n        if (resultat === 'usuari') {\n            puntuacioUsuari++;\n            alert(\"Has guanyat aquesta ronda!\");\n        } else if (resultat === 'ordinador') {\n            puntuacioOrdinador++;\n            alert(\"L'ordinador ha guanyat aquesta ronda!\");\n        } else {\n            alert(\"Empat!\");\n        }\n        \n        rondes++;\n        alert(`Puntuació:\\nTu: ${puntuacioUsuari}\\nOrdinador: ${puntuacioOrdinador}`);\n        \n        return true;\n    }\n    \n    function determinarGuanyador(usuari, ordinador) {\n        if (usuari === ordinador) {\n            return 'empat';\n        }\n        \n        if (\n            (usuari === 'pedra' && ordinador === 'tisora') ||\n            (usuari === 'paper' && ordinador === 'pedra') ||\n            (usuari === 'tisora' && ordinador === 'paper')\n        ) {\n            return 'usuari';\n        } else {\n            return 'ordinador';\n        }\n    }\n    \n    function mostrarResultatFinal() {\n        let missatge = `Joc acabat!\\nRondes jugades: ${rondes}\\nTu: ${puntuacioUsuari}\\nOrdinador: ${puntuacioOrdinador}\\n\\n`;\n        \n        if (puntuacioUsuari > puntuacioOrdinador) {\n            missatge += \"Felicitats! Has guanyat el joc!\";\n        } else if (puntuacioOrdinador > puntuacioUsuari) {\n            missatge += \"L'ordinador ha guanyat el joc. Més sort la propera vegada!\";\n        } else {\n            missatge += \"Empat global! Bon joc!\";\n        }\n        \n        alert(missatge);\n    }\n    \n    alert(\"Benvingut al joc de Pedra, Paper, Tisora!\");\n    \n    while (jugarRonda()) {\n        // El bucle continua fins que l'usuari esculli sortir\n    }\n}\n\njocPedraPaperTisora();",
            "explicacio": "Aquest joc implementa la lògica clàssica amb puntuació, múltiples rondes i validació d'entrada."
        },
        {
            "num": 44,
            "titol": "Comptador de paraules úniques",
            "enunciat": "Escriu una funció que compti quantes paraules úniques (sense repeticions) hi ha en un text.",
            "solucio": "// Solució Exercici 44\nfunction comptarParaulesUniques(text) {\n    // Convertim a minúscules i eliminem signes de puntuació\n    let textNet = text.toLowerCase().replace(/[^\\w\\s]/g, '');\n    \n    // Dividim en paraules i filtrem buides\n    let paraules = textNet.split(/\\s+/).filter(paraula => paraula.length > 0);\n    \n    // Utilitzem Set per eliminar duplicats\n    let paraulesUniques = new Set(paraules);\n    \n    return {\n        totalParaules: paraules.length,\n        paraulesUniques: paraulesUniques.size,\n        llistaUniques: Array.from(paraulesUniques)\n    };\n}\n\n// Prova\nlet text = prompt(\"Introdueix un text:\");\nlet resultat = comptarParaulesUniques(text);\n\nalert(`Paraules totals: ${resultat.totalParaules}\\nParaules úniques: ${resultat.paraulesUniques}`);\n\nconsole.log(\"Llista de paraules úniques:\", resultat.llistaUniques);\n\n// Alternativa amb objecte per comptar freqüències:\nfunction comptarFrequenciaParaules(text) {\n    let textNet = text.toLowerCase().replace(/[^\\w\\s]/g, '');\n    let paraules = textNet.split(/\\s+/).filter(p => p.length > 0);\n    \n    let frequencia = {};\n    \n    paraules.forEach(paraula => {\n        frequencia[paraula] = (frequencia[paraula] || 0) + 1;\n    });\n    \n    return frequencia;\n}\n\n// Exemple d'ús de la funció de freqüència:\nlet frequencies = comptarFrequenciaParaules(text);\nconsole.log(\"Freqüència de paraules:\", frequencies);",
            "explicacio": "Utilitzem Set per eliminar duplicats automàticament i obtenir paraules úniques eficientment."
        },
        {
            "num": 45,
            "titol": "Convertidor de números romans",
            "enunciat": "Crea una funció que converteixi números enters (1-3999) a numeració romana.",
            "solucio": "// Solució Exercici 45\nfunction convertirANumerosRomans(num) {\n    if (num <= 0 || num >= 4000) {\n        return \"Número fora del rang (1-3999)\";\n    }\n    \n    let valors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];\n    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];\n    \n    let resultat = '';\n    \n    for (let i = 0; i < valors.length; i++) {\n        while (num >= valors[i]) {\n            resultat += romans[i];\n            num -= valors[i];\n        }\n    }\n    \n    return resultat;\n}\n\n// Prova\nlet numero = parseInt(prompt(\"Introdueix un número (1-3999):\"));\n\nif (isNaN(numero)) {\n    alert(\"Si us plau, introdueix un número vàlid.\");\n} else {\n    let numeroRoma = convertirANumerosRomans(numero);\n    alert(`${numero} en números romans és: ${numeroRoma}`);\n}\n\n// Funció inversa per convertir de romans a enters:\nfunction convertirDeNumerosRomans(roman) {\n    let valors = {\n        'I': 1, 'V': 5, 'X': 10, 'L': 50,\n        'C': 100, 'D': 500, 'M': 1000\n    };\n    \n    let resultat = 0;\n    \n    for (let i = 0; i < roman.length; i++) {\n        let valorActual = valors[roman[i]];\n        let valorSeguent = valors[roman[i + 1]];\n        \n        if (valorSeguent && valorActual < valorSeguent) {\n            resultat -= valorActual;\n        } else {\n            resultat += valorActual;\n        }\n    }\n    \n    return resultat;\n}\n\n// Exemples:\nconsole.log(\"1984 =\", convertirANumerosRomans(1984)); // MCMLXXXIV\nconsole.log(\"MCMLXXXIV =\", convertirDeNumerosRomans(\"MCMLXXXIV\")); // 1984",
            "explicacio": "Els números romans utilitzen un sistema subtractiu. Recorrem de major a menor valor, restant quan és necessari."
        },
        {
            "num": 46,
            "titol": "Analizador de text",
            "enunciat": "Crea un programa complet que analitzi un text i mostri estadístiques: paraules, caràcters, frases, paraula més llarga, etc.",
            "solucio": "// Solució Exercici 46\nfunction analitzarText(text) {\n    if (!text || text.trim().length === 0) {\n        return \"Text buit\";\n    }\n    \n    // Estadístiques bàsiques\n    let caractersTotals = text.length;\n    let caractersSenseEspais = text.replace(/\\s/g, '').length;\n    \n    // Paraules\n    let paraules = text.toLowerCase()\n        .replace(/[^\\w\\s]/g, '')\n        .split(/\\s+/)\n        .filter(p => p.length > 0);\n    \n    // Frases (dividides per . ! ?)\n    let frases = text.split(/[.!?]+/)\n        .map(f => f.trim())\n        .filter(f => f.length > 0);\n    \n    // Paraula més llarga\n    let paraulaMesLlarga = paraules.reduce((max, paraula) => \n        paraula.length > max.length ? paraula : max, '');\n    \n    // Paraula més freqüent\n    let frequenciaParaules = {};\n    paraules.forEach(paraula => {\n        frequenciaParaules[paraula] = (frequenciaParaules[paraula] || 0) + 1;\n    });\n    \n    let paraulaMesFreqüent = '';\n    let maxFrequencia = 0;\n    for (let paraula in frequenciaParaules) {\n        if (frequenciaParaules[paraula] > maxFrequencia) {\n            maxFrequencia = frequenciaParaules[paraula];\n            paraulaMesFreqüent = paraula;\n        }\n    }\n    \n    // Mitjana de paraules per frase\n    let mitjanaParaulesPerFrase = frases.length > 0 ? \n        (paraules.length / frases.length).toFixed(2) : 0;\n    \n    // Mitjana de caràcters per paraula\n    let mitjanaCaractersPerParaula = paraules.length > 0 ? \n        (caractersSenseEspais / paraules.length).toFixed(2) : 0;\n    \n    return {\n        caractersTotals,\n        caractersSenseEspais,\n        totalParaules: paraules.length,\n        paraulesUniques: new Set(paraules).size,\n        totalFrases: frases.length,\n        paraulaMesLlarga: `\"${paraulaMesLlarga}\" (${paraulaMesLlarga.length} caràcters)`,\n        paraulaMesFreqüent: `\"${paraulaMesFreqüent}\" (${maxFrequencia} vegades)`,\n        mitjanaParaulesPerFrase,\n        mitjanaCaractersPerParaula\n    };\n}\n\n// Prova\nlet textUsuari = prompt(\"Introdueix un text per analitzar:\");\nlet analisi = analitzarText(textUsuari);\n\nif (typeof analisi === 'string') {\n    alert(analisi);\n} else {\n    let informe = `ANÀLISI DE TEXT:\\n\\n` +\n        `Caràcters totals: ${analisi.caractersTotals}\\n` +\n        `Caràcters (sense espais): ${analisi.caractersSenseEspais}\\n` +\n        `Total paraules: ${analisi.totalParaules}\\n` +\n        `Paraules úniques: ${analisi.paraulesUniques}\\n` +\n        `Total frases: ${analisi.totalFrases}\\n` +\n        `Paraula més llarga: ${analisi.paraulaMesLlarga}\\n` +\n        `Paraula més freqüent: ${analisi.paraulaMesFreqüent}\\n` +\n        `Mitjana paraules/frase: ${analisi.mitjanaParaulesPerFrase}\\n` +\n        `Mitjana caràcters/paraula: ${analisi.mitjanaCaractersPerParaula}`;\n    \n    alert(informe);\n}",
            "explicacio": "Aquest analitzador combina múltiples tècniques: expressions regulars, objectes, Set, i càlculs estadístics per oferir una anàlisi completa."
        },
        {
            "num": 47,
            "titol": "Sistema de notes d'estudiants",
            "enunciat": "Crea un sistema que gestioni notes d'estudiants: afegir notes, calcular mitjanes, determinar aprovats/suspesos.",
            "solucio": "// Solució Exercici 47\nlet sistemaNotas = {\n    estudiants: [],\n    \n    afegirEstudiant: function(nom) {\n        let estudiant = {\n            nom: nom,\n            notes: [],\n            mitjana: 0\n        };\n        this.estudiants.push(estudiant);\n        return `Estudiant ${nom} afegit correctament.`;\n    },\n    \n    afegirNota: function(nomEstudiant, nota) {\n        if (nota < 0 || nota > 10) {\n            return \"La nota ha d'estar entre 0 i 10.\";\n        }\n        \n        let estudiant = this.trobarEstudiant(nomEstudiant);\n        if (!estudiant) {\n            return `Estudiant ${nomEstudiant} no trobat.`;\n        }\n        \n        estudiant.notes.push(nota);\n        estudiant.mitjana = this.calcularMitjana(estudiant.notes);\n        return `Nota ${nota} afegida a ${nomEstudiant}.`;\n    },\n    \n    trobarEstudiant: function(nom) {\n        return this.estudiants.find(e => e.nom.toLowerCase() === nom.toLowerCase());\n    },\n    \n    calcularMitjana: function(notes) {\n        if (notes.length === 0) return 0;\n        let suma = notes.reduce((total, nota) => total + nota, 0);\n        return (suma / notes.length).toFixed(2);\n    },\n    \n    obtenirInformeEstudiant: function(nomEstudiant) {\n        let estudiant = this.trobarEstudiant(nomEstudiant);\n        if (!estudiant) {\n            return `Estudiant ${nomEstudiant} no trobat.`;\n        }\n        \n        let estat = estudiant.mitjana >= 5 ? \"APROVAT\" : \"SUSPÈS\";\n        \n        return `INFORME DE ${estudiant.nom.toUpperCase()}:\\n` +\n               `Notes: ${estudiant.notes.join(', ')}\\n` +\n               `Mitjana: ${estudiant.mitjana}\\n` +\n               `Estat: ${estat}`;\n    },\n    \n    llistarTots: function() {\n        if (this.estudiants.length === 0) {\n            return \"No hi ha estudiants registrats.\";\n        }\n        \n        let informe = \"LLISTA D'ESTUDIANTS:\\n\\n\";\n        this.estudiants.forEach((estudiant, index) => {\n            let estat = estudiant.mitjana >= 5 ? \"APROVAT\" : \"SUSPÈS\";\n            informe += `${index + 1}. ${estudiant.nom} - Mitjana: ${estudiant.mitjana} (${estat})\\n`;\n        });\n        \n        return informe;\n    },\n    \n    obtenirEstadistiques: function() {\n        if (this.estudiants.length === 0) {\n            return \"No hi ha dades per analitzar.\";\n        }\n        \n        let mitjanes = this.estudiants\n            .filter(e => e.notes.length > 0)\n            .map(e => parseFloat(e.mitjana));\n        \n        if (mitjanes.length === 0) {\n            return \"No hi ha notes per analitzar.\";\n        }\n        \n        let mitjanaGeneral = (mitjanes.reduce((sum, m) => sum + m, 0) / mitjanes.length).toFixed(2);\n        let aprovats = mitjanes.filter(m => m >= 5).length;\n        let suspesos = mitjanes.filter(m => m < 5).length;\n        let notaMaxima = Math.max(...mitjanes).toFixed(2);\n        let notaMinima = Math.min(...mitjanes).toFixed(2);\n        \n        return `ESTADÍSTIQUES GENERALS:\\n\\n` +\n               `Total estudiants: ${this.estudiants.length}\\n` +\n               `Mitjana general: ${mitjanaGeneral}\\n` +\n               `Aprovats: ${aprovats}\\n` +\n               `Suspesos: ${suspesos}\\n` +\n               `Nota més alta: ${notaMaxima}\\n` +\n               `Nota més baixa: ${notaMinima}`;\n    }\n};\n\n// Interfície d'usuari\nfunction menuPrincipal() {\n    while (true) {\n        let opcio = prompt(\n            \"SISTEMA DE NOTES\\n\\n\" +\n            \"1. Afegir estudiant\\n\" +\n            \"2. Afegir nota\\n\" +\n            \"3. Veure informe d'estudiant\\n\" +\n            \"4. Llistar tots els estudiants\\n\" +\n            \"5. Veure estadístiques\\n\" +\n            \"6. Sortir\\n\\n\" +\n            \"Escull una opció:\"\n        );\n        \n        switch (opcio) {\n            case '1':\n                let nom = prompt(\"Nom de l'estudiant:\");\n                if (nom) alert(sistemaNotas.afegirEstudiant(nom.trim()));\n                break;\n                \n            case '2':\n                let nomNota = prompt(\"Nom de l'estudiant:\");\n                let nota = parseFloat(prompt(\"Nota (0-10):\"));\n                if (nomNota && !isNaN(nota)) {\n                    alert(sistemaNotas.afegirNota(nomNota.trim(), nota));\n                }\n                break;\n                \n            case '3':\n                let nomInforme = prompt(\"Nom de l'estudiant:\");\n                if (nomInforme) alert(sistemaNotas.obtenirInformeEstudiant(nomInforme.trim()));\n                break;\n                \n            case '4':\n                alert(sistemaNotas.llistarTots());\n                break;\n                \n            case '5':\n                alert(sistemaNotas.obtenirEstadistiques());\n                break;\n                \n            case '6':\n                alert(\"Fins aviat!\");\n                return;\n                \n            default:\n                alert(\"Opció no vàlida.\");\n        }\n    }\n}\n\nmenuPrincipal();",
            "explicacio": "Aquest sistema utilitza un objecte amb mètodes per gestionar dades d'estudiants, incloent cerca, càlculs i informes."
        },
        {
            "num": 48,
            "titol": "Calendari simple",
            "enunciat": "Crea un programa que mostri el calendari d'un mes determinat (introduït per l'usuari).",
            "solucio": "// Solució Exercici 48\nfunction mostrarCalendari(any, mes) {\n    // Validació\n    if (any < 1 || mes < 1 || mes > 12) {\n        return \"Any o mes no vàlids.\";\n    }\n    \n    let nomsMesos = [\n        \"Gener\", \"Febrer\", \"Març\", \"Abril\", \"Maig\", \"Juny\",\n        \"Juliol\", \"Agost\", \"Setembre\", \"Octubre\", \"Novembre\", \"Desembre\"\n    ];\n    \n    let nomsDies = [\"Dl\", \"Dt\", \"Dc\", \"Dj\", \"Dv\", \"Ds\", \"Dg\"];\n    \n    // Primer dia del mes (0=diumenge, 1=dilluns, ...)\n    let primerDia = new Date(any, mes - 1, 1).getDay();\n    // Ajustem perquè dilluns sigui 0\n    primerDia = (primerDia + 6) % 7;\n    \n    // Dies del mes\n    let diesDelMes = new Date(any, mes, 0).getDate();\n    \n    // Crear calendari\n    let calendari = `\\n${nomsMesos[mes - 1]} ${any}\\n`;\n    calendari += \"=\".repeat(21) + \"\\n\";\n    calendari += nomsDies.join(\"  \") + \"\\n\";\n    calendari += \"-\".repeat(21) + \"\\n\";\n    \n    let diaActual = 1;\n    let calendario = \"\";\n    \n    // Primeres setmanes amb espais buits\n    for (let i = 0; i < primerDia; i++) {\n        calendario += \"   \";\n    }\n    \n    // Dies del mes\n    for (let dia = 1; dia <= diesDelMes; dia++) {\n        calendario += dia.toString().padStart(2, ' ') + \" \";\n        \n        // Salt de línia cada 7 dies\n        if ((primerDia + dia) % 7 === 0) {\n            calendario += \"\\n\";\n        }\n    }\n    \n    calendari += calendario;\n    \n    return calendari;\n}\n\n// Prova\nlet any = parseInt(prompt(\"Introdueix l'any:\"));\nlet mes = parseInt(prompt(\"Introdueix el mes (1-12):\"));\n\nif (isNaN(any) || isNaN(mes)) {\n    alert(\"Si us plau, introdueix números vàlids.\");\n} else {\n    let calendari = mostrarCalendari(any, mes);\n    alert(calendari);\n    console.log(calendari); // També es mostra a la consola per millor visualització\n}\n\n// Funció per mostrar la data actual\nfunction dataActual() {\n    let avui = new Date();\n    let opcions = { \n        year: 'numeric', \n        month: 'long', \n        day: 'numeric',\n        weekday: 'long'\n    };\n    \n    return avui.toLocaleDateString('ca-ES', opcions);\n}\n\nconsole.log(\"Data actual:\", dataActual());\n\n// Funció per calcular dies entre dues dates\nfunction diesEntreDates(data1, data2) {\n    let diferencia = Math.abs(data2 - data1);\n    return Math.ceil(diferencia / (1000 * 60 * 60 * 24));\n}",
            "explicacio": "Utilitzem l'objecte Date de JavaScript per calcular dies del mes i crear una representació visual del calendari."
        },
        {
            "num": 49,
            "titol": "Codificador/Descodificador Caesar",
            "enunciat": "Implementa el xifratge Caesar que desplaça cada lletra un número determinat de posicions en l'alfabet.",
            "solucio": "// Solució Exercici 49\nfunction xifratgeCaesar(text, desplaçament, desxifrar = false) {\n    if (desxifrar) {\n        desplaçament = -desplaçament;\n    }\n    \n    let resultat = '';\n    \n    for (let i = 0; i < text.length; i++) {\n        let caracter = text[i];\n        \n        if (caracter >= 'A' && caracter <= 'Z') {\n            // Majúscules\n            let codiBase = caracter.charCodeAt(0) - 65; // A=0, B=1, ...\n            let nouCodi = (codiBase + desplaçament + 26) % 26;\n            resultat += String.fromCharCode(nouCodi + 65);\n        } else if (caracter >= 'a' && caracter <= 'z') {\n            // Minúscules\n            let codiBase = caracter.charCodeAt(0) - 97; // a=0, b=1, ...\n            let nouCodi = (codiBase + desplaçament + 26) % 26;\n            resultat += String.fromCharCode(nouCodi + 97);\n        } else {\n            // No és una lletra, no es modifica\n            resultat += caracter;\n        }\n    }\n    \n    return resultat;\n}\n\n// Interfície d'usuari\nfunction menuCaesar() {\n    while (true) {\n        let opcio = prompt(\n            \"CODIFICADOR CAESAR\\n\\n\" +\n            \"1. Codificar text\\n\" +\n            \"2. Descodificar text\\n\" +\n            \"3. Provar tots els desplaçaments (força bruta)\\n\" +\n            \"4. Sortir\\n\\n\" +\n            \"Escull una opció:\"\n        );\n        \n        switch (opcio) {\n            case '1':\n                let textCodificar = prompt(\"Text a codificar:\");\n                let desplaçamentCod = parseInt(prompt(\"Desplaçament (1-25):\"));\n                \n                if (textCodificar && !isNaN(desplaçamentCod)) {\n                    let textCodificat = xifratgeCaesar(textCodificar, desplaçamentCod);\n                    alert(`Text codificat: ${textCodificat}`);\n                }\n                break;\n                \n            case '2':\n                let textDescodificar = prompt(\"Text a descodificar:\");\n                let desplaçamentDesc = parseInt(prompt(\"Desplaçament utilitzat (1-25):\"));\n                \n                if (textDescodificar && !isNaN(desplaçamentDesc)) {\n                    let textDescodificat = xifratgeCaesar(textDescodificar, desplaçamentDesc, true);\n                    alert(`Text descodificat: ${textDescodificat}`);\n                }\n                break;\n                \n            case '3':\n                let textForcaBruta = prompt(\"Text a descodificar (prova tots els desplaçaments):\");\n                \n                if (textForcaBruta) {\n                    let resultats = \"TOTS ELS POSSIBLES DESXIFRATGES:\\n\\n\";\n                    \n                    for (let i = 1; i <= 25; i++) {\n                        let prova = xifratgeCaesar(textForcaBruta, i, true);\n                        resultats += `Desplaçament ${i}: ${prova}\\n`;\n                    }\n                    \n                    alert(resultats);\n                    console.log(resultats); // També a la consola per millor visualització\n                }\n                break;\n                \n            case '4':\n                alert(\"Adéu!\");\n                return;\n                \n            default:\n                alert(\"Opció no vàlida.\");\n        }\n    }\n}\n\nmenuCaesar();\n\n// Exemples d'ús directe:\nconsole.log(\"\\nExemples:\");\nconsole.log('Codificar \"HOLA\" amb desplaçament 3:', xifratgeCaesar(\"HOLA\", 3));\nconsole.log('Descodificar \"KROD\" amb desplaçament 3:', xifratgeCaesar(\"KROD\", 3, true));",
            "explicacio": "El xifratge Caesar desplaça lletres per l'alfabet. Utilitzem aritmètica modular per gestionar el retorn al principi de l'alfabet."
        },
        {
            "num": 50,
            "titol": "Simulador de llançament de daus",
            "enunciat": "Crea un simulador que llanci múltiples daus i mostri estadístiques dels resultats obtinguts.",
            "solucio": "// Solució Exercici 50\nlet simuladorDaus = {\n    resultats: [],\n    \n    llançarDau: function(cares = 6) {\n        return Math.floor(Math.random() * cares) + 1;\n    },\n    \n    llançarMultiplesDaus: function(nombreDaus, caresDau, nombreLlançaments) {\n        this.resultats = [];\n        \n        for (let i = 0; i < nombreLlançaments; i++) {\n            let sumaLlançament = 0;\n            let detallLlançament = [];\n            \n            for (let j = 0; j < nombreDaus; j++) {\n                let resultat = this.llançarDau(caresDau);\n                detallLlançament.push(resultat);\n                sumaLlançament += resultat;\n            }\n            \n            this.resultats.push({\n                llançament: i + 1,\n                daus: detallLlançament,\n                suma: sumaLlançament\n            });\n        }\n    },\n    \n    obtenirEstadistiques: function() {\n        if (this.resultats.length === 0) {\n            return \"No hi ha resultats per analitzar.\";\n        }\n        \n        let sumes = this.resultats.map(r => r.suma);\n        let sumaTotal = sumes.reduce((total, suma) => total + suma, 0);\n        let mitjana = (sumaTotal / sumes.length).toFixed(2);\n        let sumaMaxima = Math.max(...sumes);\n        let sumaMinima = Math.min(...sumes);\n        \n        // Freqüència de cada suma\n        let frequencia = {};\n        sumes.forEach(suma => {\n            frequencia[suma] = (frequencia[suma] || 0) + 1;\n        });\n        \n        // Suma més freqüent\n        let sumaMesFreqüent = Object.keys(frequencia)\n            .reduce((a, b) => frequencia[a] > frequencia[b] ? a : b);\n        \n        // Comptar cada valor individual dels daus\n        let valorsIndividuals = [];\n        this.resultats.forEach(r => {\n            valorsIndividuals.push(...r.daus);\n        });\n        \n        let frequenciaValors = {};\n        valorsIndividuals.forEach(valor => {\n            frequenciaValors[valor] = (frequenciaValors[valor] || 0) + 1;\n        });\n        \n        return {\n            totalLlançaments: this.resultats.length,\n            mitjana: mitjana,\n            sumaMaxima: sumaMaxima,\n            sumaMinima: sumaMinima,\n            sumaMesFreqüent: sumaMesFreqüent,\n            frequenciaSumes: frequencia,\n            frequenciaValors: frequenciaValors\n        };\n    },\n    \n    mostrarResultats: function(mostrarDetall = false) {\n        if (this.resultats.length === 0) {\n            return \"No hi ha resultats per mostrar.\";\n        }\n        \n        let informe = `RESULTATS DE ${this.resultats.length} LLANÇAMENTS:\\n\\n`;\n        \n        if (mostrarDetall) {\n            this.resultats.slice(0, 10).forEach(r => {\n                informe += `Llançament ${r.llançament}: [${r.daus.join(', ')}] = ${r.suma}\\n`;\n            });\n            \n            if (this.resultats.length > 10) {\n                informe += `... i ${this.resultats.length - 10} més\\n`;\n            }\n            informe += \"\\n\";\n        }\n        \n        let estadistiques = this.obtenirEstadistiques();\n        \n        informe += `ESTADÍSTIQUES:\\n`;\n        informe += `Mitjana: ${estadistiques.mitjana}\\n`;\n        informe += `Suma màxima: ${estadistiques.sumaMaxima}\\n`;\n        informe += `Suma mínima: ${estadistiques.sumaMinima}\\n`;\n        informe += `Suma més freqüent: ${estadistiques.sumaMesFreqüent}\\n\\n`;\n        \n        informe += \"FREQÜÈNCIA DE SUMES:\\n\";\n        for (let suma in estadistiques.frequenciaSumes) {\n            let percentatge = (estadistiques.frequenciaSumes[suma] * 100 / this.resultats.length).toFixed(1);\n            informe += `${suma}: ${estadistiques.frequenciaSumes[suma]} vegades (${percentatge}%)\\n`;\n        }\n        \n        return informe;\n    }\n};\n\n// Interfície d'usuari\nfunction menuSimulador() {\n    while (true) {\n        let opcio = prompt(\n            \"SIMULADOR DE DAUS\\n\\n\" +\n            \"1. Llançar daus\\n\" +\n            \"2. Veure resultats\\n\" +\n            \"3. Veure resultats detallats\\n\" +\n            \"4. Llançament ràpid (2 daus, 100 vegades)\\n\" +\n            \"5. Sortir\\n\\n\" +\n            \"Escull una opció:\"\n        );\n        \n        switch (opcio) {\n            case '1':\n                let nombreDaus = parseInt(prompt(\"Nombre de daus:\")) || 2;\n                let caresDau = parseInt(prompt(\"Cares per dau:\")) || 6;\n                let nombreLlançaments = parseInt(prompt(\"Nombre de llançaments:\")) || 10;\n                \n                simuladorDaus.llançarMultiplesDaus(nombreDaus, caresDau, nombreLlançaments);\n                alert(`Simulació completada: ${nombreDaus} daus de ${caresDau} cares, ${nombreLlançaments} llançaments.`);\n                break;\n                \n            case '2':\n                alert(simuladorDaus.mostrarResultats(false));\n                break;\n                \n            case '3':\n                alert(simuladorDaus.mostrarResultats(true));\n                console.log(simuladorDaus.mostrarResultats(true));\n                break;\n                \n            case '4':\n                simuladorDaus.llançarMultiplesDaus(2, 6, 100);\n                alert(\"Llançament ràpid completat!\\n\\n\" + simuladorDaus.mostrarResultats(false));\n                break;\n                \n            case '5':\n                alert(\"Fins aviat!\");\n                return;\n                \n            default:\n                alert(\"Opció no vàlida.\");\n        }\n    }\n}\n\nmenuSimulador();",
            "explicacio": "Aquest simulador combina generació de números aleatoris, anàlisi estadístic i presentació de dades per estudiar la probabilitat en daus."
        },
        {
            "num": 51,
            "titol": "Conversió de temperatura",
            "enunciat": "Crea una funció que accepti una temperatura en Celsius i la retorni en Fahrenheit. La fórmula és: F=C*(9/5)+32",
            "solucio": "// Solució Exercici 51\nfunction celsiusToFahrenheit(c) {\n" +
                "return c \\* (9 / 5) + 32;\n" +
                "}\n" +
                "\n" +
                "\n" +
                "console.log(celsiusToFahrenheit(25)); // 77",
            "explicacio": "Sense més explicació."
        }

    ]
};

// Variables globals
let allSolutionsVisible = false;

// Funció per generar el HTML d'un exercici
function createExerciseHTML(exercici) {
    return `
        <article class="exercise" id="exercise-${exercici.num}">
            <div class="exercise-header">
                <div class="exercise-title">
                    <span class="exercise-number">${exercici.num}</span>
                    <span class="exercise-name">${exercici.titol}</span>
                </div>
                <div class="solution-toggle">
                    <button class="btn-solution" onclick="toggleSolution(${exercici.num})">
                        <span class="btn-solution-text">Veure Solució</span>
                        <span class="btn-solution-icon">▼</span>
                    </button>
                </div>
            </div>
            <div class="exercise-statement">
                ${exercici.enunciat}
            </div>
            <div class="solution" id="solution-${exercici.num}">
                <div class="solution-header">
                    <span class="solution-label">Solució</span>
                </div>
                <div class="solution-code">${exercici.solucio}</div>
                <div class="solution-explanation">
                    ${exercici.explicacio}
                </div>
            </div>
        </article>
    `;
}

// Funció per mostrar/amagar una solució individual
function toggleSolution(exerciciNum) {
    const solution = document.getElementById(`solution-${exerciciNum}`);
    const button = document.querySelector(`#exercise-${exerciciNum} .btn-solution`);
    const buttonText = button.querySelector('.btn-solution-text');

    if (solution.classList.contains('show')) {
        // Amagar solució
        solution.classList.remove('show');
        buttonText.textContent = 'Veure Solució';
        button.classList.remove('active');
    } else {
        // Mostrar solució
        solution.classList.add('show');
        buttonText.textContent = 'Amagar Solució';
        button.classList.add('active');
    }
}

// Funció per mostrar/amagar totes les solucions
function toggleAllSolutions() {
    const toggleAllBtn = document.getElementById('toggleAllBtn');
    const solutions = document.querySelectorAll('.solution');
    const buttons = document.querySelectorAll('.btn-solution');

    if (allSolutionsVisible) {
        // Amagar totes les solucions
        solutions.forEach(solution => {
            solution.classList.remove('show');
        });
        buttons.forEach(button => {
            button.classList.remove('active');
            button.querySelector('.btn-solution-text').textContent = 'Veure Solució';
        });
        toggleAllBtn.textContent = 'Mostrar totes les solucions';
        allSolutionsVisible = false;
    } else {
        // Mostrar totes les solucions
        solutions.forEach(solution => {
            solution.classList.add('show');
        });
        buttons.forEach(button => {
            button.classList.add('active');
            button.querySelector('.btn-solution-text').textContent = 'Amagar Solució';
        });
        toggleAllBtn.textContent = 'Amagar totes les solucions';
        allSolutionsVisible = true;
    }
}

// Funció per inicialitzar la pàgina
function initializePage() {
    const exercisesList = document.querySelector('.exercises-list');
    const toggleAllBtn = document.getElementById('toggleAllBtn');

    // Generar HTML per a tots els exercicis
    exercisesList.innerHTML = exercicisData.exercicis
        .map(exercici => createExerciseHTML(exercici))
        .join('');

    // Afegir event listener al botó de mostrar/amagar totes les solucions
    toggleAllBtn.addEventListener('click', toggleAllSolutions);
}

// Inicialitzar la pàgina quan es carregui el DOM
document.addEventListener('DOMContentLoaded', initializePage);