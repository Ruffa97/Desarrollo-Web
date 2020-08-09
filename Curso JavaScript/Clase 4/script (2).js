//XMLHttpRequest
//Fetch
//Bucle de eventos

//Creamos un objeto del tipo XHR (No se envia nada todavia)
let xhr = new XMLHttpRequest


xhr.addEventListener("abort",()=>{
    console.log("Se cancelo la solicitud!")
    console.log(xhr.readyState)
})


//readystatechange : Se dispara en cada cambio de readyState
xhr.addEventListener("readystatechange",()=>{
    console.log(`Nuevo Estado : ${xhr.readyState}`)
    if(xhr.readyState === 2){

        //let headers = xhr.getAllResponseHeaders()
        //console.log(headers.split("\n"))
        let tipo = xhr.getResponseHeader("content-type")
        let size = xhr.getResponseHeader("content-length")

        console.log(size)
        if(size < 1000){
            //xhr.abort()
        }

    }
})

//load : Se dispara cuando el readyState es 4
xhr.addEventListener("load",()=>{
    switch(xhr.status){
        case 200 : 
            let p = document.createElement("p")
            p.innerText = xhr.response
            document.body.appendChild(p)
        return;
        case 404 : 
            console.log("No se encuentra el archivo,pruebe con otro")
        return;
        default :
            console.log("Ups! Hubo un problema")
        return;
    }
})

//Configuro el objeto XHR
xhr.open("GET","info.txt")

//Envio el pedido 
//xhr.send()




/**
 * 
 * XHR.readyState = Nos dice en que estado esta el pedido
 * 
 * 0 - Objeto inicializado / Objeto Reseteado
 * 1 - Objeto configurado
 * 2 - Headers fueron enviados y recibidos
 * 3 - Descargando informacion
 * 4 - Pedido Finalizado
 * 
 */

 let btn = document.querySelector("button")

 btn.addEventListener("click",()=>{

    let xhr = new XMLHttpRequest

    xhr.open("GET","plantilla.html")

    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            let div = document.createElement("div")
            div.innerHTML = xhr.response
            document.body.appendChild(div)
        }
    })

    xhr.send()

 })