/*let nombredeUsuario = prompt ('Ingresa tu nombre de usuario')
if (nombredeUsuario == ''){
    alert("Lo siento no ingresaste nu nombre de usuario.Estas ingresando como invitado")   
} else {
    alert("Bienvenido a Moon Accesorios " + nombredeUsuario)
}
*/


const productos =[] 

function Producto(id,categoria,precio,nombre,agregadoALista,img){
this.id = id
this.categoria = categoria
this.precio = precio
this.nombre = nombre
this.agregadoALista = agregadoALista
this.img = img
}

const producto1 =new Producto("1","Pulseras","$400","Pulsera Perlas","false","../img/pulsera1.png")
const producto2 =new Producto("2","Pulseras","$390","Pulsera Fleco","false","../img/pulsera2.jpg")
const producto3 =new Producto("3","Pulseras","$499","Pulsera Luna","false","../img/pulsera3.jpg")
const producto4 =new Producto("4","Pulseras","$660","Pulsera Cruz","false","../img/pulsera4.jpg")
const producto5 =new Producto("5","Pulseras","$490","Pulsera Marina","false","../img/pulsera5.jpg")
const producto6 =new Producto("6","Pulseras","$640","Pulsera del Mar","false","../img/pulsera6.jpg")
const producto7 =new Producto("7","Pulseras","$490","Pulsera Astronauta","false","../img/pulsera7.webp")
const producto8 =new Producto("8","Pulseras","$600","Pulsera Mariposa","false","../img/pulsera8.jpg")
/*
const producto9 =new Producto("9","Cadenitas","$1050","Cadenita Brujula","false")
const producto10 =new Producto("10","Cadenitas","$1450","Cadenita Estrella","false")
const producto11 =new Producto("11","Cadenitas","$1640","Cadenita Estrella Doble","false")
const producto12 =new Producto("12","Cadenitas","$1350","Cadenita Brillos","false")
const producto13 =new Producto("13","Cadenitas","$990","Cadenita Perlas","false")
const producto14 =new Producto("14","Cadenitas","$990","Cadenita Corazon","false")
const producto15 =new Producto("15","Cadenitas","$1220","Cadenita Rosa","false")
const producto16 =new Producto("16","Cadenita","$890","Cadenita de Mar","false")
const producto17 =new Producto("17","Aros","$390","Aros tejidos azul","false")
const producto18 =new Producto("18","Aros","$390","Aros tejidos naranja","false")
const producto19 =new Producto("19","Aros","$600","Aros Alas","false")
const producto20 =new Producto("20","Aros","$400","Aros Espiral","false")
const producto21 =new Producto("21","Aros","$760","Aros Brillos","false")
const producto22 =new Producto("22","Aros","$560","Aros Atrapasueños","false")
const producto23 =new Producto("23","Aros","$480","Aros Corazon","false")
*/
productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)
productos.push(producto7)
productos.push(producto8)
/*
productos.push(producto9)
productos.push(producto10)
productos.push(producto11)
productos.push(producto12)
productos.push(producto13)
productos.push(producto14)
productos.push(producto15)
productos.push(producto16)
productos.push(producto17)
productos.push(producto18)
productos.push(producto19)
productos.push(producto20)
productos.push(producto21)
productos.push(producto22)
productos.push(producto23)
*/
for (let i=0; i < productos.length; i++){
    console.log(`El precio de ${productos[i].nombre} es de ${productos[i].precio} `)
}

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



    if(usuario.value.length < 5){
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
    
} 

mensajeError.style.color = 'red'
usuario.value.length < 5?  mensajeError.innerText = 'El usuario ingresado es incorrecto' : mensajeError.style.display = 'none'
!contrasena.value? mensajeError.innerText = 'La contraseña ingresada es incorrecta' : none
}

let container = document.querySelector('.mother')
let article = ""

for(producto of productos){
    console.log(producto)
  article += `<article class="son" >
                    <img src="${producto.img}" alt="" class="sons">
                    <div class="nomb">
                        <p>${producto.nombre}</p>
                    </div>
                    <div class="boton">
                    <svg id="${producto.id}" class="unlike" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                    </div>
                </article>`
}

container.innerHTML += article

let botones = document.querySelectorAll('.boton')
console.log(botones)
let svgs = document.querySelectorAll('svg')
let recuperoStorage = localStorage.getItem('carrito')
let resultadosCarrito = document.querySelector('.micarrito')
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
        let shop = productos.find(e => e.id == id)

        if(carrito.includes(shop)){
   element.classList.remove('liked')
   let eliminoprod = carrito.indexOf(shop)
   carrito.splice(eliminoprod,1)
   let sacaRepetido = document.querySelector(`#id-${shop.id}`)
   resultadosCarrito.removeChild(sacaRepetido)
        } else{
            element.classList.add('liked')
            carrito.push(shop)
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

    let Pulseras = {
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


