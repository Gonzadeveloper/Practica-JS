function ordenarPeliculas(catalogo, nuevasPeliculas) {
    // Combinar el catálogo existente con las nuevas películas
    let arrayOrdenado = catalogo.concat(nuevasPeliculas);
  
    // Ordenar las películas
    for (let i = 0; i < arrayOrdenado.length; i++) {
      for (let prop in arrayOrdenado[i]) {
        let j = 0;
  
        while (j < arrayOrdenado.length) {
          if (
            typeof arrayOrdenado[i][prop] === "number" &&
            arrayOrdenado[i][prop] < arrayOrdenado[j][prop]
          ) {
            let element = arrayOrdenado[i];
            arrayOrdenado[i] = arrayOrdenado[j];
            arrayOrdenado[j] = element;
          }
          j++;
        }
      }
    }
  
    return arrayOrdenado;
}