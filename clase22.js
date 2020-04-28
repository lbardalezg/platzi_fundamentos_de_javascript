function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

// Normalmente se define todas las funciones
// del prototipo junto a la definición de éste,
// y arriba del resto de código.

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

// Con arrow function no funciona expresado de esta forma,
// this no corresponde al prototipo de Persona
// Persona.prototype.soyAlto = () => this.altura > 1.8;

// Objeto de clase Persona
// new copia el prototipo de Persona
var sacha = new Persona('Sacha', 'Simpson', 1.72);
var erika = new Persona('Erika','Luna', 1.65);
var arturo = new Persona('Arturo','Martinez', 1.89);

sacha.soyAlto();