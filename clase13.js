var sacha = {
    nombre: 'Sacha',
    apellido: 'Simpson',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`);

const INCREMENTO_PESO = 0.200;
const DIAS_DEL_ANHO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for(var i = 1; i <= DIAS_DEL_ANHO; i++) {
    var random = Math.random() // entre 0 y 1
    if(random < 0.25) {
        aumentarDePeso(sacha)
    } else if (random < 0.5) {
        adelgazar(sacha)
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`);