/**
Crea una función que reciba un array de objetos representando productos y devuelva un resumen con:
    El producto más caro
    El producto más barato
    El precio promedio
    Número total de productos
    Los productos en stock (stock > 0)
 */
function analizarInventario(arr){
    if(!Array.isArray(arr)){
        return {};
    }
    if(arr.length ===0){
        return {
            masCaro: undefined,
            masBarato: undefined,
            precioPromedio: 0,
            totalProductos: 0,
            productosEnStock: []
        };
    }
    let masCaro = arr[0];
    let masBarato = arr[0];
    let precioPromedio = 0;
    let productosEnStock = [];
    for(let producto of arr){
        if(producto.precio > masCaro.precio)
            masCaro = producto;
        if(producto.precio < masBarato.precio)
            masBarato = producto;
        precioPromedio = precioPromedio + producto.precio;
        if(producto.stock > 0)
            productosEnStock.push(producto);
    }
    return {
        masCaro: masCaro,
        masBarato: masBarato,
        precioPromedio: precioPromedio / arr.length,
        totalProductos: arr.length,
        productosEnStock: productosEnStock
    };
}

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 0 },
    { id: 3, nombre: "Teclado", precio: 80, stock: 10 },
    { id: 4, nombre: "Monitor", precio: 350, stock: 3 }
];
console.log(analizarInventario(productos));



/*
Formato de salida 
{
    masCaro: { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
    masBarato: { id: 2, nombre: "Mouse", precio: 25, stock: 0 },
    precioPromedio: 413.75,
    totalProductos: 4,
    productosEnStock: [
        { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
        { id: 3, nombre: "Teclado", precio: 80, stock: 10 },
        { id: 4, nombre: "Monitor", precio: 350, stock: 3 }
    ]
}
*/