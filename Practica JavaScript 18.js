//Crear Strings Usando Template Literals (`).

const person = {
	name: "Zodiac Hasbro",
	age: 56
};

//Template Literal con multi-line and string interpolation.
//nota: ${} se utiliza para poner variables en las strings.

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

//console.log(greeting);

//ejercicio:

const result = {
	succes: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skippped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
	const resultDisplayArray = [];
	for (let i = 0; i < arr.length; i++){
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
	}

	return resultDisplayArray;
}
//nota: <li class="text-warning"> </li> esto es codigo de HTML.

/*
makeList(result.failure) deberia imprimir:
[ `<li class="text-warning">no-var</li>`,
[ `<li class="text-warning">var-on-top</li>`,
[ `<li class="text-warning">linebreak</li>`,]
*/

const resultDisplayArray = makeList(result.failure);

//console.log(resultDisplayArray)

//Escribir un Objeto Literal conciso utilizando Simple Fields.

const createPerson = (name, age, gender) => ({ name, age, gender});

//console.log(createPerson("Zodiac Hasbro", 56, "male"));

//Escribir Funciones Declarativas concisas.

const bicycle = {
	gear: 2,
	setGear(newGear) {
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setGear(3);

//console.log(bicycle.gear);

