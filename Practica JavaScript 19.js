//Usar Class Syntax para definir una Funcion Constructora.

class SpaceShuttle {
	constructor(targetPlanet){
		this.targetPlanet = targetPlanet;
	}
}
var zeus = new SpaceShuttle("Jupiter");

//console.log(zeus.targetPlanet);
//EJ 2:

function makeClass() {
	class Vegetable {
		constructor(name){
			this.name = name;
		}
	}
	return Vegetable;
}

const Vegetable = makeClass();

const carrot = new Vegetable("carrot");

//console.log(carrot.name);

//Usar Getters and Setters para controlar el acceso a un objeto.

class Book {
	constructor(author) {
		this._author = author;
	}
	//getter
	get writer(){
		return this._author;
	}
	//setter 
	set writer(updateAuthor){
		this._author = updateAuthor;
	}
}

//Diferencias entre Import y Require.
//nota: import trae, export lleva, from"./" es el directorio actual.

import { capitalizeString } from "./string_function"

const cap = capitalizeString("hello!");

console.log(cap);