//Ejercicio 5

function cyberReindeer(road, time) {
  let copiedRoad = road.split('')
  let countTime = time
  let count = 0;

  for(let i = 0; i < copiedRoad.length; i++){
    countTime--;
    count++;
    if(i === time){
      break
    }
  }

  return count
}

