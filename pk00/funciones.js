//Este codigo ejecuta sin problemas
//debido a que la function declaration
//es cargada antesde que cualquier
//otro codigo cargue, por lo tanto
//carga antes de que saluda sea invocada
//por primera vez
saluda("Ivan");
function saluda(name){
	console.log("Hola "+ name);
}
//Este codigo marca error debido a que solo 
//podemos usar la function expression despide
//despues de haberla creado 
despide("Salvador");
var despide = function(name){
	console.log("Adios"+name);
}