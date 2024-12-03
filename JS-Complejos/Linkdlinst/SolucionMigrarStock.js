// Clase 
function Nodo(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function(value) {
    const newNode = new Nodo(value);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
};

// Ejemplo
const stock = new LinkedList();

// Agregar nodos a la lista
stock.add({ nombre: 'Camisetas', stock: 22 });
stock.add({ nombre: 'Pantalones', stock: 12 });
stock.add({ nombre: 'Zapatos', stock: 45 });
stock.add({ nombre: 'Bufandas', stock: 12 });
stock.add({ nombre: 'Sacos', stock: 4 });

//Solucion 

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
