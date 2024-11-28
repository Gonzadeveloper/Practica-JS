/*10. Obtener prendas

Estás trabajando como dependiente en una tienda de ropa, y necesitas buscar todas las prendas que haya de un tipo específico. Teniendo en cuenta que todas las prendas, están almacenadas en un árbol binario de búsqueda, tu tarea será encontrar todas las prendas cuyo nombre coincida con el nombre recibido por parámetro.

EJEMPLO

// Dado el siguiente árbol llamado 'prendas':
{ nombre: "Camiseta", nur: 13}
(nombre: "Zapato", nun: 7}
(nombre: "Cariseta', nun: 24)
(nombre: "Pollera", nur: 6)
(nombre: "Zapato", nur: 16)
(nombre: 27, nun: 27)
(nombre: "Zapato", run: 3)
(nombre: "Zapato", num: 45)
(nombre: "Zapato", run: 4)

prendas.obtener Prendas ("Zapato");

// OUTPUT ESPERADO
["Zapato", "Zapato", "Zapate", "Zapato"]

INSTRUCCIONES
El método debe retornar un arreglo de strings.
Recibe como parámetro un string que corresponde al nombre
de una prenda

Language: JavaScript (Node.js)

* Completa el método 'obtener Prendas' a continuación.

*

* La función debería retornar un ARREGLO DE STRINGS.

* La función recibe como parámetro un STRING.

*

* No modifiques nada por fuera del cuerpo de la función.

*/

BinarySearchTree.prototype.obtenerPrendas = function (prenda, prendasObtenidas = []) {
    // Tu código aquí
    if(this.value. nombre === prenda) {
        prendasObtenidas.push(this.value.nombre);
    }

    if (this. left !== null) {
        this.left.obtenerPrendas (prenda, prendas0btenidas);
    }
    if (this.right !== null) {
        this.right.obtenerPrendas (prenda, prendasObtenidas);  
    }

    return prendasObtenidas;
};