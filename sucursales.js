const listado = document.getElementById("listado");
const listadoProductos= "json/productos.json";




fetch(listadoProductos)
.then(respuesta => respuesta.json())
.then(datos => {
  datos.forEach(producto =>
    {
      listado.innerHTML += `
      <div class="card 3" style="width: 450px; margin:25px">
      <img class="card-img-top mt-2" src="${producto.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>   
    </div>
    `
    });
   
    })   
