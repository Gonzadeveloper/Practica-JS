/*
4. Calcular impuestos

INTRODUCCIÓN

Trabajas en la administración de una empresa y debes calcular los impuestos de la misma.
Para ello deberás escribir una función que reciba los impuestos del año y devuelve el cálculo.

INSTRUCCIONES

La función debe recibir por parámetro un arreglo de números con las boletas de los impuestos anuales. Dependiendo cada caso responde:
• Si lo que llega por parámetro no es un arreglo, debes devolver el string "Error".
• Si no hay impuestos a pagar debes devolver false.
• Si no hay inconvenientes, debes devolver la suma de todos los impuestos para conocer el total.

EJEMPLO
calcular Impuestos([1, 2, 3, 4, 5]); // Devuelve →→→ 15
calcular Impuestos ([]); // Devuelve → false
calcular Impuestos({}); // Devuelve → Error

ACLARACIONES
• Únicamente se puede resolver aplicando recursión.
• Si es necesario, puedes agregar default parameters a la función.

Language: JavaScript (Node.js)
1 'use strict'; ...

Completa la función 'calcular Impuestos a continuación.

* La función debe retornar un NÚMERO, un STRING o FALSE dependiendo el caso. 
* La función recibe por parámetro(s):

1. ARREGLO DE NÚMEROS 'impuestos' u otro tipo de dato, dependiendo el caso.

*No modifiques nada por fuera del cuerpo de la función.
*/

function calcularImpuestos (impuestos, index = 0, total = 0) { 
    // Tu código aquí:
    if(!Array.isArray (impuestos)){
        return "Error"
    }
    if(impuestos.length === 0) {
        return false
    }
    
    if(index >= impuestos.length) {
        return total
    } else {
        total = total + impuestos[index];
        return calcularImpuestos (impuestos, index + 1, total)
    }
  
}

