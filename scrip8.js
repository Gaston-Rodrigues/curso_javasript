let nombre = prompt("Hola! Gracias por tu visita, decinos tu nombre y apellido?");

if((nombre == null) || (nombre == "")){
alert  ("no ingresaste tu nombre valido")}

else {
    alert("Desde Pet-Shop laika , te damos la bienvenidad " + nombre)
    
    datos();
}
console.log(nombre);

function Usuario(user, nombreDeMascota,password){

    this.usuario = user;
    this.nombreDeMascota=nombreDeMascota;
    this.password=password;
}
    function datos (){
    let usuario = prompt ("ingrese su usuario");
    let nombreDeMascota = prompt ("ingrese el nombre de su mascota");
    let password = prompt ("Ingrese su password");
    
    let usuario1 = new Usuario (usuario,nombreDeMascota,password);

 console.log(usuario1)}

let confirmar = confirm('Desea comprar un producto en nuestro sitio web?');
console.log(confirmar);

if(confirmar){ 
    alert("Esperamos tu pedido")
    empezarCompra()

}else{
    alert("te esperamos en nuestro local baranquillas 1234")
}

function empezarCompra(){

    let listadeproductos = " ;"
    let seguircomprando = true; 

    while (seguircomprando){

        let numberproduct = prompt("Ingrese numero del producto");
        let alimento = compraAlimeto(numberproduct);

        if (alimento){

            console.log("Añadido :"+ alimento);
            listadeproductos += "\n"+alimento;

        }else{

            if (numberproduct === null){
                seguircomprando = false;
            } else{
            alert("Numero de producto erroneo")}
        }

    }

    if (listadeproductos != ""){
        let respuesta = confirm ("Estos son sus articulos seleccionados:"+listadeproductos); 
        if (respuesta){
            alert("Muchas Gracias por su compra, segun la disponibilidad de los trasporte, le comunicaremos que traspote le llevara su pedido a domicilio")
            alert  ("tu pedido sera enviado por transporte Cacho");
        }else{
            alert("Recargue la pagina")
        }
    }
}



function compraAlimeto(numberproduct){

    let alimento ;
    switch (numberproduct){

        case "1" :
            alimento = "pedigree";
                    break;
        case "2" :
            alimento= "raza";
                    break;

        case "3" :
            alimento = "sieger";
                    break;
        default :
                    alimento = false

    }

    return alimento ;
}


const envios= [
    {nombre: "Cacho", demora: 20},
    {nombre: "Carlos" , demora: 45},
    {nombre: "Leo" , demora: 50 },
] 

const transporte= envios.filter((tr) => tr.demora < 30)

console.log (transporte)




