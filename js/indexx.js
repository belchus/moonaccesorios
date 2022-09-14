
let container = document.querySelector('.mother')
let article = "" 

fetch("https://my-json-server.typicode.com/belchus/parafetch/db")
     .then((response) => {
return response.json()
     })
    .then((json) => {
        let Pulseras = json.pulseras
        Pulseras.forEach(puls => {
        const {imgSrc, id, titulo} = puls
        
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
      const botones = document.querySelectorAll('.boton')
      const popup = document.querySelector('.popupDetalle')
      const closePopup = document.querySelector('.closePopup')
      console.log(botones)
      for(verDetalle of botones){
        verDetalle.onclick = (e) => {
            popup.classList.remove('d-none')
            let id = e.target.nextElementSibling.value
            imprimirDetalle(id, popup)
            
        }
    closePopup.onclick = () => {
      popup.classList.add('d-none')
    }
    function imprimirDetalle(id, insertBox){
        let pulsera = Pulseras[id-1]
        const {titulo, precio, imgSrc,descripcion} = pulsera
        insertBox.innerHTML = `<div>
                                <div class="closePopup">Salir</div>
                                <section class="pulsera-detail">
                                    <div class="imagen">
                                        <img class="miimagen" src="${imgSrc}" alt="">
                                    </div>
                                    <div class="descripcion-detail">
                                        <h3>${titulo}</h3>
                                        <p><strong> ${descripcion}</strong></p>
                                        <p><strong> ${precio}</strong></p>
                                        <div class="click">
                                            <span class="less">-</span>
                                            <span class="resultado">0</span>
                                            <span class="more">+</span>
                                        </div>
                                    <div class="botonCarrito">Agregar al Carrito</div>
                                    </div>
                                </section>
                            </div>`
                            
                            
const closePopup = document.querySelector('.closePopup')
const more = document.querySelector('.more')
const less = document.querySelector('.less')
const resultado = document.querySelector('.resultado')
const agragarCarrito = document.querySelector('.botonCarrito')
let contador = 0
let storage = []
more.onclick = () => {
    contador++
    resultado.innerText = contador
}

less.onclick = () => {
    contador--
    contador = contador < 0 ? 0 : contador
    resultado.innerText = contador
}

closePopup.onclick = () => {
    popup.classList.add('d-none')
}
                   
agragarCarrito.onclick = () => {
    if(contador != 0){
        pulsera.agregadoAlCarrito = contador
        storage.push(pulsera)
        sessionStorage.setItem('carrito', JSON.stringify(storage))

        swal({
            title: `Agregaste ${pulsera.agregadoAlCarrito} ${titulo} al carrito!`,
            icon: 'success',
            confirmButtonText: 'Cool'
        })
       
    }else{
    }
}

    }
    
    }
    })
    
    
        