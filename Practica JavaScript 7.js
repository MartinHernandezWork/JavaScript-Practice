// Mayor, menor operadores

// >  mayor que
// >= mayor o igual que

// <  menor que
// <= menor o igual que

function mayorA100 (val){

  if (val > 100){
  	return "Mayor a 100";
  }
  if (val > 10){
  	return "Mayor a 10";
  }
  return "Menor a 10";
}

//console.log(mayorA100(10));

//comparar mas de una operacion con: Operador AND &&.

function testAND (val) {
	if (val <= 50 && val >= 25) {
		return "Si, esta entre 25 o 50";
	}
	return "No, esta fuera de 25 y 50";
}

//console.log(testAND(30));

//comparar dos operaciones con: Operador OR ||.

function testOR(val) {
	if (val < 10 || val > 20) {
		return "Esta afuera de 10 y 20";
	}
	return "Esta adentro de 10 y 20";
}

console.log(testOR(15));
