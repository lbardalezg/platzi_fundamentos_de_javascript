// En JS no existen clases, solo prototitpos.

// Herencia prototipal
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}; // funcion dummy
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

// Debe heredar antes de definir sus funciones
// ya que sino las funciones de prototipoPadre
// chancan las funciones de prototipoHijo.
heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
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