

///fetch------------------------------

    const formularioDeBusqueda = document.querySelector("#formDeBusqueda");
    const inputPorNombre = document.querySelector("#inputNombre");
    const inputId = document.querySelector("#inputId");
    const img = document.querySelector(".divImg");
    
    





    fetch("./datos.json")
    .then((response) => response.json())
    .then((data) =>{ 
      data.forEach((element)  => {
          
          img.innerHTML+=`
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-bold">${element.nombre}</h4>
                                </div>
                                <div class="card-body">
                                    <img src="${element.img}" class="card-img-top">
                                    <h1 class="card-title pricing-card-title precio">$ <span class="">${element.precio}</span></h1>

                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Talle: ${element.talle}</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <a href="" class="btn btn-block btn-dark agregar-carrito" data-id="${element.id}">Comprar</a>
                                </div>
                        </div>
          `
            
        });
    });
