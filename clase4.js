var nombre = 'Sacha', edad = 28;

// function es palabra reservada para definir funciones
function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`);
}

imprimirEdad(nombre, edad);
imprimirEdad('Vicky',28);
imprimirEdad('Eric',24); //Eric tiene 24 años
imprimirEdad(27,'Dario'); //27 tiene Dario años
imprimirEdad(); //undefined tiene undefined años