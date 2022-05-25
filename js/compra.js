const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById("carrito");
const procesarCompraBtn = document.getElementById("procesar-compra");
const cliente = document.getElementById("cliente");
const correo = document.getElementById("correo");
const dni = document.getElementById("dni");
const tarjeta = document.getElementById("tarjeta");
const año = document.getElementById("anio");
const mes = document.getElementById("mes");
const ccv = document.getElementById("cvv");
const direccion = document.getElementById("direccion");


cargarEventos();

function cargarEventos() {
  document.addEventListener(
    "DOMContentLoaded",
    compra.leerLocalStorageCompra()
  );

  carrito.addEventListener("click", (e) => {
    compra.eliminarProducto(e);
  });

  compra.calcularTotal();

  procesarCompraBtn.addEventListener("click", procesarCompra);
}

function procesarCompra(e) {
  e.preventDefault();

  if (compra.obtenerProductosLocalStorage().length === 0) {
    Swal.fire({
      type: "error",
      title: "Ooops...",
      text: "No hay productos",
      showConfirmButton: false,
      timer: 1000,
    }).then(function () {
      window.location = "index.html";
    });
  } else if (cliente.value === "" || correo.value === "" || dni.value === "" || tarjeta.value === "" || tarjeta.lenght >= 17  || anio.value === "" || mes.value=== "" || ccv === "" ||direccion.value === "") {
    Swal.fire({
      type: "error",
      title: "Ooops...",
      text: "Ingrese sus datos",
      showConfirmButton: false,
      timer: 1000,
    });
  } else {
 
  
    const cargandoGif = document.querySelector("#cargando");
    cargandoGif.style.display = "block";
    cargandoGif.height ="250";

    const enviado = document.createElement("img");
    enviado.src = "./imagenes/mail.gif";
    enviado.style.display = "block";
    enviado.width = "100";
    enviado.height = "150";

    setTimeout(() => {
      cargandoGif.style.display = "none";
      document.querySelector("#loaders").appendChild(enviado);
    }, 5000);
    setTimeout(() => {
      enviado.remove();
      compra.vaciarLocalStorage();
      window.location = "index.html";
    }, 10000);
  }
}































//cliente.value === "" || correo.value === "" || dni.value === "" || tarjeta.value === "" || tarjeta.lenght >= 17  || direccion.value === ""