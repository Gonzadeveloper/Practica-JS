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

function prepararMenu (tragos, tiempos, tiempoLimite) { 
    // Tu código aquí
    let menu = {tragos: new Stack(), tiempos: new Stack()}
    
    for (let i = tiempos.length - 1; i >= 0; i--){ 
        if(tiempos [i]<=tiempoLimite) {
        menu.tragos.push(tragos[i]);
        menu.tiempos.push(tiempos[i]);
        }
    }
    return menu;
}

//Ejmeplo

var listaDeTragos = ['Ron', 'Vodka', 'Whisky', 'Tequila' ]; 
var tiemposDePrep = [5, 3, 8, 10 ];
var tiempoLimite = 7;


const resultado = prepararMenu(listaDeTragos, tiemposDePrep, tiempoLimite);
