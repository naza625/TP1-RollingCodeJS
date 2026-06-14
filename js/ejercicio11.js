const numero = parseInt(prompt("Ingresa un número:"));
let resultado = "";

if (numero % 2 === 0) {
    resultado = resultado + " por 2,";
}
if (numero % 3 === 0) {
    resultado = resultado + " por 3,";
}
if (numero % 5 === 0) {
    resultado = resultado + " por 5,";
}
if (numero % 7 === 0) {
    resultado = resultado + " por 7,";
}

if (resultado !== "") {
    document.write("El " + numero + " es divisible" + resultado);
} else {
    document.write("El " + numero + " no es divisible por ninguno de los cuatro.");
}