//Modelo bloqueante Blocking Model
// de una lectura de archivos file read
// Loading
//file stream(flujo) module
var fs = require('fs');
//Reading the file
var content =
fs.readFileSync("\hola.html",'utf-8');
//Imprimimos Printing
console.log(content);
//Mensale final 
console.log('This program has finished its execution...')
 