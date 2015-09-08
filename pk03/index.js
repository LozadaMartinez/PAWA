//creando dos function expressions
var funcionsaludar = function(name){
	console.log("Hola %s",name);
};
var funcionsaludar = function(name){
	console.log("Adios %s",name);
};
//creando una declaracion de funcion
// handler -> manejador
function mensaje(name, handler){
	//?
	name=name.toUpperCase();
	handler(name);
};
//invocar la funcion mensaje
mensaje("itgam",funcionsaludar);