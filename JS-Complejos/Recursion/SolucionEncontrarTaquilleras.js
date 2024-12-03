function encontrarTaquilleras (cartelera, taqui = []) {
    if (cartelera.length === 0) {
        return "No se encontraron peliculas taquilleras";
    }
    if (cartelera[0].taquillera === true) {
        taqui.push(cartelera[0]);
    }
    if (cartelera.length > 1) {
        return encontrarTaquilleras (cartelera.slice(1), taqui);
    }
    if(taqui.length === 0) {
        return "No se encontraron peliculas taquilleras"
    }
    return taqui;
}
