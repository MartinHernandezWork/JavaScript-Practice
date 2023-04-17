// Iterar con While Loops.

var myArray = [];

var i = 0;
while(i < 5) {
	myArray.push(i);
	i++;
}

//console.log(myArray);

// Iterar con For Loops.

 var ourArray = [];

 for (var i = 0; i < 5; i++) {
 	ourArray.push(i);
 }

//console.log(ourArray);

// Iterar numeros pares e impares con un For Loop.

 var parArray = [];

 for (var i = 0; i < 10; i += 2) {
 	parArray.push(i);
 }

 //console.log(parArray);

 var imparArray = [];

 for (var i = 1; i < 10; i += 2) {
 	imparArray.push(i);
 }

//console.log(imparArray);

//contar hacia atras.

 var cuentaAtras = [];

 for (var i = 9; i > 0; i-= 2) {
     cuentaAtras.push(i);
 }

 //console.log(cuentaAtras);

 //iterar un array con un For Loop.

 var myArray = [ 2, 3, 4, 5, 6];
 var total = 0;

 for (var i = 0; i < myArray.length; i++) {
     total += myArray[i];
 }

 //console.log(total);

 //nesting For Loops.

 function multiplicarTodo(arr) {
     var producto = 1;

     for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            producto *= arr[i][j];
        }
     }

     return producto;
 }

 var producto = multiplicarTodo([[1,2],[3,4],[5,6,7]]);

 //console.log(producto);

 //Iterar con Do... While Loops.

 var arrayTest = [];
 var i = 10;

 do {
    arrayTest.push(i);
    i++
 } while (i < 5);

 console.log(i , arrayTest);