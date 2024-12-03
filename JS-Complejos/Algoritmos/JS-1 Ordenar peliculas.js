//Ordenar peliculas
//Mientras trabajas en un cine, descubres que el catálogo de películas está desordenado. Decides crear una función que las vuelva a ordenar por año (de antiguas a nuevas) tanto las películas ya almacenadas, como las nuevas.

//INSTRUCCIONES
/*La función recibirá dos listas de películas (el catálogo disponible y las nuevas películas) y tendrás que ordenarlas a todas de menor a mayor según su año. Tu tarea será implementar un algoritmo de ordenamiento para crear un único arreglo que contenga todas las películas (las del catálogo y las nuevas) ordenadas de MENOR a MAYOR según el año.
Ambas listas son arreglos de objetos, cada objeto representa una película y tiene las propiedades nombre (string), año (número), genero (string) y taquillera (booleano).

EJEMPLO
let catalogo = [{ 
                nombre: 'Avengers: La era de Ultrón',
                año: 2015,
                genero: 'Fantasia/Aventura/Acción',
                taquillera: true
                },{
                nombre: 'Toy Story 3',
                año: 2010,
                genero: 'Infantil/Animación',
                taquillera: true 
                }];

let nuevasPeliculas = [ {nombre: 'Sonic', año: 2012, genero: 'Aventura', taquillera: false }];

ordenarPeliculas(catalogo, nuevasPeliculas)
// Devuelve →→

[
{ nombre: 'Toy Story 3', año: 2010, genero: 'Infantil/Animación', taquillera: true },
{ nombre: 'Sonic', año: 2012, genero: 'Aventura', taquillera: false },
{ nombre: 'Avengers: La era de Ultron', año: 2015, genero: "Fantasia/Aventura/Acción', taquillera: true
}];

ACLARACIONES: 
- La función ordenarPeliculas() recibirá dos parámetros: catalogo (elRevisa como acceder a cada año para realizar la respectiva logica a la hora de comparar
- Debees retornar un unico arreglor de objetos con todas las peliculas ordenadas
- No se permite el uso de la función sort() o sort() en el array


Language: JavaScript (Node.js)

* Completa la función 'ordenar Peliculas' a continuación.

* La función debe retornar un ARREGLO DE OBJETOS.

* La función recibe por parámetro(s):

1. ARREGLO DE OBJETOS 'catalogo'

2. ARREGLO DE OBJETOS 'nuevasPeliculas'

* No modifiques nada por fuera del cuerpo de la función.
* TIP: Puede ser de ayuda el método assign de los objetos. */
function ordenarPeliculas(catalogo, nuevasPeliculas) {
    // Combinar el catálogo existente con las nuevas películas

}
