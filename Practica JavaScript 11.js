//usar objetos para busquedas

function busquedaPrincipal(val) {

	var resultado = "";

	var busqueda = {
		"a": "Adrian",
		"b": "Benjamin",
		"c": "Clara",
		"d": "Donatelo",
		"e": "Ezequiel",
		"f": "Facundo"
	};

	resultado = busqueda[val];

	return resultado;
}

//console.log(busquedaPrincipal("d"));

//como fijarse si un objeto tiene una propiedad

var myObj = {
	"nombre": "Martin",
	"segundo nombre": "Juan",
	"apellido": "Palermo"
};

function checkObj(checkProp) {
	if (myObj.hasOwnProperty(checkProp)) {
		return myObj[checkProp];
	}   else {
		return "No se encontro una propiedad";
	}
}

//console.log(checkObj("apellido"));

//manipular objetos complejos

var myMusic = [
	{
		"artista": "Eminem",
		"titulo": "Without Me",
		"Año": 2002,
		"formatos": [
			"CD",
			"Spotify",
			"Youtube Video"
		 ],
		"gold": true
	},
//agregar otra cancion
	{
    	"artista": "Rage Against The Machine",
		"titulo": "Bulls On Parade",
		"Año": 1996,
		"formatos": [
			"CD",
			"Vinyl",
			"Spotify",
			"Youtube Video"
		],
		"gold": false
	}

];

//console.log(myMusic[1].formatos[2]);

//acceder a objetos anidados (Nested Objects)

var myStorage = {
 	"auto": {

		"adentro": {
			"asiento acompañante": null,
			"asiento trasero": "campera",
			"guantera": "mapa"
		},

		"afuera": {
			"baul": "rueda auxiliar"
		}
	}
};

var contenidoDeAdentro = myStorage.auto.adentro["asiento trasero"];
/*nota: para buscar un valor que tiene espacios, necesitamos usar la
Braket Notation. */

//console.log(contenidoDeAdentro);
