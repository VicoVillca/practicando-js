console.log(typeof 1);
console.log(typeof "123");
console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);

console.log(typeof null === "object");


let estudiantes = ["Juan", "Maria", "Rosario"];

function agregarEstudiante(){
    const nombre = inputNombre.value.trim();

    if(nombre === ""){
        alert("Ingrese un nombre");
        return ;
    }

    estudiantes.push(nombre);
    inputNombre.value = "";

    actualizarLista();
}

function actualizarLista(){

    listaEstudiantes.innerHTML = "";
    for(let i =0 ;i<estudiantes.length;i++){
        const nombre = estudiantes[i];
        const li = document.createElement("li");
        li.textContent = nombre;
        

        const btn = document.createElement("button");
        btn.textContent = "Eliminar"
        btn.addEventListener('click', ()=>{
            eliminarNombre(i);
        });
        btn.classList.add("btn-eliminar");

        li.appendChild(btn);
        listaEstudiantes.appendChild(li);
    }
}

function eliminarNombre(index){
    estudiantes.splice(index,1);
    actualizarLista();
}

const inputNombre = document.getElementById("input-nombre");
const btnAgregarNombre = document.getElementById("btn-agregar");
const listaEstudiantes = document.getElementById("lista-estudiantes");

actualizarLista();

btnAgregarNombre.addEventListener('click', agregarEstudiante);