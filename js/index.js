let nombredeUsuario = prompt ('Ingresa tu nombre de usuario')
if (nombredeUsuario == ''){
    alert("Lo siento no ingresaste nu nombre de usuario.Estas ingresando como invitado")   
} else {
    alert("Bienvenido a Moon Accesorios " + nombredeUsuario)
}


const productos =[] 

function Producto(categoria,precio,nombre){
this.categoria = categoria
this.precio = precio
this.nombre = nombre
}

const producto1 =new Producto("Pulseras","$400","Pulsera Perlas")
const producto2 =new Producto("Pulseras","$390","Pulsera Fleco")
const producto3 =new Producto("Pulseras","$499","Pulsera Luna")
const producto4 =new Producto("Pulseras","$660","Pulsera Cruz")
const producto5 =new Producto("Pulseras","$490","Pulsera Marina")
const producto6 =new Producto("Pulseras","$640","Pulsera del Mar")
const producto7 =new Producto("Pulseras","$490","Pulsera Astronauta")
const producto8 =new Producto("Pulseras","$600","Pulsera Mariposa")
const producto9 =new Producto("Cadenitas","$1050","Cadenita Brujula")
const producto10 =new Producto("Cadenitas","$1450","Cadenita Estrella")
const producto11 =new Producto("Cadenitas","$1640","Cadenita Estrella Doble")
const producto12 =new Producto("Cadenitas","$1350","Cadenita Brillos")
const producto13 =new Producto("Cadenitas","$990","Cadenita Perlas")
const producto14 =new Producto("Cadenitas","$990","Cadenita Corazon")
const producto15 =new Producto("Cadenitas","$1220","Cadenita Rosa")
const producto16 =new Producto("Cadenita","$890","Cadenita de Mar")
const producto17 =new Producto("Aros","$390","Aros tejidos azul")
const producto18 =new Producto("Aros","$390","Aros tejidos naranja")
const producto19 =new Producto("Aros","$600","Aros Alas")
const producto20 =new Producto("Aros","$400","Aros Espiral")
const producto21 =new Producto("Aros","$760","Aros Brillos")
const producto22 =new Producto("Aros","$560","Aros Atrapasueños")
const producto23 =new Producto("Aros","$480","Aros Corazon")

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)
productos.push(producto7)
productos.push(producto8)
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

for (let i=0; i < productos.length; i++){
    console.log(`El precio de ${productos[i].nombre} es de ${productos[i].precio} `)
}

function sumar(produ1,produ2){
    let total = produ1 + produ2
    //produ 1= pulsera perlas
    //produ2 = pulsera fleco
    return total
}
console.log(sumar(400,390))