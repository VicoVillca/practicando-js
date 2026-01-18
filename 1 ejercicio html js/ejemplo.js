//Definimos variables
let nombres =[]
//Definimos funciones
function agregarNombre(){
    const nombre = inputNombre.value.trim();
    if(nombre === ''){
        alert("Ingrese un nombre valido");
        return;
    }
    nombres.push(nombre);
    inputNombre.value = "";
    actualizarLista();
}
function actualizarLista(){
    listaNombres.innerHTML = "";

    for(let nombre of nombres){
        let li = document.createElement('li');
        li.textContent = nombre;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "Eliminar"
        btnEliminar.classList.add("btn-eliminar");

        btnEliminar.addEventListener('click',(index) =>{
            eliminarNombre(index);
        });

        li.appendChild(btnEliminar);
        listaNombres.appendChild(li);
    }
}
function eliminarNombre(index){
    nombres.splice(index,1);
    actualizarLista();
}
let inputNombre = document.getElementById("input-nombre");
let btnGuardarNombre = document.getElementById("btn-guardar-nombre");
let listaNombres = document.getElementById("lista-nombres");

btnGuardarNombre.addEventListener("click", agregarNombre);
