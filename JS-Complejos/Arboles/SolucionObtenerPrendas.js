//Vas a precisar la clase BinarySearchTree para crear el árbol binario de búsqueda

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value.num < this.value.num) {
            if (!this.left) this.left = new BinarySearchTree(value);
            else this.left.insert(value);
        } else {
            if (!this.right) this.right = new BinarySearchTree(value);
            else this.right.insert(value);
        }
    }

    obtenerPrendas(prenda, prendasObtenidas = []) {
        if (this.value.nombre === prenda) {
            prendasObtenidas.push(this.value.nombre);
        }

        if (this.left !== null) {
            this.left.obtenerPrendas(prenda, prendasObtenidas);
        }
        if (this.right !== null) {
            this.right.obtenerPrendas(prenda, prendasObtenidas);
        }

        return prendasObtenidas;
    }
}

//Aca creamos el Arbol con los valores del ejemplo

const prendas = new BinarySearchTree({ nombre: "Camiseta", num: 13 });

prendas.insert({ nombre: "Zapato", num: 7 });
prendas.insert({ nombre: "Camiseta", num: 24 });
prendas.insert({ nombre: "Pollera", num: 6 });
prendas.insert({ nombre: "Zapato", num: 16 });
prendas.insert({ nombre: "Zapato", num: 3 });
prendas.insert({ nombre: "Zapato", num: 4 });
prendas.insert({ nombre: "Zapato", num: 45 });


// Solucion 

BinarySearchTree.prototype.obtenerPrendas = function (prenda, prendasObtenidas = []) {
    // Tu código aquí
    if(this.value. nombre === prenda) {
        prendasObtenidas.push(this.value.nombre);
    }

    if (this. left !== null) {
        this.left.obtenerPrendas (prenda, prendasObtenidas);
    }
    if (this.right !== null) {
        this.right.obtenerPrendas (prenda, prendasObtenidas);  
    }

    return prendasObtenidas;
};


