function Persona(nombre, apellido, altura) {
    // this representa al objeto
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // return this; es implicito cuando
    // se crea un objeto
}

Persona.prototype.saludar = function () {
    // se puede agregar funciones al prototipo
    // usando prototipe
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    if(this.altura > 1.8) {
        console.log(`Soy alto`);
    }
}

// Objeto de clase Persona
// new copia el prototipo de Persona
var sacha = new Persona('Sacha', 'Simpson', 1.70);
var erika = new Persona('Erika','Luna', 1.75);
var arturo = new Persona('Arturo','Martinez', 1.82);

sacha.saludar(); // manda mensaje a console log