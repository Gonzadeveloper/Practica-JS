//Clase

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

//Solucion

function acomodarPeliculas (listaDePeliculas, nombre){ 
    const pelis = new Stack();
    
    for (const peliculas of listaDePeliculas) {
        if (peliculas.nombre !== nombre && peliculas.duracion >= 1){ 
            pelis.push(peliculas);
        }
    }
    return pelis;
}

// Ejemplo

const listaDePeliculas = [
    { nombre: 'Avengers: Endgame', estreno: 2019, duracion: 3 },
    { nombre: 'The Godfather', estreno: 1972, duracion: 2.9 },
    { nombre: 'Pulp Fiction', estreno: 1994, duracion: 2.5 },
    { nombre: 'Avengers: Endgame', estreno: 2019, duracion: 3 },
    { nombre: 'Short Film', estreno: 2020, duracion: 0.5 },
    { nombre: 'Inception', estreno: 2010, duracion: 2.5 },
    { nombre: 'The Godfather2', estreno: 1972, duracion: 2.9 },
];


const peliculaRepetida = 'Avengers: Endgame';


const resultado = acomodarPeliculas(listaDePeliculas, peliculaRepetida);

