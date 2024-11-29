/* 
Preparar Menu
INTRODUCCIÓN

Un barman desea preparar un menú de tragos, cada uno de las cuales tiene su correspondiente tiempo de preparación.
Existe una lista de tragos y una lista de tiempos de preparación correspondientes. Para ayudar al barman, implementa una función que reciba tres parámetros:
    1. Un arreglo de tragos.
    2. Un arreglo de tiempos.
    3. Número que indica el tiempo límite de preparación.
Ayuda al barman a preparar el menú, incluyendo en él todos los tragos cuyo tiempo de preparación sea igual o menor al tiempo límite.

INSTRUCCIONES

La función debe retornar un objeto con dos propiedades:
• tragos: Stack de strings, en la que cada string sea uno de los tragos.
• tiempos: Stack de números enteros, en la que cada número sea el tiempo de preparación de un trago.

Aclaración: ambas pilas deben estar en el mismo orden, de manera que el primer elemento de la pila tiempos represente el tiempo de preparación del primer elemento de la pila tragos.
Recibe como parámetros:
    • tragos: arreglo de strings, en el que cada string es un trago.
    • tiempos: arreglo de números en el que cada número es el tiempo de preparación de un trago.
    • tiempoLimite: número.

Aclaración: ambos arreglos estarán en el mismo orden, de manera que el primer elemento del arreglo tiempos represente el tiempo de preparación del primer elemento del arreglo tragos.

EJEMPLO
// INPUT
var listaDeTragos = ['Ron', 'Vodka', 'Whisky', 'Tequila' ]; 
var tiemposDePrep = [5, 3, 8, 10 ];
var tiempoLimite = 7;
prepararMenu(listaDeTragos, tiempos De Prep, tiempo limite);

// OUTPUT
{
    tragos: Stack: ['Vodka', 'Ron'],
    tiempos: Stack: [3, 5]
}

Language: JavaScript (Node.js) O
1>"use strict"; "

* Completa el método 'prepararMenu' a continuación.
* La función debe retornar un OBJETO.
* La función recibe por parámetro:
    - un ARREGLO DE STRINGS 'tragos'. un ARREGLO DE ENTEROS 'tiempos'. 
    - un NÚMERO 'tiempoLimite'.
* No modifiques nada por fuera del cuerpo de la función. */

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
