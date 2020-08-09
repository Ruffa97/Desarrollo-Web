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

    xhr.open("GET","usuarios.json")

    xhr.responseType = "json"

    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            
            console.log(xhr.response)
            //let response_obj = JSON.parse(xhr.response)
            let response_obj = xhr.response
            let usuarios = response_obj.usuarios
            let ul = document.createElement("ul")
            usuarios.forEach(usuario=>{
                let li = document.createElement("li")
                li.innerText = usuario.nombre
                li.id = usuario.id
                ul.appendChild(li)
            })
            document.body.appendChild(ul)

        }
    })

    xhr.send()

 })



let url = "http://jsonplaceholder.typicode.com"

let xhr_usuarios = new XMLHttpRequest
xhr_usuarios.open("get",`${url}/users`)
xhr_usuarios.responseType = "json"
xhr_usuarios.addEventListener("load",()=>{
    if(xhr_usuarios.status === 200){
        
        let usuarios = xhr_usuarios.response
        let section = document.createElement("section")
        usuarios.forEach(usuario=>{
            
            let article = document.createElement("article")
            let header = document.createElement("header")
            let h2 = document.createElement("footer")
            let footer = document.createElement("a")
            let a = document.createElement("a")

            h2.innerText = usuario.name
            a.innerText = "ver mas ..."
            a.href = usuario.id
            a.id = usuario.id
            a.addEventListener("click",e=>{
                e.stopPropagation()
                e.preventDefault()
                history.pushState(null,"",`/user/${e.target.id}`)
            })

            article.appendChild(header)
            article.appendChild(footer)
            header.appendChild(h2)
            footer.appendChild(a)

            section.appendChild(article)
        })
        document.body.appendChild(section)

    }
})
xhr_usuarios.send()