//Usar el operador Spread ([...])para evaluar arrays In-Place.

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

(function() {
	arr2 = [...arr1];
	arr1[0] = "potato"
})();

//console.log(arr2);

//Usar un Destructuring Assignment ({ a : b }) para asignar variables de un objeto.

var voxel = {x: 3.6, y: 7.4, z: 6.54 };

//manera antigua de asignar los valores de los parametros.

var x = voxel.x; //x = 3.6
var y = voxel.y; //x = 7.4
var z = voxel.z; //x = 6.54

//manera moderna.

const { x : a, y : b, z : c} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
	"use strict";
	const { tomorrow : tempOfTomorrow } = avgTemperatures;
	return tempOfTomorrow;
}

//console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Destructuring Assignment con objetos anidados.

const LOCAL_FORECAST = {
	today: { min:72, max:83},
	tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
	"use strict";

	const { tomorrow : { max : maxOfTomorrow } } = forecast;

	return maxOfTomorrow;
}

//console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Usar Destructuring Assignment para asignar variables de un array.

//nota: asigna los valores en orden, pero con(,) se puede "saltear".

const [z1, x1, , y1] = [1, 2, 3, 4, 5, 6];
//console.log(z1, x1, y1);

//nota: cambia el orden de los valores

let a1 = 8, b1 = 6;
(() => {
	"use strict";
	[a1, b1] = [b1, a1]
})(); 

//console.log(a1);
//console.log(b1);

//Usar Destructuring Assignment con el Rest ([...]) Operator.

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {

	/* se colocan las comas para decirle al codigo que ignore
	los primeros 2 numeros. */
	const [ , , ...arr] = list;

	return arr;
}

const arr = removeFirstTwo(source);

//console.log(arr);
//console.log(source);

/*Usar Destructuring Assignment para pasar un objeto como parametro
de una funcion */

const stats = {
	max: 56.78,
	standart_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};
const half = (function() {

	return function half({ max, min}) {
		return (max + min) / 2.0;
	};

})();

//console.log(stats);
//console.log(half(stats));