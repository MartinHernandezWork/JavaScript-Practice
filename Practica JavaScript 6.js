//Valores Booleanos.

//true and false.

function welcomeToBooleans() {
	return true;
}

//console.log(welcomeToBooleans());

//If statement

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, That was true";
	}
	return "No, That was false";

}

//console.log(trueOrFalse(true));

//comparacion con un operador de igualdad.

// = --> asigna un valor
// == --> compara 2 valores, si uno es un numero y el otro una string, lo convierte. ej: 3 == "3" --> true.
// === --> compara estrictamente 2 valores, si uno es un numero y el otro una string, da falso. ej: 5 === "5" --> false.

// != --> compara si 2 valores no son iguales, si uno es un numero y el otro una string, lo convierte.
// !== -->  compara estrictamente si 2 valores no son iguales, no convierte la string a numero.

function testEqual(val) {
	if (val === 12) {
		return "Equal";
	}
	return "Not Equal";
}// = --> asigna un valor

console.log(testEqual("12"));