//Solucion

function encontrarMasCaros(tragos, precio) {
    // Tu código aquí:
    if (tragos.length === 0) {
        return "No hay tragos disponibles";
    }
    
    let primerTrago = tragos[0];
    
    if (primerTrago.precio >= precio) {
        let restantes = encontrarMasCaros(tragos.slice(1), precio); 
        return [primerTrago, ...restantes];
    } else {
        return encontrarMasCaros (tragos.slice(1), precio);
    }
}