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

var personas = [sacha, vicky, paula];
console.log(personas)
console.log(personas[0]) // primera persona
console.log(personas[1]["nombre"]) // nombre de la segunda persona

for(var i=0; i<personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}`);
}