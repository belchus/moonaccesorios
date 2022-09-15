let recuperoStorage = sessionStorage.getItem('carrito')
let micarrito = document.querySelector('micarrito')
let storage = JSON.parse(recuperoStorage)
console.log(storage)

let carrito = [];
if (recuperoStorage){
    carrito=storage
    MostrarCarrito(carrito)
}else {
    micarrito.innerHTML = "El carrito esta vacio"
}
function MostrarCarrito(storage){
    for (product of storage){
        const {imgSrc, id, titulo} = product
        micarrito.innerHTML = `<article class="son" >
        <img src="${imgSrc}" alt="" class="sons">
        <div class="nomb">
            <p>${titulo}</p><div class="nomb">
        </div>
        <div class="boton  boton-${id}">Ver detalle</div>
                        <input type='hidden' class='info-id' value="${id}"/>
                    </div>
        </div>
    </article>`
    }
}
