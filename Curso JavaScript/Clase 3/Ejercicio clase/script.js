//Agarro el <a> del DOM
let link = document.querySelector("a")

//Le pongo un callback al click
link.addEventListener("click",(e)=>{
    e.stopPropagation()
    //Tengo que cancelar el comportamiento predeterminado
    e.preventDefault()

    //Creo los elementos que voy a usar
    let modal = document.createElement("div")
    let mensaje = document.createElement("p")
    let aceptar = document.createElement("button")
    let cancelar = document.createElement("button")

    modal.classList.add("modal")
    mensaje.innerText = "Estas seguro que queres abandonar la pagina?"
    aceptar.innerText = "Aceptar"
    cancelar.innerText = "Cancelar"

    //Si hacen click en este boton
    cancelar.addEventListener("click",(e)=>{
        e.stopPropagation()
        //Borro modal del DOM
        document.body.removeChild(modal)
    })

    //Si hacen click en este boton
    aceptar.addEventListener("click",e=>{
        e.stopPropagation()
        //Redirijo al usuario al href del link
        location.href = link.href
    })

    modal.appendChild(mensaje)
    modal.appendChild(aceptar)
    modal.appendChild(cancelar)
    document.body.appendChild(modal)
})