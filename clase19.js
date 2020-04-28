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

const pasarAlturaACms = persona => ({
    ...persona, // Evita modificar array original
    altura: persona.altura * 100
})

// La función dentro de map debe devolver
// un objeto persona para este caso
var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms)