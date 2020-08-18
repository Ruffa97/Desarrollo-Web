let menu = document.querySelector(".material-icons")
let drawer = document.querySelector("#drawer")
let links = document.querySelectorAll("a")
let loader = document.querySelector("img")

if (loader.complete) {
    ajax("home.html","get",function(data){
        render("main",data)
    },true)
}else{
    loader.addEventListener("load",function(e){
        console.log("Loaded!")
    })
}

//Animacion del drawer
menu.addEventListener("click",function(e){
    if (drawer.style.left) {
        drawer.style.left = ''
    }else{
        drawer.style.left = '0px'
    }
})

function render(selector,data){
    document.querySelector(selector).innerHTML = data
}

// function ajax(url,metodo,callback,historial){
//     let xhr = new XMLHttpRequest
//     xhr.open(metodo,url)
//     xhr.addEventListener("load",function(){
//         if(xhr.status==200){
//             if(historial){
//                 window.history.pushState({
//                     url : url.split(".")[0],
//                     template : xhr.response 
//                 },"",url.split(".")[0])
//             }
//             callback(xhr.response)
//         }
//     })
//     xhr.send()
// }

window.addEventListener("popstate",function(e){
    render("main",e.state.template)
})

links.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        drawer.style.left = ''
        ajax(e.target.href,"get",function(data){
            render("main",data)
            // portfolioLoad()
        },true)
    })
})

function portfolioLoad(){
    let articulos = document.querySelectorAll("article")
    if(articulos.length){
        articulos.forEach(function(articulo){
            ajax("https://dog.ceo/api/breeds/image/random","get",function(data){
                let data_parseada = JSON.parse(data)
                let url = data_parseada.message
                let img = document.createElement("img")
                img.src = url
                articulo.children[0].appendChild(img)
            },false)
        })
    }
}

document.addEventListener("click",function(e){
    let elemento;
    if(e.target.tagName.toLowerCase() == "button"){
        elemento = e.target
    }
    if(e.target.tagName.toLowerCase() == "article"){
        elemento = e.target
    }
    if(e.target.tagName.toLowerCase() == "footer" || e.target.tagName.toLowerCase() == "img"){
        if(e.target.parentNode.parentNode.tagName.toLowerCase() == "article"){
            elemento = e.target.parentNode.parentNode
        }
    }
    if(elemento){
        switch(elemento.id){
            case "listado":
                ajax("listado.html","get",function(data){
                    render("main",data)
                },true)
            break;
            case "traduccion":
                ajax("traduccion.html","get",function(data){
                    render("main",data)
                },true)
            break;
            case "usuarios":
                ajax("https://jsonplaceholder.typicode.com/users","get",function(data){
                    let usuarios = JSON.parse(data)
                    let fragmento = document.createDocumentFragment()
                    usuarios.forEach(function(usuario){
                        let li = document.createElement("li")
                        li.innerText = usuario.name
                        fragmento.appendChild(li)
                    })
                    document.querySelector("ul").appendChild(fragmento)
                },false)
            break;
            case "dropzone-article":
                ajax("dropzone.html","get",function(data){
                    render("main",data)
                },true)
            break;
            case "download-article":
                ajax("download.html","get",function(data){
                    render("main",data)
                    crearLinks()
                },true)
            break;
        }
    }
})

let imagenes = []
        // 
//     Vamos a intentar completar nuestra funcion ajax para darle mas independencia. Para esto vamos a trabajar el html del archivo download.html :
  
//     1)Agregar 5 imagenes a nuestra carpeta de proyecto
//     2)Actualizar el array imagenes con los nombres de tus imagenes

imagenes = ["imagen1","imagen2","imagen3","imagen4","imagen5"]

//     3)Por cada una de las imagenes se debera mostrar un item dentro de la lista desordenada con un <a> que apunte a cada archivo. 

// function crearLinks(){
//     let fragmento = document.createDocumentFragment()
//     for(var i = 0; i < imagenes.length; i++){
//         let link = document.createElement("a")
//         link.href = "imagen" + (i+1) + ".jpeg"
//         link.style.display = "block"
//         link.innerText = "imagen" + (i+1)
//         fragmento.appendChild(link)
//     }
//     document.querySelector("#archivos-descarga").appendChild(fragmento)
// }

//     4)Asignarles un evento de click para que puedan ir a pedir por ajax el archivo en cuestion

function crearLinks(){
    let fragmento = document.createDocumentFragment()
    for(var i = 0; i < imagenes.length; i++){
        let link = document.createElement("a")
        link.href = "imagen" + (i+1) + ".jpeg"
        link.style.display = "block"
        link.innerText = "imagen" + (i+1)
        link.addEventListener("click",function(e){
            e.preventDefault()
            let p = document.createElement("progress")
            p.max = 100
            p.style.display = "block"
            document.querySelector("main").appendChild(p)
            ajax(link.href,"get",function(data_blob){
                let url = URL.createObjectURL(data_blob)
                let img = document.createElement("img")
                img.src = url
                img.style.display = "block"
                img.style.padding="5px"
                img.style.width= "200px"
                let btn = document.createElement("button")
                btn.innerText = "Aceptar"
                btn.style.display="inline"
                btn.style.margin="3px"
                let btn2 = document.createElement("button")
                btn2.innerText = "Cancelar"
                btn2.style.display="inlne"
                btn.addEventListener("click",function(e){
                    let a = document.createElement("a")
                    a.download = "Imagen"
                    a.href = url
                    document.querySelector("main").appendChild(a)
                    a.click()
                    document.querySelector("main").removeChild(a)
                })
                btn2.addEventListener("click",function(e){
                    document.querySelector("main").removeChild(btn)
                    document.querySelector("main").removeChild(img)
                    document.querySelector("main").removeChild(btn2)
                    document.querySelector("main").removeChild(p)
                })
                document.querySelector("main").appendChild(img)
                document.querySelector("main").appendChild(btn)
                document.querySelector("main").appendChild(btn2)

            },false,"blob",function(progreso){
                p.value = progreso
            })
        })
        fragmento.appendChild(link)
    }
    document.querySelector("#archivos-descarga").appendChild(fragmento)
}

//     5)Admitir un nuevo parametro opcional dentro de nuestra funcion ajax. El mismo debera ser de tipo funcion y si estuviera presente, primero tiene que registrar un evento progress en nuestro objeto XHR

// function ajax(url,metodo,callback,historial,tipo,progressCallback){
//     let xhr = new XMLHttpRequest
//     xhr.open(metodo,url)
//     if(tipo){
//         xhr.responseType = tipo
//     }
//     if(progressCallback){
//         xhr.addEventListener("progress",function(e){

//         })
//     }
//     xhr.addEventListener("load",function(){
//         if(xhr.status==200){
//             if(xhr.getResponseHeader)
//             if(historial){
//                 window.history.pushState({
//                     url : url.split(".")[0],
//                     template : xhr.response 
//                 },"",url.split(".")[0])
//             }
//             callback(xhr.response)
//         }
//     })
//     xhr.send()
// }

//     6)Dentro del evento progress validar si es posible calcular la cantidad de bytes descargados hasta el momento. En caso de serlo, mostrar una barra de progreso numerica para informarle al usuario como va su descarga.

// function ajax(url,metodo,callback,historial,tipo,progressCallback){
//     let xhr = new XMLHttpRequest
//     xhr.open(metodo,url)
//     if(tipo){
//         xhr.responseType = tipo
//     }
//     if(progressCallback){
//         xhr.addEventListener("progress",function(e){

//         })
//     }
//     xhr.addEventListener("load",function(){
//         if(xhr.status==200){
//             if(xhr.getResponseHeader)
//             if(historial){
//                 window.history.pushState({
//                     url : url.split(".")[0],
//                     template : xhr.response 
//                 },"",url.split(".")[0])
//             }
//             callback(xhr.response)
//         }
//     })
//     xhr.send()
// }

//     7)Integrar nuestra funcion ajax con el nuevo front end para que se pueda apreciar la descarga de cada archivo. Al finalizar, descargar el archivo y mostrar un preview del mismo en miniatura para que se entere que esta bajando junto con un boton para aceptar la descarga o cancelarla.

function ajax(url,metodo,callback,historial,tipo,progressCallback){
    let xhr = new XMLHttpRequest
    xhr.open(metodo,url)
    if(tipo){
        xhr.responseType = tipo
    }
    if(progressCallback){
        xhr.addEventListener("progress",function(e){
            if(e.lengthComputable){
                let porcentaje = e.loaded * 100 / e.total
                progressCallback(porcentaje)
            }
        })
    }
    xhr.addEventListener("load",function(){
        if(xhr.status==200){
            if(xhr.getResponseHeader)
            if(historial){
                window.history.pushState({
                    url : url.split(".")[0],
                    template : xhr.response 
                },"",url.split(".")[0])
            }
            callback(xhr.response)
        }
    })
    xhr.send()
}

//BONUS
//      Vamos a intentar completar aun mas nuestra funcion de ajax para que la misma pueda manejar el control de la subida de informacion al servidor. Para eso vamos a trabajar sobre el archivo dropzone.html:
//     1)Mostrar un preview de los archivos una vez que estos se hayan seleccionado. Se puede utilizar el evento change en el input o el evento drop de la API si se vio en clase como usar los eventos de drag y drop. Cada preview debe contar con el nombre y el peso de los archivos

// document.addEventListener("change",function(e){
//     e.stopPropagation()
//     if(e.target.id == "dropzone-input"){
//         let archivo = e.target.files
//         manejar_archivos(archivo)
//     }
// })

document.addEventListener("dragover",function(e){
    e.preventDefault()
    e.stopPropagation()
})

// document.addEventListener("drop",function(e){
//     e.stopPropagation()
//     e.preventDefault()
//     if(e.target.id == "dropzone" || e.target.id == "dropzone-label"){
//         let archivo = e.dataTransfer.files
//         manejar_archivos(archivo)
//     }
// })

let archivos_globales = []
let template
function manejar_archivos(archivos){
    let fragmento = document.createDocumentFragment()
    for(var i = 0; i < archivos.length;i++){
        archivos_globales.push(archivos[i])
        let img = document.createElement("img")
        img.src = "descarga.png"
        img.style.width = "50px"
        img.style.height = "50px"
        img.style.marginLeft = "20px"
        let p1 = document.createElement("p")
        p1.innerText = archivos[i].name
        p1.style.fontSize= "13px"
        let p2 = document.createElement("p2")
        p2.innerText = Math.ceil(((archivos[i].size / 1024) / 1024)) + "MB"
        p2.style.fontSize= "13px"
        let div = document.createElement("div")
        div.className = "thumbnail"
        div.appendChild(img)
        div.appendChild(p1)
        div.appendChild(p2)
        fragmento.appendChild(div)
    }
    let dropzone = document.querySelector("#dropzone")
    template = dropzone.innerHTML
    dropzone.innerHTML = ""
    document.querySelector("#dropzone").appendChild(fragmento)
}


//     2)Remover la clase .none de los botones para que estos se puedan ver

document.addEventListener("change",function(e){
    e.stopPropagation()
    if(e.target.id == "dropzone-input"){
        let archivo = e.target.files
        document.querySelector("#subir-dropzone").classList.remove("none")
        document.querySelector("#cancelar-dropzone").classList.remove("none")
        manejar_archivos(archivo)
    }
})

document.addEventListener("drop",function(e){
    e.stopPropagation()
    e.preventDefault()
    if(e.target.id == "dropzone" || e.target.id == "dropzone-label"){
        let archivos = e.dataTransfer.files
        document.querySelector("#subir-dropzone").classList.remove("none")
        document.querySelector("#cancelar-dropzone").classList.remove("none")
        manejar_archivos(archivos)
    }
})

//     3)Registrarle un evento de click al boton #subir-dropzone para el pueda interceptar el valor del input y mostrarnos los archivos en la consola

// document.addEventListener("click",function(e){
//     if(e.target.id =="subir-dropzone"){
//         console.log(archivos_globales)
//     }
// })

//     4)Refactorizar el evento del punto anterior para que el mismo sea capaz de guardar nuestros archivos como parametros usables dentro de un pedido por ajax a traves del metodo POST. 

document.addEventListener("click",function(e){
    if(e.target.id =="subir-dropzone"){
        console.log(archivos_globales)
        let data = new FormData
        archivos_globales.forEach(function(archivo,i){
            data.append("archivo"+i,archivo)
        })
    let xhr = new XMLHttpRequest
    xhr.open("POST","subir.php")
    xhr.addEventListener("load",function(){
        if(xhr.status==200){
            console.log(xhr.response)
        }
    })
    xhr.send(data)
    }
})

//     5)Registrarle un evento de click al boton #cancelar-dropzone para que se limpie el contenido del dropzone y vuelva su texto a la normalidad.

document.addEventListener("click",function(e){
    if(e.target.id == "cancelar-dropzone"){
        document.querySelector("#dropzone").innerHTML = template
        document.querySelector("#dropzone-input").value=""
        archivos_globales = []
        document.querySelector("#subir-dropzone").classList.add("none")
        document.querySelector("#cancelar-dropzone").classList.add("none")
    }
})
