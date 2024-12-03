/* Marcar

En una app que estás desarrollando para un cine, todas las entradas están almacenadas en un árbol binario de búsqueda. Tu cliente solicitó una funcionalidad que le permita marcar entradas como vendidas.
Para cumplir con esta tarea, agrega un método marcar a la clase
BinarySearchTree que, a partir de un arreglo de películas, recorra todo el árbol y marque como vendidas cada una de las películas del arreglo.

EJEMPLO

// Dado el siguiente árbol entradas:

                            {nombre: "Chaplin', horario: 10 }
                            /                               \
        {nombre: "El Hobbit", horario: 7}               {nombre: "Masacre en Texas, horario: 22}
                /                                                           \
{nombre: "388", horario: 6}                                         {nombre: "Harry potter, horario: 23}


const entradasVendidas = [
    { nombre: "Harry potter", horario: 73 },
    { nombre: "300", horario: 6},
    { nombre: "Fi Hobbit", horario: 7}
    ]
    
    entradas.narcar(entradas Vendidas);

// El árbol deberia quedar:

                                {nombre: "Chaplin, horario: 18}
                                /                               \
    {nombre: "El Hobbit", horario: 7, vendida: true}              {norbre: "Masacre en Texas", horario: 22} 
                            /                                               \
{nombre: "300", hararia: 6, vendida: true}                              {nombre: "Harry potter", hararia: 23, vendida: true}

INSTRUCCIONES
• El método recibirá como parámetro un arreglo de objetos donde cada objeto representa una película, y tiene propiedades nombre (string), y horario (número).
• Debes buscar en el árbol todos los nodos donde tanto el nombre como el horario de la película coincidan con alguno de los elementos del arreglo recibido, y en aquellos nodos agregar la propiedad vendida con valor true.
• Cada nodo del árbol tiene en su propiedad value un objeto con propiedades nombre (string) y horario (entero). El árbol está ordenado por horario de la película.
• Antes de marcar una entrada como vendida, asegúrate de que coincidan tanto el nombre como el horario del elemento que estás buscando con el que hay en el árbol. Si una película no coincide, o coincide sólo parcialmente (es decir, solamente el nombre o solamente el horario), ese nodo no se modifica.

Language: JavaScript (Node.js)

* Completa el método 'marcar' a continuación.

*

* La función no debería retornar nada.

* La función recibe como parámetro un ARREGLO DE OBJETOS.
* No modifiques nada por fuera del cuerpo de la función.
*/

BinarySearchTree.prototype.marcar = function (entradasVendidas) { 
    // Tu código aquí

}

