function atenderClientes (clientes) {
    // Tu código aquí:
    if (Object.keys(clientes).length === 0){
        return clientes;
    }

    const primerClienteId = Object.keys (clientes)[0]; 
    delete clientes[primerClienteId];
    return atenderClientes(clientes);
}