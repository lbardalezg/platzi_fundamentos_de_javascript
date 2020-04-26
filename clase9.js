var x = 4, y = '4';

console.log(x == y) // true, fuerza conversion a mismo tipo
console.log(x === y) // false, NO fuerza conversion a mismo tipo

var sacha = {
    nombre: 'Sacha'
}

var otraPersona = {
    nombre: 'Sacha'
}

var otraPersonaMas = sacha;

var otraPersonaAdicional = {
    ...sacha
}

console.log(sacha == otraPersona); // false, ya que en objetos compara referencias, no valores
console.log(sacha == otraPersonaMas); // true, ya que apuntan a misma referencia
console.log(sacha == otraPersonaAdicional); // false, ya que es otro objeto aunque tenga los mismos valores

otraPersonaMas.nombre = 'Pepe'
console.log(sacha.nombre); // "Pepe", ya que otraPersona y sacha apuntan a la misma direcion de memoria (misma referencia)