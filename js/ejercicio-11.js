//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let maxEdad = 0;
let nombreMayor = "";

for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese el nombre " + (i + 1) + ":");
    if (nombre === null) {
        alert("Se ha cancelado el ingreso de los datos.");
        break;
    }
    
    let edad = parseInt(prompt("Ingrese la edad de " + nombre + ":"));
    if (isNaN(edad) || edad < 1 || edad > 100) {
        alert("La edad ingresada no es válida. Debe ser un número entre 1 y 100.");
        i--;
        continue;
    }

    if (edad > maxEdad) {
        maxEdad = edad;
        nombreMayor = nombre;
    }
}

if (nombreMayor !== "") {
    alert("El mayor es: " + nombreMayor);
}
