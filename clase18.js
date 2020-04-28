var sacha = {
    nombre: "Sacha",
    apellido: "Simpson",
    altura: 1.72
}

var vicky = {
    nombre: "Vicky",
    apellido: "Zapata",
    altura: 1.56
}

var paula = {
    nombre: "Paula",
    apellido: "Barros",
    altura: 1.76
}

const UMBRAL_ALTURA = 1.7;
const esAlta = ({altura}) => altura > UMBRAL_ALTURA;
const esBaja = ({altura}) => altura <= UMBRAL_ALTURA;

var personas = [sacha, vicky, paula];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas)
console.log(personasBajas)