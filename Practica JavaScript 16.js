//Usar funciones de flecha para escribir funciones anonimas.

//esto es una funcion anonima (sin nombre).

const magic1 = function () {
	return new Date();
};

//esto es una funcion de flecha.

const magic2 = () => {
	return new Date();
};

//esto es una funcion de flecha resumida.

const magic3 = () => new Date();

//Escribir funciones de flecha con parametros.

/* Ej:

const myConcat = function(arr1, arr2) {
	return arr1.concat(arr2);

} */ 

/*removemos function, dejamos los parametros, ya que solo estamos
haciendo un return, podemos eliminar las llaves y el return.*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);

//console.log(myConcat([1, 2],[3, 4, 5]));

//Escribir funciones de flecha de alto orden (.filter, .map).

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

//esta funcion solo deja los numeros positivos redondeados del array.
const squareList = (arr) => {

	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);

	return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);

//console.log(squaredIntegers);

// Escribir funciones de flecha de alto orden.

const incremet = (function() {

	return function incremet (number, value = 1) {

		return number + value;
	}
})();

//console.log(incremet(5, 2));
//console.log(incremet(5));

//usar el operador Rest (...) con una funcion de parametros.
 
const sum = (function() {
	return function sum (...args) {
		return args.reduce((a, b) => a + b, 0);
	};
})();

//console.log(sum(1, 2, 3, 4, 5, 6));