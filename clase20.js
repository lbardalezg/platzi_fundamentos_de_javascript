var sacha = {
    nombre: "Sacha",
    apellido: "Simpson",
    altura: 1.72,
    cantidadDeLibros: 111
}

var vicky = {
    nombre: "Vicky",
    apellido: "Zapata",
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: "Paula",
    apellido: "Barros",
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, vicky, paula];

// var acum = 0;
// for(var i=0; i<personas.length; i++) {
//     acum += personas[i].cantidadDeLibros;
// }
// console.log(`En total todos tienen ${acum} libros`);

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;
var totalDeLibros = personas.reduce(reducer, 0);
console.log(`En total todos tienen ${totalDeLibros} libros`);