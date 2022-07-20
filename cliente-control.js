import {clienteServicio} from "/cliente-servicio.js" 


function creaLinea(nombre,apellido, id){
 
    const tr = document.createElement("tr")
    const linea = `<tr>
    <td class="td" data-td>${nombre}</td>
    <td>${apellido}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  </tr>`;
  tr.innerHTML = linea
  const btn = tr.querySelector("button")
  btn.addEventListener("click", ()=>{
    clienteServicio.eliminaCliente(id)
    .then(respuesta =>{
      console.log(respuesta)
    })
    .catch(err =>{
      alert("error")
    })
  })
  return tr
};
const table = document.querySelector("[data-table]")


clienteServicio.listaClientes()
  .then((dato)=>{
    dato.forEach(elemento => {
      const respuestaConDatos = creaLinea(elemento.nombre, elemento.email, elemento.id)
      table.appendChild(respuestaConDatos)
      });
  })
  .catch((error)=> console.log("ocurrio un error"))