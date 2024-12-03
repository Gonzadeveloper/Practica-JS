//Solucion

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