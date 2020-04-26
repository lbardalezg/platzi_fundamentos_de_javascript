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

imprimirProfesiones(sacha);

function imprimirSiEsMayorDeEdad(persona) {
    if(persona.edad < 18) {
        console.log(`${persona.nombre} es menor de edad`);
    } else {
        console.log(`${persona.nombre} es mayor de edad`);
    }
}

imprimirSiEsMayorDeEdad(sacha);