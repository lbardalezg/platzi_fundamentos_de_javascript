var nombre1 = 'Sacha'; // Variable de alcance global
var nombre2 = 'Pedro';

function imprimirNombreEnMayusculas() {
    nombre1 = nombre1.toUpperCase();
    console.log(nombre1);
}

function imprimirNombreEnMayusculas2(nombre) {
    // nombre existe en el alcance local
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas();
console.log(nombre1); //Nombre fue modificada por la función

imprimirNombreEnMayusculas2(nombre2);
console.log(nombre2); //nombre2 no fue modificado
console.log(nombre); //nombre no existe fuera de la funcion, dará error