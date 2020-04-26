/*
var nombreSacha = 'Sacha';
var nombrePedro = 'Pedro';
var nombreDario = 'Dario';

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(nombreSacha);
imprimirNombreEnMayusculas(nombrePedro);
imprimirNombreEnMayusculas(nombreDario);
*/

/*
var sacha = {
    nombre: 'Sacha',
    apellido: 'Simpson',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Rojas',
    edad: 27
}

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(sacha.nombre);
imprimirNombreEnMayusculas(dario.nombre);
*/

/*
var sacha = {
    nombre: 'Sacha',
    apellido: 'Simpson',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Rojas',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Simpson',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Rojas',
    edad: 27
}

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: "Pepito"});
imprimirNombreEnMayusculas(); // Manda Error ya que no hay atributo nombre
imprimirNombreEnMayusculas({apellido: "Perez"}); // Manda Error ya que no hay atributo nombre