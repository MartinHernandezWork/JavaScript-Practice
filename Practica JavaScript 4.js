//Practica arrays.

var array = [["Lucia",19],["Martin",20]];
var removedLastFromArray;
var removedFirstFromArray;

//Agregar al final del array un dato.  --> .push()
array.push(["Dori",10]);

//Remover del array el ultimo dato.  --> .pop()
removedLastFromArray = array.pop();

//Remover del array el primer dato.  --> .shift()
removedFirstFromArray = array.shift();

//Agregar al principio del array un dato.  --> .unshift()
array.unshift(["Luka",16]);

console.log(array);