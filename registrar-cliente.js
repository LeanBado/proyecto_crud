import {clienteServicio} from "/cliente-servicio.js"

const registrar = document.querySelector("[data-form]")
registrar.addEventListener("submit", (event) =>{
    event.preventDefault()
    const nombre = document.querySelector("#nombre").value
    const email = document.querySelector("#email").value
    clienteServicio
    .cargaCliente(nombre, email)
    .then((respuesta)=>{
        window.location.href = "/screens/registro_completado.html"
    })
    .catch((err)=>{
        console.log(err)
    })
})