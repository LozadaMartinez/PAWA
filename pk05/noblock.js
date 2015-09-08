// Blocking Model
var fs = require('fs');
var manejador=function(err, data){
	if(err){
		console.log('Error al leer arhivo');
		return;
	}
	console.log(data);
};
//Lectura asíncrona de archivos 
//1. Ruta del archivo a leer.
//2. Codificación.
//3. Qué función quieres que invoque a la hora de
// terminar la lectura del archivo.
fs.readFile('\hola.hmtl','utf-8',manejador);
//Finaliza con mensaje
console.log(">El programa ha finalizado...");