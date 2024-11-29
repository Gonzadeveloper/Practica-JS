/*
2. Acomodar películas

INTRODUCCIÓN

La productora de nuestro cine obtuvo una caja con nuevas películas. ¡El problema es que una de ellas ya la tenemos!
Ayúdanos a identificar la repetida.

Esta función recibirá dos datos por parámetro:
    ⚫ listaDePeliculas. un arreglo de objetos donde cada objeto representa una película, y tiene las propiedades nombre (string), estreno (numero), y duracion (numero)
    ⚫ nombre: un string con el nombre de una película.
El objetivo de este ejercicio es que crees un nuevo Stack en el cual almacenes las películas que recibes del arreglo, pero sólo aquellas cuyo nombre no coincida con el string recibido. Si además la película tiene una duración menor a una hora, tampoco debe estar incluida en el Stack.

Language: JavaScript (Node.js)
1> 'use strict'; ...


* Completa la función 'acomodar Peliculas' a continuación.
* La función debe retornar una STACK.
* La función recibe por parámetros:
* - un ARREGLO DE OBJETOS listaDePeliculas.
* - un STRING nombre.

* No modifiques nada por fuera del cuerpo de la función. */

function acomodarPeliculas (listaDePeliculas, nombre){ 
    const pelis = new Stack();
    
    for (const peliculas of listaDePeliculas) {
        if (peliculas.nombre !== nombre && peliculas.duracion >= 1){ 
            pelis.push(peliculas);
        }
    }
    return pelis;
}




