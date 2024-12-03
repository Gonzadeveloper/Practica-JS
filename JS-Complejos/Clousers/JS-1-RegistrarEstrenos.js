//Registrar estrenos

//JavaScript (Node.js)
/*

INTRODUCCION

El personal de un cine necesita mejorar la forma de gestionar las películas.
En esta oportunidad, te piden que crees una función que permita marcar algunas películas del catálogo como estrenos.

INSTRUCCIONES

Usando closures, crea una función que, a partir de un listado de estrenos, recorra el catálogo del cine y marque como estrenos aquellas películas cuyos nombres coincidan con los de la lista.
La función pelisEstrenos recibirá por parámetro un arreglo de objetos, donde cada objeto representa una película del catálogo, y tiene propiedades nombre (string), año De Estreno (string), genero (string) y estreno (bool).
Luego, pelisEstrenos debe retornar otra función. Esta función retornada debe aceptar por parámetro un arreglo de strings con los nombres de las películas que deberán marcarse como estrenos en el catálogo.

Ejemplo

// Catálogo inicial de películas
const listaDePeliculas = [
    { nombre: "Avatar", añoDeEstreno: "2009", genero: "Ciencia Ficción", estreno: false },
    { nombre: "Titanic", añoDeEstreno: "1997", genero: "Romance", estreno: false },
    { nombre: "Avengers: Endgame", añoDeEstreno: "2019", genero: "Acción", estreno: false },
    { nombre: "El Rey León", añoDeEstreno: "1994", genero: "Animación", estreno: false },
  ];

  const marcarEstrenos = pelisEstrenos(listaDePeliculas);
  
  const estrenos = ["Avatar", "Titanic"];
  
  const resultado = marcarEstrenos(estrenos);

  Esto deberia retornar :

    [
        {
            nombre: 'Avatar',
            'añoDeEstreno': '2009',
            genero: 'Ciencia Ficción',
            estreno: true
        },
        { nombre: 'Titanic', 'añoDeEstreno': '1997', genero: 'Romance', estreno: true },
        {
            nombre: 'Avengers: Endgame',
            'añoDeEstreno': '2019',
            genero: 'Acción',
            estreno: false
        },
        {
            nombre: 'El Rey León',
            'añoDeEstreno': '1994',
            genero: 'Animación',
            estreno: false
        }
    ]

Por último, debe retornarse:

el catálogo actualizado (arreglo de objetos), en caso de haber encontrado todas las películas en el catálogo,
el string "No se encontro alguna de esas peliculas en nuestro catalogo", en caso de que alguna de las películas del arreglo de estrenos no exista en el catálogo.


* Completa la función 'pelisEstrenos' a continuación.


La función 'pelisEstrenos' debe retornar una FUNCIÓN. Ésta, a su vez, recibe un ARREGLO DE STRINGS por parámetro, y retorna un ARREGLO DE OBJETOS ó un STRING.
La función 'pelisEstrenos' recibe un ARREGLO DE OBJETOS 'ListaDePeliculas por parámetro.

No modifiques nada por fuera del cuerpo de la función.
*/


function pelisEstrenos (listaDePeliculas) {
    // Tu código aquí

}

