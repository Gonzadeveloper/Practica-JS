/*
EncontrarTaquilelras

INTRODUCCIÓN
Eres el responsable administrativo de un cine y necesitas saber cuales son las películas taquilleras que se encuentran en tu cartelera. Para esto has decidido construir una función que provea esta información.

INSTRUCCIONES

La función debe aceptar por parámetro un arreglo de objetos en el que cada uno es una película y tendrá, además de otras propiedades, una propiedad llamada "taquillera" que puede ser true o false. Recursivamente debe validar qué películas son o no son taquilleras.
Finalmente debe devolver un arreglo de objetos conteniendo todas las películas taquilleras.
Si no encuentra ninguna, o nuestra cartelera está vacía, debemos devolver el string: "No se encontraron peliculas taquilleras".

EJEMPLO

let cartelera = [{
    nombre: 'Los pitufos',
    año: '2011',
    genero: 'Fantasia/Aventura/Acción', 
    taquillera: false
    },
    {
    nombre: 'Avengers: La era de Ultrón',
    año: '2015',
    genero: 'Fantasia/Aventura/Acción', 
    taquillera: true
    }];

encontrarTaquilleras(cartelera);
/* Devuelve →
    [{
        nombre: 'Avengers: La era de Ultron',
        año: '2015',
        genero: 'Fantasia/Aventura/Acción', taquillera: true
    }]
    
ACLARACIONES
    
• Únicamente se puede resolver aplicando recursión.
• Si es necesario, puedes agregar default parameters a la función.
• Para pasar todos los tests, recorre el arreglo de películas de izquierda a derecha (es decir, empezando por la posición 0),


Language: JavaScript (Node.js)
1 > 'use strict'; ...

*
Completa la función 'encontrarTaquilleras' a continuación.

*

* La función deberá retornar un ARREGLO DE OBJETOS 6 un STRING.

* La función recibe un ARREGLO DE OBJETOS 'cartelera' por parámetro.

*

* No modifiques nada por fuera del cuerpo de la función.

* TIP: Puedes agregar default parameters a la función. 38 */ 


function encontrarTaquilleras (cartelera, taqui = []) {

}
