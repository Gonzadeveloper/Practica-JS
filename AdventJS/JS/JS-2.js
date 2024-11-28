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