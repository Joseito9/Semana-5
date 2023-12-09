const tareas = [
  { id: 1, nombre: "Hacer mercado", completada: false },
  { id: 2, nombre: "Estudiar para la prueba", completada: false },
  { id: 3, nombre: "Sacar a pasear a max", completada: false },
];

let pintar = "";
let tareasRealizadas = 0;

const listaTarea = document.querySelector(".tareas");
const agregar = document.querySelector(".agregar-tarea");
const btn = document.getElementById("btn");
const total = document.getElementById("total");
const realizadas = document.getElementById("realizadas");

const agregarTarea = () => {
  const nombreTarea = agregar.value.trim();
  if (!nombreTarea) {
    alert("Error");
    return;
  }
  const ultimaTarea = tareas[tareas.length - 1];
  const nuevaTarea = {
    id: ultimaTarea ? ultimaTarea.id + 1 : 1,
    nombre: nombreTarea,
    completada: false,
  };
  tareas.push(nuevaTarea);
  pintar = "";
  pintarTareas();
};

btn.addEventListener("click", agregarTarea);

const pintarTareas = () => {
  tareas.forEach((tarea) => {
    pintar += `
    <div class="nueva-tarea">
      <p>${tarea.id}</p> 
      <p>  
      <span> ${tarea.nombre}</span>
        <input id="${tarea.id}" type="checkbox" onclick = "cambiarEstado (${
      tarea.id
    })"/>
        <i class="fa-solid fa-trash" onclick="eliminarTarea(${tareas.indexOf(
          tarea
        )})"></i>
      </p>
    </div>
      `;
    if (tarea.completada) {
      tareasRealizadas++;
    }
  });

  listaTarea.innerHTML = pintar;
  total.innerHTML = tareas.length;
  realizadas.innerHTML = tareasRealizadas;
};

const cambiarEstado = (id) => {
  let icon = document.getElementById(id);
  if (icon.checked) {
    console.log("Chequeao");
    tareasRealizadas += 1;
    realizadas.innerHTML = tareasRealizadas;
  } else {
    console.log("noChequeao");
    tareasRealizadas -= 1;
    realizadas.innerHTML = tareasRealizadas;
  }
};

const eliminarTarea = (tarea) => {
  console.log(tarea);
  tareas.splice(tarea, 1);
  pintar = "";
  pintarTareas();
};

pintarTareas();
