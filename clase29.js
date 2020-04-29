const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const opts = { crossDomain: true }

const onPeopleResponse = function(person) {
    console.log(`Hola, yo soy ${person.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onPeopleResponse);
}

// El asincronismo hace que los request se inicien
// pero no garantiza el orden en el que llegan
// los datos.
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);