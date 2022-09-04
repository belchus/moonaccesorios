
let container = document.querySelector('.mother')
let article = "" 

fetch("https://my-json-server.typicode.com/belchus/parafetch/db")
     .then((response) => {
return response.json()
     })
    .then((json) => {
        let Cadenitas = json.cadenitas
        Cadenitas.forEach(cad => {
        const {imgSrc, id, titulo} = cad
        
   container.innerHTML +=  `<article class="son" >
       <img src="${imgSrc}" alt="" class="sons">
       <div class="nomb">
           <p>${titulo}</p><div class="nomb">
       </div>
       <div class="boton">Ver detalle</div>
                       <input type='hidden' class='info-id' value="${id}"/>
                   </div>
       </div>
   </article>`
   container.innerHTML += article
      })
    })
    
    const botones = document.querySelector('.boton')
    console.log(botones)