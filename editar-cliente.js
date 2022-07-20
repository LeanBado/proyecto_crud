import { clienteServicio } from "./cliente-servicio.js"

const obtenerData =() =>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id")
    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")

    if(id == null){
        window.location.href = "/screens/error.html"
    }

    clienteServicio.editaCliente(id).then((rta)=> {
        nombre.value= rta.nombre;
        email.value = rta.email;
    })
};
obtenerData();

const table = document.querySelector("[data-form]")
table.addEventListener("submit", (event)=>{
    event.preventDefault()

    const url = new URL(window.location)
    const id = url.searchParams.get("id")
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value

    clienteServicio.actualizaCliente(nombre, email, id).then(()=>{
        window.location.href = "/screens/edicion_concluida.html"
    })

})