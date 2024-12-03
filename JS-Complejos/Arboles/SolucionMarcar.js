// Creamos la clase
class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value.horario < this.value.horario) {
            if (!this.left) this.left = new BinarySearchTree(value);
            else this.left.insert(value);
        } else {
            if (!this.right) this.right = new BinarySearchTree(value);
            else this.right.insert(value);
        }
    }
}

//Solución

BinarySearchTree.prototype.marcar = function (entradasVendidas) { 
    // Tu código aquí
    if (!this.value) return;

    const entradaVendida = entradasVendidas.find(
        (entrada) =>
            entrada.nombre === this.value.nombre && entrada.horario === this.value.horario
    );

    if (entradaVendida) {
        this.value.vendida = true;
    }

    if (this.left) this.left.marcar(entradasVendidas);

    if (this.right) this.right.marcar(entradasVendidas);
}

// Crear el árbol con las entradas
const entradas = new BinarySearchTree({ nombre: "Chaplin", horario: 10 });

entradas.insert({ nombre: "El Hobbit", horario: 7 });
entradas.insert({ nombre: "Masacre en Texas", horario: 22 });
entradas.insert({ nombre: "300", horario: 6 });
entradas.insert({ nombre: "Harry potter", horario: 23 });

// Definir las entradas vendidas
const entradasVendidas = [
    { nombre: "Harry potter", horario: 23 },
    { nombre: "300", horario: 6 },
    { nombre: "El Hobbit", horario: 7 }
];

// Marcar las entradas como vendidas
entradas.marcar(entradasVendidas);

// Función para imprimir el árbol
function printTree(node, level = 0) {
    if (!node) return;
    printTree(node.right, level + 1);
    console.log(" ".repeat(4 * level) + JSON.stringify(node.value));
    printTree(node.left, level + 1);
}

// Imprimir el árbol después de marcar
printTree(entradas);