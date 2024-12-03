//Creamos la clase

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


//Creamos la lsita del ejemplo 

const lista = new LinkedList();
lista.add("Cocina");
lista.add("Dormitorio");
lista.add("Baño");
lista.add("Living");
lista.add("Garage");

//Solucion 

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