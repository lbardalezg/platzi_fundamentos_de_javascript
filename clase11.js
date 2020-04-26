var sacha = {
    nombre: 'Sacha',
    apellido: 'Simpson',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero) { // === true
        console.log(`Ingeniero`)
    } else {
        console.log(`No es Ingeniero`)
    }
    if(persona.cocinero) { // === true
        console.log(`Cocinero`)
    }
    if(persona.cantante) { // === true
        console.log(`Cantante`)
    }
    if(persona.dj) { // === true
        console.log(`DJ`)
    }
    if(persona.guitarrista) { // === true
        console.log(`Guitarrista`)
    }
    if(persona.drone) { // === true
        console.log(`Vuela Drone`)
    }
}

// usar mayúsculas y guiones para identificar constantes
const MAYORIA_DE_EDAD = 18; // Evitar magic number declarando constantes
function esMayorDeEdad(persona) {
    //return persona.edad >= 18; //Magic number, mejor definirlo
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);