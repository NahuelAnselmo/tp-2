/* 6- Realiza un script que escriba una pirámide del 1
 al 30 de la siguiente forma :*/

 document.write("PIRÁMIDE<br />");

for (let i = 1; i <= 30; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write("<br />");
} 