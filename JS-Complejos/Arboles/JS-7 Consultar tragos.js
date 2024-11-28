/* 10. Consultar tragos

Estás trabajando como bartender en un evento, y un cliente se acerca a la barra a consultarte qué tragos podría comprar con el efectivo del que dispone. Teniendo en cuenta
que todos los tragos, con sus respectivos precios, están almacenados en un árbol binario de búsqueda, tu tarea será encontrar todos los tragos cuyo valor sea igual o menor al monto que tiene el cliente y retornarlos.

EJEMPLO

Language: JavaScript (Node.js) O

Completa el método 'consultarTragos' a continuación.

* La función debería retornar un ARREGLO DE STRINGS.

* La función recibe como parámetro un ENTERO.

*

* No modifiques nada por fuera del cuerpo de la función.
*/

BinarySearchTree.prototype.consultarTragos = function (efectivo, tragos = []) {
    
    if(this.value.precio <= efectivo){
    tragos.push(this.value.nombre);
    }

    if (this. left !== null) {
    this.left.consultarTragos (efectivo, tragos);
    }

    if (this.right !== null) {
    this.right.consultarTragos (efectivo, tragos);
    }

    return tragos;
}

