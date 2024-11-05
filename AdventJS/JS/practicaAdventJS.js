//Ejercicio 1

//En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

/* Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.*/

function findFirstRepeated(gifts) {
    const vistos = new Set();
  
    for(const num of gifts){
      if(vistos.has(num)){
        return num
      } else {
        vistos.add(num)
      }
    }
    return -1
}

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)



//Ejercicio 2

/*En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.*/

function manufacture(gifts, materials) {
    const avableMaterials = materials.split('');
  
    let avaibleGifts = []
  
    for(const gift of gifts){
      let buildGift = true
  
      for( const letter of gift){
        if(avableMaterials.indexOf(letter) === -1){
          buildGift = false
          break
        }
      }
      if(buildGift){
        avaibleGifts.push(gift)
      }  
    }
    return avaibleGifts
}

const gifts = ["tren", "oso", "pelota"]
const materials = "tronesa"



//Ejercicio 3

/*En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.*/


function findNaughtyStep(original, modified) {
    const stepCount = {};
    // Contamos los pasos en la secuencia original
    for (const step of original) {
        stepCount[step] = (stepCount[step] || 0) + 1;
    }
    
    // Restamos los pasos en la secuencia modificada
    for (const step of modified) {
        if (stepCount[step]) {
            stepCount[step]--;
        } else {
            // Si no existe en original, este es el paso extra
            return step;
          }
        }
        // Buscamos si hay algún paso que falte en modified
        for (const step in stepCount) {
          if (stepCount[step] > 0) {
            return step;
          }
        }

        // Si no hay diferencias
        return '';
}

const original = 'abcd'
const modified = 'abcde'



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


//const a = decode('hola (odnum)')
//console.log(a) // hola mundo

//const b = decode('(olleh) (dlrow)!')
//wconsole.log(b) // hello world!

//const c = decode('sa(u(cla)atn)s')
//console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

