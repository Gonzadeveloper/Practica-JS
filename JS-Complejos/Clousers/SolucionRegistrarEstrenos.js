function pelisEstrenos (listaDePeliculas) {
    // Tu código aquí
    return function (pelisEstrenos) {
        const actualizado = listaDePeliculas.map(pelicula => ({ ...pelicula }));
    
    for (const estreno of pelisEstrenos) {
        const LowerCaseEstreno = estreno.toLowerCase();
        const peliculaEnCatalogo = actualizado. find (pelicula => pelicula.nombre.toLowerCase() === LowerCaseEstreno);
        
        if (peliculaEnCatalogo) {
            peliculaEnCatalogo.estreno = true;
        } else {
            return 'No se encontro alguna de esas peliculas en nuestro catalogo';
        }
    }
    return actualizado;
    };
}
