/*
7. Slice rooms

INTRODUCCIÓN

Para construir una casa nueva nuestros clientes deben definir que partes de la casa quieren.
Para esto necesitamos que construyas una función que les permita, a partir de una lista de espacios (cocina, baño, comedor, dormitorio, etc...), seleccionar el segmento de la lista que quieren para su casa.

INSTRUCCIONES
• Agrega un nuevo método llamado sliceRooms al prototipo de LinkedList.
• Este método deberá tener un funcionamiento parecido al del método slice de arreglos, donde a partir de dos indices se genera un nuevo arreglo que contiene todos los elementos comprendidos entre éstos.
• En este caso, en vez de recibir índices numéricos por parámetro, recibirás dos valores similares a algunos de los que se encuentran dentro de la lista (en este caso, los valores serán strings, ya que la lista contiene strings).
• El método debe retornar una nueva lista enlazada que contenga el segmento de todos los nodos comprendidos entre los dos valores recibidos por parámetro, sin incluirlos.

EJEMPLO

//LinkedList
    Head => ("Cocina") ("Dormitorio") ("Baño") ("Living") ("Garage");

Language: JavaScript (Node.js)
1> 'use strict';

Completa el método 'sliceRooms' a continuación.

* El método debe retornar una LISTA ENLAZADA.
* El método recibe por parámetro(s):
    1. STRING 'firstIndex'
    2. STRING 'second Index'

* No modifiques nada por fuera del cuerpo de la función.
*/


LinkedList.prototype.sliceRooms = function(firstIndex, secondIndex) { 
    // Tu código aquí:
    let newList=new LinkedList;
    let start=false;
    
    let currentNode=this.head;
    while(currentNode) {
        if(currentNode.value===firstIndex) {
            start=true
        }
        if(start) {
            if (currentNode.value !==firstIndex && currentNode.value !== secondIndex) {
                newList.add(currentNode.value);
            }
        }
        if (currentNode.value===secondIndex) {
            break;
        }
        currentNode=currentNode.next;
    }
    return newList;
}