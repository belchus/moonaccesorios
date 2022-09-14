let recuperoStorage = sessionStorage.getItem('carrito')
let micarrito = document.querySelector('micarrito')
let storage = JSON.parse(recuperoStorage)
console.log(storage)

let carrito = [];
if (recuperoStorage != null){
carrito = JSON.parse(recuperoStorage)
}else{
    MostrarCarrito()
}
function MostrarCarrito(){
for (storage of storages){
    storage.onclick = (e) => {
        let element = e.target.parentElement
        let id = element.attributes.id.value
        let shop = pulsera.find(e => e.id == id)

        if(carrito.includes(shop)){
   element.classList.remove('liked')
   let eliminoprod = carrito.indexOf(shop)
   carrito.splice(eliminoprod,1)
   let sacaRepetido = document.querySelector(`#id-${shop.id}`)
   resultadosCarrito.removeChild(sacaRepetido)
   swal("Eliminado del carrito", "", "error");
        } else{
            element.classList.add('liked')
            carrito.push(shop)
            swal("Agregado al carrito", "", "success");
            micarrito.innerHTML += `<article class="son" id="id-${shop.id}" >
            <img src="${shop.img}" alt="" class="sons">
            <div class="nomb">
                <p>${shop.nombre}</p>
                <p>${shop.precio}</p>
            </div>
        </article>`
        }

        
       
localStorage.setItem('carrito',JSON.stringify(carrito))


}
}
}
