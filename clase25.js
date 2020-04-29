// En JS no existen clases, solo prototitpos

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

// Objeto de clase Persona
// new copia el prototipo de Persona
var sacha = new Persona('Sacha', 'Simpson', 1.72);
var erika = new Persona('Erika','Luna', 1.65);
var arturo = new Desarrollador('Arturo','Martinez', 1.89);

sacha.saludar();
arturo.saludar();

sacha.soyAlto();
arturo.soyAlto();

console.log(Persona.prototype); // Revisar __proto__
console.log(Desarrollador.prototype); // Revisar __proto__, se encontrará prototipo Persona