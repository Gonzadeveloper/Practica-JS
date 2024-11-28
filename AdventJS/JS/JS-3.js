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


const original = 'abcde'
const modified = 'abcd'


