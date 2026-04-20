function recuperarTexto(idComponente) {

    let componente = document.getElementById(idComponente);
    let valor=componente.value;
    
    return valor;
}

function recuperarFloat(idComponente){

    let valorTexto = recuperarTexto (idComponente);
    let valorFLoat = parseFloat(valorTexto);
    
    return valorFLoat;

    
}