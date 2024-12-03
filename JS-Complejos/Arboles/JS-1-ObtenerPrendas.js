/*10. Obtener prendas

Estás trabajando como dependiente en una tienda de ropa, y necesitas buscar todas las prendas que haya de un tipo específico. Teniendo en cuenta que todas las prendas, están almacenadas en un árbol binario de búsqueda, tu tarea será encontrar todas las prendas cuyo nombre coincida con el nombre recibido por parámetro.

EJEMPLO

// Dado el siguiente árbol llamado 'prendas':

                                { nombre: "Camiseta", num: 13 
                                /                        \
            { nombre: "Zapato", num: 7 }                { nombre: "Camiseta', num: 24 }
                            /                            /                         \   
        { nombre: "Pollera", num: 6 }       { nombre: "Zapato", num: 16 }         { nombre: 27, num: 27 }
                        /                                                                    \
    { nombre: "Zapato", rum: 3 }                                                    { nombre: "Zapato", num: 45 }
                        \
                    { nombre: "Zapato", rum: 4 }
                
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

};

