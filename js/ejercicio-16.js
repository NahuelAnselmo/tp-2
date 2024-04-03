/*16- Realiza un script que pida una cadena de texto y 
la devuelva al revés. Es decir, si tecleo “hola que 
tal” deberá mostrar “lat euq aloh”. */

// Solicitar una cadena de texto al usuario
const texto = prompt("Por favor, introduce una cadena de texto:");

const textoInvertido = "";

for (const i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
}

document.write("La cadena de texto invertida es: " + textoInvertido);
