// objetos

/*para crear un objeto necesitamos utilizar {} seguido de un nombre con un valor asignado por : cada uno de estos es una propiedad
un objeto. un objeto puede tener varias propiedades y cada una se separa por una , estas propiedades pueden tener cualquier valor,
desde una nombre,numero,array,etc. */

var gato = {
	"nombre":"Luka",
	"edad": 1,
	"patas": 4,
	"cola": 1,
	"amigos": ["Lucia","Martin","Dori"]
};

//acceder a las propiedades de un objeto con Dot Notation.

var nombreValor = gato.nombre;
var amigosValor = gato.amigos;

/*console.log(amigosValor);*/

//acceder a las propiedades de un objeto con Bracket Notation.

var edadValor = gato["edad"];
var patasValor = gato["patas"];

/*console.log(patasValor);*/

//acceder a las propiedades de un objeto con Variables.

var equipo = {
	19: "Lucia",
	20: "Martin",
	18: "Juan",
	21: "Magali"
}

var playerNumber = 18;
var player = equipo[playerNumber];

/*console.log(player);*/

//actualizar propiedades de un obejeto

var dog = {
	"name":"Willie",
	"age": 5,
	"friends": "Mayonesa"
}

dog.name = "Pancho";

/*console.log(dog.name);*/

//añadir nuevas propiedades a un objeto con Dot Notation o Braket Notation.

dog.tails = 1;

dog["paws"] = 4;

//eliminar propiedades de un objeto.

delete dog.paws;







