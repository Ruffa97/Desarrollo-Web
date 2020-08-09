let ul = document.querySelector("ul")

//Fragmento : es un contenedor de nodos de DOM cuyas modificaciones internas no afectan a la performance
let fragmento = document.createDocumentFragment()

for (let index = 1; index <= 10; index++) {
    let li = document.createElement("li")
    li.innerText = "Element " + index
    //ul.appendChild(li)    
    fragmento.appendChild(li)
}

//console.log(fragmento)
//console.dir(fragmento)

ul.appendChild(fragmento)


let btn = document.querySelector("button")

btn.addEventListener("click", e => {
    e.stopPropagation()
    //console.log(e.target)
    //console.log(btn) la variable btn no esta en scope local 
    //console.log("Click del boton")
}/* ,true */)


document.body.addEventListener("click", e => {
    //console.log(e.target)
    //console.log("Click del body")
}/* ,true */)


document.addEventListener("click", e => {
    e.stopPropagation()
    //console.log(e.target)
    //console.log("Click del DOM")
}/* ,true */)



let link = document.querySelector("a")

link.addEventListener("click" , e => {
    e.stopPropagation()
    e.preventDefault() //Previene el comportamiento que tenga un evento mas alla de la propagacion
    //Generar un popup que tenga dos botones y un parrafo que diga "Estas seguro que queres salir de esta pagina?" 
})


//blur - focus - change - keyup - keydown 
let formulario = document.querySelector("form")


let input_nombre = document.querySelector("#nombre")
let input_apellido = document.querySelector("#apellido")
let select = document.querySelector("#opcion")
let input_avatar = document.querySelector("#avatar")

/* input_nombre.addEventListener("keydown",(e)=>{
    e.preventDefault()
    console.log(`Tecla : ${e.key}`)
    console.log(`Valor : ${e.target.value}`)
    console.log('***************************************')
}) */

input_nombre.addEventListener("keyup",(e)=>{
    e.preventDefault()
    console.log(`Tecla : ${e.key}`)
    console.log(`Valor : ${e.target.value}`)
    console.log('***************************************')
})

/* let parrafo = document.querySelector("p")

parrafo.addEventListener("keydown",e=>{
    console.log(e.target.innerText)
}) */

/* select.addEventListener("change",(e)=>{
    console.log(e.target.value)
})

input_avatar.addEventListener("change",(e)=>{
    console.log(e.target.files)
})
 */
/* 
input_nombre.addEventListener("focus",()=>{
    console.log("Estoy sobre el input nombre")
})

input_nombre.addEventListener("blur",()=>{
    console.log("Sali del input nombre")
})


input_apellido.addEventListener("focus",()=>{
    console.log("Estoy sobre el input apellido")
})

input_apellido.addEventListener("blur",()=>{
    console.log("Sali del input apellido")
})
 */

formulario.addEventListener("submit", e => {
    e.stopPropagation()
    e.preventDefault()
    //Form.Elements
    console.log("Validando...")

    let nombre = e.target.elements.nombre.value
    let apellido = e.target.elements.apellido.value
    let fem = e.target.elements.fem.checked
    let masc = e.target.elements.masc.checked
    let opcion = e.target.elements.opcion.value
    let avatar = e.target.elements.avatar.files

    //Object Shorthand
    let usuario = {nombre,apellido,fem,masc,opcion,avatar}
    
    console.log(usuario)

})