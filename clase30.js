const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    console.log(id);
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(person) {
        console.log(`Hola, yo soy ${person.name}`)
        if(callback) {
            callback();
        }
    });
}

// De esta forma, las llamadas se hacen
// en orden secuencial, aunque dejan de
// ejecutarse en paralelo, esto es, una
// espera la ejecución del anterior.
obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5);
            });
        });
    });
});
// El patrón de arriba es un callback hell,
// que significa que el codigo llama callback
// tras callback perdiendose claridad en el
// código.