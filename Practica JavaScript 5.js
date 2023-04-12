//Practica arrays 2 y funciones.

//array dentro de un array
var listaSuper = [["Cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",12]];

//funciones

function myFunction () {
	//console.log("Hi everyone, im Elon Musk.");
}

myFunction();

//funciones con argumentos

function suma (a,b){
	//console.log(a + b);
}

suma(25,15);

//scope local y global

//variable global.
var ropa = "remera";

function myLocalScope(){
	//variable local.
	var ropa = "pantalon";

	return ropa;
}

//console.log(myLocalScope());
//console.log(ropa);

//devolver un valor de una funcion.

function menosSiete(num){
	return num - 7;
}

//console.log(menosSiete(10));

function porCinco(num){
	return num * 5;
}

//console.log(porCinco(5));

//devolvierno undefined

var sum = 0;

function masTres(){
	sum = sum + 3;
}

function masCinco(){
	sum += 5;
}

//console.log(masTres());
//console.log(masCinco());

//Asignacion con un valor devuelto.

var valor = 0;

function SumaDivision (num){
	return (num + 10) / 5;
}

valor = SumaDivision(5);

//console.log(valor);

//Stand in Line

//Nota: JSON.stringify es un comando que combiente un array en una string.

function nextInLine(array, item) {

	array.push(item);
	return array.shift();
}

var testArray = [1,2,3,4,5];

console.log("Antes " + JSON.stringify(testArray));
console.log(nextInLine(testArray,6));
console.log("Despues " + JSON.stringify(testArray));
