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
    //var nombre = persona.nombre;
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({nombre: "Pepito"});
//imprimirNombreEnMayusculas({apellido: "Perez"}); // Manda Error ya que no hay atributo nombre

var luis = {
    nombre: "Luis",
    apellido: "Bardalez",
    edad: 30
}

function imprimirNombreYEdad(persona) {
    var {nombre, edad} = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(luis)