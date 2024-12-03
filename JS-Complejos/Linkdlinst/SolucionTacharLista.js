//clase LinkedList con los métodos básicos necesarios, add para agregar nodos, print para visualizar la lista resultante

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(`(${current.value})`);
            current = current.next;
        }
        return result.join(" -> ");
    }
}

//Solucion

LinkedList.prototype.tacharLista = function (sinStock) { 
    // Tu código aquí:
    if(!sinStock||sinStock. length === 0) {
        return this
    }

    const newList = new LinkedList()
    let current = this. head
    
    while(current) {
        if(!sinStock.includes (current.value)) {
            newList.add(current.value)
        }
        current = current.next
    }
    return newList
}

//Crear la Linkedlist de ejemplo

const lista = new LinkedList();
lista.add("Pantalon");
lista.add("Zapatos");
lista.add("Camisa");
lista.add("Gafas");
lista.add("Sweater");