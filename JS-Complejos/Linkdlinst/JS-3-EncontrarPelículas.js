/*

7. Encontrar películas

INTRODUCCIÓN

En el cine donde trabajas, las películas están guardadas en estanterías. Escribe una función que permita encontrar todas las películas almacenadas en la misma estantería.

INSTRUCCIONES

Crea un nuevo método con el nombre encontrarPeliculas en el prototipo de LinkedList

Al recibir un número de estantería por parámetro, este método deberá retornar:

  • El string: "No tenemos peliculas de la estanteria indicada", en caso de no encontrar ninguna película que pertenezca a la estantería ingresada
  • Caso contrario, una nueva LinkedList conteniendo todas las películas que tengan ese mismo número de estantería.
  
  EJEMPLO:
  
  Head➡ (2) ➜ (4) ➜ (6) ➜ (7) ➜ (3) ➜ (3) ➜ (4) ➜ (1)
  
    peliculas.encontrarPeliculas (3)
  
    // Devuelve → Head→ (3) ➜ (3)
    
    ACLARACIONES
    
  • La clase LinkedList ya se encuentra definida con todos sus métodos: add, search y remove
  • El número que recibes por parámetro indica el número de estantería que se quiere consultar.
  • Cada nodo de la lista tiene como value un número que representa la estantería donde está guardada una película
  
  Language: JavaScript (Node.js)
  
  Completa el método 'encontrar Pelicula' a continuación.
  
  * El método debe retornar una LISTA ENLAZADA.
  
  * El método recibe un NUMERO ENTERO 'estanteria' por parámetro.

  *
  
  * No modifiques nada por fuera del cuerpo de la función. */
 
 
 LinkedList.prototype.encontrarPeliculas = function(estanteria){

  }
  


