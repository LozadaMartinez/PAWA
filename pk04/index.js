//closures
function retornaFuncionSaludo(){
	var mensaje = "Hola a todos";
	var funcionSaludo = function(){
		console.log(mensaje);
	}
	return funcionSaludo;
}
var saludando = retornaFuncionSaludo();
// ejecutando funcion saludando
saludando();''