/*
7. Migrar stock

INTRODUCCIÓN

En nuestra tienda de indumentaria debemos migrar todo nuestro stock de un sistema a otro.
Para esto te pedimos que desarrolles una función que nos facilite esta tarea.

INSTRUCCIONES

Crea un método llamado migrarStock al prototipo de LinkedList. Dentro de la lista, cada nodo tendrá como value un objeto con la información de cada prenda: nombre y cantidad de stock.
El método debe devolver todas las prendas de la lista en un nuevo objeto que tenga el siguiente formato:
    
    • { nombre: stock, nombre: stock, nombre: stock}

En caso de que la lista esté vacía, debe devolver
el string: "Actualmente no tenemos stock".
 
EJEMPLO

// LINKEDLIST ORIGINAL
({nombre: 'Camisetas', stock: 22}) ({nombre: 'Pantalones', stock: 12})→
({nombre: 'Zapatos', stock: 45}) ({nombre: 'Bufandas', stock: 12}) → 
({nombre: 'Sacos', stock: 4});

stock.migrarStock();
// Devuelve →
// Camisetas: 22, Pantalones: 12, Zapatos: 45, Bufandas: 12, Sacos: 4 }

ACLARACIONES
• La clase LinkedList ya se encuentra definida con todos sus métodos: add, search y remove

Language: JavaScript (Node.js) O
1 'use strict'; ...

* Completa el método 'migrarStock' a continuación.

*La función debe retornar un OBJETO.

No modifiques nada por fuera del cuerpo de la función.
*/
LinkedList.prototype.migrarStock = function (){
    // Tu código aquí:
    if(!this.head) {
    return "Actualmente no tenemos stock";
    }
    let stockMigrado = {};

    let current = this. head;
    while (current !== null) {
        let {nombre, stock} = current.value;
        stockMigrado[nombre] = stock;
        current = current.next;
    }

    return stockMigrado;
}
