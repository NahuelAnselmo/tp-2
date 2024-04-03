/*7- Haz un script que escriba una pirámide inversa de
los números del 1 al número que indique el usuario (no
mayor de 50)  de la siguiente forma : (suponiendo que
indica 30). */

let numero = parseInt(prompt("Ingrese un numero entero no mayor a 50"));


if (isNaN(numero)) {
  alert("Lo que ingresaste no es un numero");
} else {
  if (numero <= 50) {
    document.write("PIRÁMIDE INVERSA<br />");
    for (let i = numero; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        document.write(i);
      }
      document.write("<br />");
    }
  } else {
    alert("El numero ingresado no corresponde a un rango valido");
  }
} 