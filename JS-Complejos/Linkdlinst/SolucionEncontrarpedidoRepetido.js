//Clase

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}


LinkedList.prototype.encontrarPedidoRepetido = function (nombre) {
// Tu código aquí:
    let repetidos = new LinkedList();
    
    let current = this.head


    while (current) {
        if (current.value.nombre === nombre) {
            repetidos.add(current.value);
        }
        current = current.next;
    };

    if (!repetidos.head) {
        return false;
    } else return repetidos;
}



// Ejemplo del ejercicio
const listaDePedidos = new LinkedList();
listaDePedidos.add({ nombre: 'Franco', trago: 'Fernet' });
listaDePedidos.add({ nombre: 'Martin', trago: 'Gancia' });
listaDePedidos.add({ nombre: 'Franco', trago: 'Fernet' });


const resultado = listaDePedidos.encontrarPedidoRepetido('Franco');