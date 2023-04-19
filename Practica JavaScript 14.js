//Busqueda de perfil (ejercicio).

var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Laine",
		"number": "04234257",
		"likes": ["Pizza", "Coding", "Brownie Points"]
	},
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "099455239",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	},
	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "099466239",
		"likes": ["Intriguing Cases", "Violin"]
	},
	{
		"firstName": "Kristian",
		"lastName": "Vos",
		"number": "26576239",
		"likes": ["JavaScript", "Gaming", "Foxes"]
	}
];

function lookUpProfile(name, prop){

	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName === name) {
			return contacts[i][prop] || "No such property";
		}
	}
	return "No such contact";
}

var data = lookUpProfile("Sherlock", "likes");

//console.log(data);

/*generar decimales aleatorios con Math.random();
(entre 0 y 1, pero no puede ser 1. */

function randomDecimal(){

	return Math.random();

}

//console.log(randomDecimal());

/*generar numeros aleatorios.

Nota: Math.floor redondea los numeros para abajo.
Por lo tanto usando Math.random(); el numero multiplicado
nos da un valor menor al numero mas grande entre 0 y x.
por ejemplo si es 11, nos da entre 0 y 10. */

function randomNumeberBetween0and10(){

	return Math.floor(Math.random() * 11);

}

//console.log(randomNumeberBetween0and10());

//generar numeros aleatorios en un rango de numeros.

function randomRange(myMin, myMax) {

	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

var myRandom = randomRange(5, 15);

//console.log(myRandom);

//Funcion parseInt (convierte una string en un integer)

function convertToInteger(str){
	return parseInt(str);
}

//console.log(convertToInteger("56"));

//usar parseInt con una base. (2 = binario, 10 = base decimal,etc).

function convertBaseToInteger(str){
	return parseInt(str, 2);
}

//console.log(convertBaseToInteger("10011"));

/*usar el condicional Ternary Operator (?).
Nota: condicion ? si es verdadero hacer esto : si es falso hacer esto*/

function checkEqual(a,b){

	return a === b ? true : false;

}

//console.log(checkEqual(2,2));

//usar multiples Ternary Operators.

function checkSing(num){

	return num > 0 ? "positivo" : num < 0 ? "negativo" : "cero";

}

//console.log(checkSing(-5));