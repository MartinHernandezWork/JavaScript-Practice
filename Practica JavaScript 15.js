/*Diferencias entre var y let.
let no te deja crear 2 variables con el mismo nombre, tambien
let tiene un scope diferente a var. este scope esta definido
al lugar o bloque de codigo donde se declara, mientras que
var es una declaracion global */

/*nota: "use strict" es un comando de js para tener menos tolerancia
a la hora de escribir el codigo. */

function chechScope () {
	"use strict";

	let i = "function scope";

	if (true){
		let i = "block scope";
		console.log("Block scope i is : ", i);
}

console.log("Function scope i is: ", i);

return i;
}

//chechScope();

/*declarar una variable solo de leida con const. (no se puede
reasignar el valor de una const.) */

/*Nota: las constantes se suelen escribir todas en mayusculas
para identificarlas. ej: const = DUEÑO */

function printManyTimes(str) {
	"use strict";

	const SENTENCE = str + " is cool!";

	//SENTENCE = str + " is amazing!" (esto da un error.)

	for (let i = 0; i < str.length; i +=2) {
		console.log(SENTENCE);
	}
}

//printManyTimes("freeCodeCamp");

/*cambiar un array declarado con una const.
para hacer esto utilizamos Bracket Notation.*/

const s = [5, 7, 2];

function editInPlace() {
	"use strict";

	//s = [2, 5, 7]; () (error)

	s[0] = 2;
	s[1] = 5;
	s[2] = 7;

}

editInPlace();

//console.log(s);

//Prevenir que un objeto mute (cambie de valor) con Object.freeze.

function freezeObj() {
	"use strict";

	const MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS);

	try {
		MATH_CONSTANTS.PI = 99;
	} catch ( ex ) {
		console.log(ex);
	}

	return MATH_CONSTANTS.PI;
}

const PI = freezeObj ();

//console.log(PI);