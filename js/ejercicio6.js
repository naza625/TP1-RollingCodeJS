const numero1 = parseInt(prompt("Ingresa el primer número:"));
const numero2 = parseInt(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
    document.write("El " + numero1 + " es el número más grande");
} else {
    document.write("El " + numero2 + " es el número más grande");
}