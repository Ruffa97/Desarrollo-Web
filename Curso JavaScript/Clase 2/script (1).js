//Document = document = DOM = Document Object Model

//Seleccionar Nodos
/* 
let item = document.getElementById("item1")
item.id = "nuevoid"
item.classList.add("clasea")
item.classList.add("claseb")
item.classList.add("clasec")
item.classList.remove("claseb")
item.classList.toggle("test") 
*/

//let items = document.getElementsByTagName("li")
//let items = document.getElementsByClassName("item")

//let array_de_nodos = [...items]

/* 
Toman como parametro un selector de CSS

document.querySelector
document.querySelectorAll */


//let items = document.querySelector("li")
//let items = document.querySelector("#item1")
//let items = document.querySelector(".item")

//let items = document.querySelectorAll(".item")
//items[0].innerText = "Nuevo texto en item 1"

//Crear Nodos

let nuevo_parrafo = document.createElement("p")
nuevo_parrafo.innerText = "Nuevo Parrafo"


//Asignar un nodo al DOM
//NodoPadre.appendChild(NuevoNodo)
let body = document.querySelector("body")

body.appendChild(nuevo_parrafo)


//NodoPadre.insertBefore(NuevoNodo,NodoReferencia) : Inserta adentro del NodoPadre el NuevoNodo antes de el NodoReferencia

let nuevo_item = document.createElement("li")
nuevo_item.innerText = "Item Nuevo"

//let ul = document.querySelector("ul")
let referencia = document.querySelector("#item2")
let padre_referencia = referencia.parentNode

padre_referencia.insertBefore(nuevo_item,referencia)

//Nodo.parentNode = Les da el padre
//Nodo.children = Les da los hijos

//Borrar Nodos
//NodoPadre.removeChild(NodoHijo)
padre_referencia.removeChild(padre_referencia.children[3])



//EVENTOS : Ejecucion de una funcion(callback) como respuesta a una accion 

//Target.addEventListener(nombre String,callback Function [,tipo Boolean])

/*
function hacerClick(){
    console.log("Click")
}
*/

const hacerClick = function(e){
    console.log(e)
    console.log("Click")
    //return ?
    //return function(){}
}


//let resultado = undefined

const btn = document.querySelector("button")

//btn.addEventListener("click",hacerClick()) No puedo poner la funcion ya ejecutada ya que la misma no tiene retorno entonces se transforma en undefined
btn.addEventListener("click",hacerClick)




let calcularSize = function(){
    let ancho = window.outerWidth
    let alto = window.outerHeight
    console.log(`Ancho : ${ancho}px / Alto : ${alto}px`)
    console.log("***********************************")
}

calcularSize()
//resize
window.addEventListener("resize",calcularSize)





//focus - blur - active - mouseenter - mouseleave 




/* 
setTimeout(function(){
    console.log("Hola")
},5000) 
*/


/* 
setInterval(function(){
    console.log("Hola")
},1000) 
*/