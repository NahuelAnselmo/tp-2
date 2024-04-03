/*17- Realiza un script que muestre la posición de la 
primera vocal de un texto introducido por teclado. */

let texto = prompt("Por favor, introduce un texto:");

let vocales = "aeiouAEIOU";

let posicionPrimeraVocal = -1;

for (let i = 0; i < texto.length; i++) {
    if (vocales.indexOf(texto[i]) !== -1) {
        posicionPrimeraVocal = i;
        break;
    }
}

if (posicionPrimeraVocal !== -1) {
    document.write("La primera vocal se encuentra en la posicion: " + (posicionPrimeraVocal + 1));
} else {
    document.write("No se encontraron vocales en el texto.");
}

