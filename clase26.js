// En JS no existen clases, solo prototitpos

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn) {
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn) {
            fn(nombre, apellido); // undefined para esDev hará que la condición sea falsa
        }
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar(fn) {
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if(fn) {
            fn(nombre, apellido, true); // undefined para esDev hará que la condición sea falsa
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev) {
        console.log('No sabía que eras desarrollador/a');
    }
}

// Objeto de clase Persona
// new copia el prototipo de Persona
var sacha = new Persona('Sacha', 'Simpson', 1.72);
var erika = new Persona('Erika','Luna', 1.65);
var arturo = new Desarrollador('Arturo','Martinez', 1.89);

sacha.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);