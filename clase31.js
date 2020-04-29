const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, callback)
        .fail(() => {
            console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
        });
}

// De esta forma, las llamadas se hacen
// en orden secuencial, aunque dejan de
// ejecutarse en paralelo, esto es, una
// espera la ejecución del anterior.
obtenerPersonaje(1, function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function(personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function(personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)
                        });
                    });
                });
            });
        });
    });
});
// El patrón de arriba es un callback hell,
// que significa que el codigo llama callback
// tras callback perdiendose claridad en el
// código.