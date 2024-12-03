/*Tachar lista

* Completa la función 'tacharLista' a continuación.

*

La función debe retornar una LISTA ENLAZADA.

INTRODUCCIÓN
Estamos trabajando en una tienda de ropa y necesitamos revisar nuestro catálogo para eliminar las prendas cuyo stock se haya agotado.
Te solicitamos que crees una función que nos facilite esta tarea.

INSTRUCCIONES

Crea un método con el nombre tacharLista en el prototipo de LinkedList, el cual recibirá por parámetro un arreglo de strings (prendas que se agotaron).
El método debe devolver una nueva lista en la que se encuentren todas las prendas exceptuando las que se agotaron.

EJEMPLO

HEAD => ('Pantalon') ('Zapatos') ('Camisa') ('Gafas') ('Sweater'); 
let noHayStock ['Gafas', 'Zapatos'];

lista.tacharlista(noHayStock);
// Devuelve → ('Pantalon') ('Camisa') ('Sweater')

ACLARACIONES
• Si el arreglo recibido por parámetro está vacío debes devolver la lista original completa.
• Existe un método add() en el prototipo de LinkedList con el que puedes agregar nuevos nodos.
• Existe un método search() en el prototipo de LinkedList con el que puedes buscar los existentes.
Existe un método remove() en el prototipo de LinkedList con el que puedes eliminar los existentes.

* La función devuelve una LISTA ENLAZADA.
* La función recibe un ARRAY DE STRINGS 'sinStock' por parámetro.

* No modifiques nada por fuera del cuerpo de la función.
*/

// Agregar el método `tacharLista` al prototipo

LinkedList.prototype.tacharLista = function (sinStock) { 
    // Tu código aquí:

}
