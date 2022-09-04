

let formulario = document.querySelector('#formulario')
let mensajeError = document.querySelector('.errorFormulario')
let contrasena = document.querySelector('input[type="password"]')
if (formulario){

formulario.addEventListener('submit', validar)

function validar(e){
    e.preventDefault()
    console.log(e)
    let formArray = e.target
    console.log(e)

    let usuario = formArray[0]
    let contrasena = formArray[1]



   /* if(usuario.value.length < 5){
        mensajeError.style.display = 'block'
        mensajeError.innerText = 'El usuario ingresado no existe'
        mensajeError.style.color = 'red'
    }else{
        mensajeError.style.display = 'none'
    }
    if(!contrasena.value){
        mensajeError.style.display = 'block'
        mensajeError.innerText = 'La contraseña ingresada es incorrecta'
        mensajeError.style.color = 'red'
    }
    
*/

mensajeError.style.color = 'red'
usuario.value.length < 5?  mensajeError.innerText = 'El usuario ingresado es incorrecto' : mensajeError.style.display = 'none'
!contrasena.value? mensajeError.innerText = 'La contraseña ingresada es incorrecta' : none
}
}

let container = document.querySelector('.mother')
let article = "" 


fetch("https://my-json-server.typicode.com/belchus/parafetch/db")
     .then((response) => {
return response.json()
     })
    .then((json) => {
        let Aros = json.aros
        Aros.forEach(ars => {
        const {imgSrc, id, titulo} = ars
        
   container.innerHTML +=  `<article class="son" >
       <img src="${imgSrc}" alt="" class="sons">
       <div class="nomb">
           <p>${titulo}</p><div class="nomb">
       </div>
       <div class="boton  boton-${id}">Ver detalle</div>
                       <input type='hidden' class='info-id' value="${id}"/>
                   </div>
       </div>
   </article>`
   container.innerHTML += article
      })
    })
    
const botonesVerDetalle = document.querySelectorAll('.boton')
console.log(botonesVerDetalle)
const popup = document.querySelectorAll('.popupDetalle')
console.log(popup)

for(verDetalle of botonesVerDetalle){
    verDetalle.onclick = (e) => {
       console.log(popup)
    }
}

//let botones = document.querySelectorAll('.boton')
//console.log(botones)
let svgs = document.querySelectorAll('svg')
let resultadosCarrito = document.querySelector('.micarrito')
let recuperoStorage = sessionStorage.getItem('carrito')

let storage = JSON.parse(recuperoStorage)
//let carrito = JSON.parse(recuperoStorage)
//console.log(carrito)
let carrito = [];
if (recuperoStorage != null){
carrito = JSON.parse(recuperoStorage)
}else{
    MostrarCarrito()
}

function MostrarCarrito(){
for (svg of svgs){
    svg.onclick = (e) => {
        let element = e.target.parentElement
        //element.classList.toggle('liked')
        let id = element.attributes.id.value
        let shop = mispulseras.find(e => e.id == id)

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
            resultadosCarrito.innerHTML += `<article class="son" id="id-${shop.id}" >
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


function sumar(produ1,produ2){
    let total = produ1 + produ2
    //produ 1= pulsera perlas
    //produ2 = pulsera fleco
    return total
}
//console.log(sumar(400,390))



    carrito.length == 1 && alert('La compra minima es de 2 unidades') 

   /* let Pulseras = {
        nombre: 'Pulsera de perlas',
        precio: 800,
        descripcion: 'pulsera de perlas grandes',
        fechaDePublicacion: '05-02-2020',
        colordePerlas: {
            claros: 'beige',
            pasteles: 'rosa',
            oscuros:'azul',
        }
    }

    let {nombre, precio} = Pulseras

console.log(`El precio de la ${nombre} es de ${precio}`) 

const item = {
    item_id: 1,
    item_product_name: 'pulsera de perlas',
    item_price_unit: 600,
}

let {item_id: id,
    item_product_name: productName,
    item_price_unit: unitPrice } = item

console.log(id)
console.log(unitPrice)

const desestructurar = ( {nombre, precio} ) => {
     console.log(nombre, precio)
 }
 desestructurar(Pulseras)





const masProductos = {
    ...Pulseras
}

console.log(masProductos)
*/
