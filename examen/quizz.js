// Declaracion de variables 
var palabra = process.argv[2];
var numeros = palabra.split(",");
var sumando = 0;

// Ciclo for para la suma de (n) valores
for (var i = 0; i < numeros.length; i++){
	if(numeros[i] != ","){
		var num = parseInt(numeros[i]);
// Operación de la suma de los valores introducidos
		sumando = (sumando + num);
	}
}
// Imprimendo resultado de los valores sumados
console.log(sumando);
 