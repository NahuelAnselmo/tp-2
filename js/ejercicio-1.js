/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */

const edad = Number(prompt("ingrese la edad"));

if(isNaN(edad)){
    alert("no es un numero");
} else {
    if(edad <= 0) {
        alert("no puede ser negativo");
    } else if(edad > 100) {
        alert("no puede ser mayor a 100");
    } else if(edad >= 18){
        alert("ya puede conducir");
    } else{
        alert("no puede conducir");
    }
}