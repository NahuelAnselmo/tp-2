/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let cadena = prompt("Ingrese una frase");
cadena = cadena.trim().toLowerCase();
let sum = 0;
if (cadena !== "") {
    for (let i = 0; i < cadena.length; i++) {
        if (
            cadena[i] == "a" ||
            cadena[i] == "e" ||
            cadena[i] == "i" ||
            cadena[i] == "o" ||
            cadena[i] == "u" ||
            cadena[i] == "á" ||
            cadena[i] == "é" ||
            cadena[i] == "í" ||
            cadena[i] == "ó" ||
            cadena[i] == "ú" 
        ) {
            sum++;
        }    
    }
    if (sum === 1 ) {
        alert(`La frase tiene ${sum} vocal`);
    } else {
        alert(`La frase tiene ${sum} vocales`);
    }
}   else{
    alert('No se ingreso ninguna frase');
}