const stockProductos= [
 
    { id: 1,
      nombre: "Pedigree",
      descripcion: "Alimentos para perros adultos",
      peso: "21 kg",
      precio: 5000,
      cantidad: 1,
      img: "img/pedigree.adulto.jpg",  
   },

    { id: 2,
      nombre: "Raza",
      descripcion: "Alimentos para perros adultos",
      peso: "21 kg",
      precio: 4000,
      cantidad: 1,
      img: "img/raza.adulto.jpg", 
    },

    { id: 3,
      nombre: "Sieger",
      descripcion: "Alimentos para perros adultos",
      peso: "21 kg",
      precio: 6000,
      cantidad: 1,
      img: "img/sieger.adulto.jpg", 
     },
    { id: 4,
      nombre: "Sieger",
      descripcion: "Alimentos para perros cahorros",
      peso: "15 kg",
      precio: 7000,
      cantidad: 1,
      img: "img/sieger.cachorro.jpg", 
    },

    { id: 5,
      nombre: "Pedigree",
      descripcion: "Alimentos para perros cachorros",
      peso: "21 kg",
      precio: 4000,
      cantidad: 1,
      img: "img/pedigree.cachorro.jpg", 
      
    },

    { id: 6,
      nombre: "Raza",
      descripcion: "Alimentos para perros cachorros",
      peso: "21 kg",
      precio: 4500,
      cantidad: 1,
      img: "img/raza.cachorro.jpg", 
    },

    { id: 7,
      nombre: "Wiskas",
      descripcion: "Alimentos para gatos",
      peso:"10 kg",
      precio: 5000,
      cantidad: 1,
      img: "img/wiskas.adulto.jpg", 
    },
    { id: 8,
      nombre: "Sabrositos",
      descripcion: "Alimentos para gatos",
      peso: "20 kg",
      precio: 5000,
      cantidad: 1,
      img: "img/sabrositos.adulto.png", 
    },
    { id: 9,
      nombre: "Purina",
      descripcion: "Alimentos para gatos",
      peso: "20 kg",
      precio: 8000,
      cantidad: 1,
      img: "img/purina.adulto.jpg", 
    },
   

] 


let carrito = []
const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [] 
  mostrarCarrito()
})


//para que el producto se pueda visualizar en el pagina//
 stockProductos.forEach((prod) => {
  const{id,nombre,descripcion,peso,precio,cantidad,img}= prod
contenedor.innerHTML += `
  <div class="card 3" style="width: 280px; margin:25px">
  <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${descripcion}</p>
     <p class="card-text">Peso: ${peso}</p>
    <p class="card-text">Precio: $ ${precio}</p>
    <p class="card-text">Cantidad: ${cantidad}</p>
    <button onclick="agregarProducto(${id})"class="btn btn-primary" onclick="agregarProducto(${id})">Comprar</button>
  </div>
</div>
  `;
});

vaciarCarrito.addEventListener("click",()=>{

  carrito.length= [];
  mostrarCarrito()
})
//para agregar la cantidad de productos//
function agregarProducto(id){

    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id)
      carrito.push(item)
    }
    mostrarCarrito()
  
  };
//para que se puede mostrar en el carrito cada producto que el cliente seleccione//
const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
 modalBody.innerHTML = "";
 carrito.forEach((prod) => {
  const { id, nombre,precio, img, cantidad } = prod;

  modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button  onclick="eliminarProducto(${id})"class="btn btn-danger">Eliminar producto</button>
        </div>
      </div>
      `;
   } );
    carritoContenedor.textContent = carrito.length;
    guardarStorage()
  
   
   carritoContenedor.textContent = carrito.length;
   //para sumar el precio total del carrito// 
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0);
    guardarStorage()
  
 }
//trae todos los productos menos al que se distitnos de bolsaid//
   function eliminarProducto(id) {
    const bolsaId = id;
    carrito = carrito.filter((bolsa) => bolsa.id !== bolsaId);
    mostrarCarrito();
  }
  //para que cada vez que recargue la pagina, quede cargado los productos seleccionados anteriormente//
  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } 

  //una vez que el cliente haga click en finaliza compra, le sale un sweet.alet y el carrito se reinicia//
//si no tiene nada cargado le sale un sweetalert//
if (procesarCompra) 
procesarCompra.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      title: "¡Tu carrito está vacio!",
      text: "Compra algo para continuar con la compra",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {Swal.fire({
      icon: 'success',
      title: 'Tu compra fue realizada con  exito',
      showConfirmButton: false,
      timer: 1500,
       
  });  
   carrito.length= [] ;
   mostrarCarrito ();
location.href = "sede.html"}
     ;
});
