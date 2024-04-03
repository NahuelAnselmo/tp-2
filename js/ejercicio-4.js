/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let suma = 0;
do {
  let entrada = prompt("Ingresa un numero");

  if (entrada === null || entrada === "") {
    break;
  }
  let numero = parseFloat(entrada);
  if (isNaN(numero)) {
    alert("Lo que ingresaste no es un numero");
  } else {
    suma += numero;
  }
} while (true);

alert(`La suma total de los numeros ingresados es: ${suma}`);