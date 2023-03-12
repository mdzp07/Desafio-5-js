const tareasList = [
    { id: 001, name: "Hacer la comida" },
    { id: 002, name: "Estudiar javascript" },
    { id: 003, name: "Pasear a Rocco" },
]

const input = document.getElementById("entradaTareas");
const listaPendientes = document.getElementById("lista-pendientes");
const listaRealizadas = document.getElementById("lista-realizadas");
const botonAgregar = document.getElementById("botonAgregar");
let totalTareas = document.getElementById("totalIngresos");
let totalRealizadas = document.getElementById("totalListo");
let totalPendiente = document.getElementById("totalPendiente");

function renderTareas() {
    let html = "";
    for (let tarea of tareasList) {
        html +=
            `   <table>
        <tr>
            <td style="width: 20px;">✍️</td>
            <td style="width: 20px;"> ${tarea.id}</td>
            <td>${tarea.name}</td>
            <td><button style="cursor: pointer; margin-left:1rem;" onclick="borrar(${tarea.id})"> <i style="color:red; font-size:16pt;" class="fa-regular fa-trash-can"></i></button></td>
            <td><button style="cursor: pointer;" onclick="tareaTerminada(${tarea.id})"> <i style="color:green; font-size:16pt;"class="fa-regular fa-circle-check"></i> </button></td>
        </tr>    
        </table>
    `
            ;
    }
    listaPendientes.innerHTML = html;
    totalTareas.innerHTML = tareasList.length+contadorRealizadas;
}

function borrar(id) {
    const idIndice = tareasList.findIndex((tarea) => tarea.id === id);
    tareasList.splice(idIndice, 1);
    idNumero;
    contadorTareas --;  
    renderTareas();
}

let contadorRealizadas = 0;

function tareaTerminada(id) {
    const idIndice = tareasList.findIndex((tarea) => tarea.id === id);
    const tarea = tareasList[idIndice];
    listaRealizadas.innerHTML += `   <table>
    <tr>
        <td style="width: 20px;"> ${tarea.id}</td>
        <td>${tarea.name}</td>
        <td>👍</td>
    </tr>    
    </table>
`
    contadorRealizadas++;
    tareasList.splice(idIndice, 1);
    totalRealizadas.innerHTML = contadorRealizadas;
    renderTareas();
}



let idNumero = tareasList.length;
let contadorTareas = tareasList.length;

botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value!=0) {
        nuevaEntrada = input.value;
        idNumero++;
        contadorTareas++;
        tareasList.push({ id: idNumero, name: nuevaEntrada })
        renderTareas();
        input.value = "";
        totalTareas.innerHTML = contadorTareas;
    } else {
        alert("No ha ingresado ninguna tarea.");
    }
}
)

renderTareas();