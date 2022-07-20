/* CRUD - METODOS http
----------------------
CREATE --> POST
READ --> GET
UPDATE --> PUT/PATCH
DELETE --> DELETE */

// const listaClientes = ()=>{
//   const promesa = new Promise((resolve,reject)=>{
//     const http = new XMLHttpRequest()

//     http.open("GET", "http://localhost:3000/perfil")    //abrir http (método, url)
//     http.send() //se encarga de enviar la petición al servidor (http://localhost:3000/perfil)
    
//     //cuando reciba una respuesta del servidor se ejecuta la siguiente arrow function:
//     http.onload = ()=>{
//       const respuesta = JSON.parse(http.response) /* http.response devuelve un texto con formato "array", pero no es un array y entonces no andan los métodos de los array
//       entonces se corrige poniendo el metodo JSON.parse(http.response), lo que hace esto es un array del http.response y en consecuencia se puede usar  el forEach */
//       if(http.status >= 400){
//         reject(respuesta)
//       } else{
//         resolve(respuesta)
//       }
//     };
//   });
//   return promesa
//   }; 

//la funcion listaClientes de arriba se puede reemplazar, para hacerlo más corto con Fetch API:
//fetch devuelve directamente una promesa asique nos da acceso a poner .then y adentro trabajar con lo que responda el servidor
const listaClientes = ()=>{
  return fetch("http://localhost:3000/perfil").then((respuesta)=>{  //como default, fetch usa metodo GET
    return respuesta.json() //este metodo reemplaza el JSON.parse(), a la respuesta del servidor la pasa a formato json
  })  
};

const cargaCliente = (nombre, email) =>{
  return  fetch("http://localhost:3000/perfil",{ //url a la que van los datos (el servidor)
          method: "POST", //por default usa metodo GET (obtener del servidor), hay que ponerle el metodo POST (que carga datos en el servidor)
          headers:{    //que tipo de archivo va a recibir el servidor
            "Content-Type": "application/json"
          },
          body:JSON.stringify({ //lo que se va a enviar en el cuerpo de la peticion
            nombre, //y como la comunicacion HTTP trabaja con texto
            email,  // hay que pasar este objeto a texto con JSON.stringify
            id: uuid.v4()
          })
          })
};

const eliminaCliente = (id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "DELETE"
  })
};

const editaCliente = (id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`)
          .then((respuesta)=> respuesta.json())
};

const actualizaCliente = (nombre, email, id)=>{
  return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          email,
        })
        })
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error))
};

export const clienteServicio = {
  listaClientes,
  cargaCliente,
  eliminaCliente,
  editaCliente,
  actualizaCliente,
};