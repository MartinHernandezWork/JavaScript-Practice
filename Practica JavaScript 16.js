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

//Escribir funciones de flecha de alto orden.

 