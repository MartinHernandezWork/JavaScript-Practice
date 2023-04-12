//else 

function testElse (x){
	if (x > 5) {
		return "x es mayor a 5";
	} else if (x == 5) {
		return "x es igual a 5";
	} else {
		return "x es menor a 5";
	};
}

console.log(testElse(0));

console.log(testElse(5));

console.log(testElse(10));
 
//switch        es otra manera de utilisar el if else y analizar caso por caso de un imput.
//default       es el valor por defecto que se le da al no encontrar ninguno de los casos anteriores.
//break         le ordena detenerse y dejar de analizar todos los casos una vez se encuntra el valor buscado.

function testSwitch (x){
	var respuesta = "";
	switch (x){
	
	case 1:
		respuesta = "el valor de x es 1";
		break;

	case 2:
		respuesta = "el valor de x es 2";
		break;


	case 3:
		respuesta = "el valor de x es 3";
		break;

	default: 
		respuesta = "el valor no es valido";
		break;
	}

	return respuesta;
}

console.log(testSwitch(2));

//EJ 2:

function testSwitchVarios (x){
	var respuesta = ""; 
	switch (x){
	
	case 1:
	case 2:
	case 3:
		respuesta = "low";
		break;

	case 4:
	case 5:
	case 6:
		respuesta = "medium";
		break;

	case 7:
	case 8:
	case 9:
		respuesta = "high";
		break;

	case 0 :
		respuesta = "too low";
		break;

	default: 
		respuesta = "not a valid imput";
		break;
	}

	return respuesta;
}

console.log(testSwitchVarios(0));