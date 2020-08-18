let btn = document.querySelector("button")
let p = document.querySelector("#porcentaje")
let loader = document.querySelector("#youtube-loader")


btn.addEventListener("click",(e)=>{
    e.stopPropagation()
    
    //let xhr = ajax("GET","fondo.jpg","blob")
    let xhr = ajax("GET","libro.pdf","blob")

    //El evento progress se dispara cuando el readyState es 3 y nos llega un chunk nuevo
    //Event.lengthComputable => Boolean - nos viene de el header content-lenght si estuviera presente
    //Event.total => Number - la cantidad de bytes que tenemos que descargar
    //Event.loaded => Number - la cantidad de bytes que descargamos hasta el momento
    xhr.addEventListener("progress",(e)=>{
        if(e.lengthComputable){
            let porcentaje = e.loaded * 100 / e.total
            let porcentaje_sin_decimal = porcentaje.toFixed(1)

            p.innerText = `La descarga va ${porcentaje_sin_decimal}`
            loader.style.width = `${porcentaje}%` 

        }else{
            //No puedo calcular el tiempo. Muestro un GIF de tiempo indeterminado
        }
    })

    xhr.addEventListener("load",()=>{

        p.innerText = "Terminó la descarga!"
        loader.style.width = "0"

        
        
        let blob = xhr.response
        let url = URL.createObjectURL(blob)      

        //let img = document.createElement("img")
        //img.src = url
        //document.body.appendChild(img)

        let a = document.createElement("a")
        //a.target = "_blank"
        a.href = url
        a.download = "Libro De CSS"
        //document.body.appendChild(a)
        a.click()        
        //document.body.removeChild(a)

        setTimeout(function(){
            p.innerText = ""
            //URL.revokeObjectURL(url)
        },2000)

    })

})

function ajax(metodo,url,tipo="text"){

    /* 
    tipo = tipo || "text"
    tipo = tipo ? tipo : "text"
    if(tipo){
        tipo = tipo
    }else{
        tipo = "text"
    }
     */
    let xhr = new XMLHttpRequest
    xhr.responseType = tipo
    xhr.open(metodo,url)
    xhr.send()
    return xhr
}

/**
 * Math.round(X) => Redondea para arriba o abajo dependiendo el decimal
 * Math.ceil(X) => Redondea para arriba
 * Math.floor(X) => Redondea para abajo
 * X.toFixed(Y) => String - Me muestra X con Y cantidad de decimales
 * 
 * Number(X)
 * 
 * 
 * 
 * Blob - File/FileList - FileReader - MediaStream - MediaSource - ArrayBuffer
 * 
 * URL
 * 
 */