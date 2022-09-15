let recuperoStorage = sessionStorage.getItem('carrito')
let micarrito = document.querySelector('.micarrito')
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
        micarrito.innerHTML = `<article class="son" >
        <img src="${product.imgSrc}" alt="" class="sons">
        <div class="nomb">
            <p>${product.titulo}</p><div class="nomb">
        </div>
        <p><strong> ${product.precio}</strong></p>
        </div>
    </article>`
    }
}
