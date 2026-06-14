const frase = prompt("Ingresa una palabra de hasta 4 letras (ej: Hola):").toLowerCase();

const letra1 = frase.charAt(0);
if (letra1 === "a" || letra1 === "e" || letra1 === "i" || letra1 === "o" || letra1 === "u") {
    document.write(letra1);
}

const letra2 = frase.charAt(1);
if (letra2 === "a" || letra2 === "e" || letra2 === "i" || letra2 === "o" || letra2 === "u") {
    document.write(letra2);
}

const letra3 = frase.charAt(2);
if (letra3 === "a" || letra3 === "e" || letra3 === "i" || letra3 === "o" || letra3 === "u") {
    document.write(letra3);
}

const letra4 = frase.charAt(3);
if (letra4 === "a" || letra4 === "e" || letra4 === "i" || letra4 === "o" || letra4 === "u") {
    document.write(letra4);
}