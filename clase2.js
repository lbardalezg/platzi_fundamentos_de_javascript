var nombre = 'Sacha', apellido = 'Simpson';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

// var nombreCompleto = nombre + ' ' + apellido.toUpperCase();
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

// var str = nombre.charAt(1) + nombre.charAt(2);
var str = nombre.substr(1,2);