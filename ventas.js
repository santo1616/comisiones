const VENTAS_BASE = 5;

function calcularComision(numeroVentas, PrecioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (PrecioProducto * 0.10)

    }
    return comision

}

function calcular() {
    
    // recuperamos propiedades de las cajas de texto
    //1 let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //2 let componenteVentas = document.getElementById("txtVentas");
    //3let componentePrecio = document.getElementById("txtPrecio");

    // recuperamos el valor de las cajas de texto

    //1 let sueldoBaseStr = componenteSueldoBase.value;
    //2 let numeroVentasStr = componenteVentas.value;
    //3 let PrecioProductoStr = componentePrecio.value;

    //4 let = sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //5let = numeroVentasStr = recuperarTexto("txtVentas");
    //6let = PrecioProductoStr = recuperarTexto("PrecioProductosStr");



    // convertimos el texto a numero 

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

    

    let comision = calcularComision(numeroVentas, PrecioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;



    // 
}