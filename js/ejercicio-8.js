/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)  */

let numero = parseInt(prompt("Ingrese un numero entero no mayor a 50"));

if (isNaN(numero)) {
  alert("Lo que ingresaste no es un numero");
} else {
  if (numero <= 50) {
    document.write("PIRÁMIDE<br />");
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <= i; j++) {
        document.write(j);
      }
      document.write("<br />");
    }
  } else {
    alert("El numero ingresado no corresponde a un rango valido");
  }
}
 