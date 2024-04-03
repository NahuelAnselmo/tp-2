/*
Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/


// Cadena de texto
const cadena = "hola que tal";

// Inicializar una cadena para almacenar el resultado
let resultado = "";

// Recorrer la cadena de texto con un bucle for
for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena.at(i);
    resultado += `${caracter}-`;

}

// Mostrar el resultado
alert(resultado);