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

// Los objetos pasan como referencia
// Su valor es modificado dentro de
// las funciones.
/*
function cumpleanos(persona) {
    persona.edad += 1; //Modifica objeto persona
}
*/
// Para evitar la modificación, se usa
// el operador spread (...) para copiar
// cada uno de los componentes del objeto
// en un nuevo objeto.
function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

var sachaMasViejo = cumpleanos(sacha);
console.log(sacha);
console.log(sachaMasViejo);