// devolver un booleano de una funcion.

function trueOrFalse(a,b) {

	if (a > b) {
		return true;
	} else {
		return false;
	}
}

//console.log(trueOrFalse (25,15));

//realmente no hace falta utilizar el "if" y el "else", ya que todos los operadores de comparación devuleven un booleano verdadero o falso.
//por ejemplo:

function trueOrFalseV2(a,b){
	
	return a > b;
}

//console.log(trueOrFalseV2(25,15));

//detener una funcion en cualquier momento utilizando "return".

function suma(a,b) {

	if (a < 0 || b < 0) {
		return "No se pueden utilizar numeros menores a 0";
	}

	return a + b;
}

console.log(suma(4,-2));