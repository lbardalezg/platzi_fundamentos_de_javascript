var edad = 27;

// edad = edad + 1;
edad += 1;

var peso = 75;

// peso = peso - 2;
peso -= 2;

var sandwich = 1;

//peso = peso + sandwich;
peso += sandwich;

var jugarAlFutbol = 3;

//peso = peso - jugarAlFutbol;
peso -= jugarAlFutbol;

var precioDelVino = 200.3;

var total = precioDelVino * 3;
console.log("total: " + total)
// Al imprimirlo, entrega 600.9000000000001
var totalCorregido = precioDelVino * 100 * 3 / 100;
console.log("totalCorregido:  " + totalCorregido)
// Usando redondeo
var totalCorregido2 = Math.round(precioDelVino * 100 * 3) / 100;
console.log("totalCorregido2: " + totalCorregido2)
// Texto con número de decimales establecido
var totalStr = total.toFixed(3);
console.log(totalStr);
// Convertir texto a número
var total2 = parseFloat(totalStr)

var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;
