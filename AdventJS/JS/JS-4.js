

//Ejercicio 4
/* En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.*/

function decode(message) {
    const stack = ['']; // Empezamos con un bloque vacío en la pila
    for (const char of message) {
      if (char === '(') {
        // Añadir un nuevo bloque vacío cuando encontramos un paréntesis de apertura
        stack.push('');
      } else if (char === ')') {
        // Cuando encontramos un paréntesis de cierre, invertimos el bloque
        const reversed = stack.pop().split('').reverse().join('');
        // Y lo añadimos al bloque anterior
        stack[stack.length - 1] += reversed;
      } else {
        // Agregar el carácter al bloque actual
        stack[stack.length - 1] += char;
      }
    }
  
    // El resultado final está en el primer bloque de la pila
    return stack[0];
  }
  
  let stack = ['hola', 'mundo']
  

  //const a = decode('hola (odnum)')
//console.log(a) // hola mundo

//const b = decode('(olleh) (dlrow)!')
//wconsole.log(b) // hello world!

//const c = decode('sa(u(cla)atn)s')
//console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus