/**
entrada: [3, 1, 8, 4, 6, 5]
proceso: [8, 4, 6] → [16, 8, 12] → [8, 12, 16]
salida: [8, 12, 16]
 */

function filtrarOrdenar(arr){
    if(!Array.isArray(arr)){
        return [];
    }
    return arr.filter(numero => numero %2===0)
    .map(numero => numero*2)
    .sort((a,b)=> a-b);
}