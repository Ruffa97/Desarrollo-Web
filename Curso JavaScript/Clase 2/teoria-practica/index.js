const textos = {
    "link1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    "link2" : "Vitae voluptates, animi illum cum repellendus adipisci nulla, ipsam natus rem pariatur excepturi dolores consequatur nisi eos",
    "link3" : "Maiores maxime placeat nam necessitatibus."
}
alert("Se ha detectado un virus. Dirigase a la consola de desarrollo para investigar el problema!");
let btn_error = document.querySelector("#error")
btn_error.addEventListener("click",function(e){

},true)

document.addEventListener("click",function(e){
    throw new Error("Se ha detectado un nuevo virus!. El mismo puede desactivarse si el evento click del boton#error no se propaga.")
},true)

//1) Asignarle un evento de click al boton hamburguesa para que pueda ser capaz de abrir y cerrar el nav #drawer
let btn = document.querySelector(".material-icons")
let menu = document.querySelector("#drawer")
btn.addEventListener("click",function(e){
    if (menu.style.left) {
        menu.style.left = ""
    }
    else{
        menu.style.left = "0px"
    }
})
//2) Asignarle un evento de click a los links del nav #drawer para que sean capaces de buscar dentro del objeto "textos" el texto correspondiente a su seccion y poder mostrarla en el <article>
// let links = document.querySelectorAll("a")
// for(var i = 0; i < links.length;i++){
//     links[i].addEventListener("click",function(e){
//         e.preventDefault()
//         document.querySelector("article").innerText = textos[e.target.innerText]
//     })
// }

//3)El objeto global window tiene un evento llamado resize. Este evento se dispara cada vez que el navegador cambia de tamaño, es decir, cuando se minimiza o maximiza. Asignarle un evento que sea capaz de cambiarle el color de fonto al body por rojo si estamos a mas de 600px y azul si estamos a menos.
let cuerpo = document.querySelector("body")
window.addEventListener("resize",function(e){
    if(window.outerWidth > 600){
        cuerpo.style.backgroundColor="red"
    }
    else{
        cuerpo.style.backgroundColor="blue"
    }
})
//Bonus
//4)Refactorizar el codigo del punto 2 para que los links tambien puedan cerrar el drawer
let links = document.querySelectorAll("a")
for(var i = 0; i < links.length;i++){
    links[i].addEventListener("click",function(e){
        menu.style.left=""
        e.preventDefault()
        document.querySelector("article").innerText = textos[e.target.innerText]
    })
}
//6)Agregar al callback del punto 6 registrado en el evento focus un proceso que le agregue la clase animacionBorde al div que contiene el input que activo su evento. Esta clase hara que se produzca un efecto de animacion con el border inferior.
let inputs = document.querySelectorAll("input,textarea")
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus",function(e){
        e.target.parentNode.children[0].classList.add("subir")
        e.target.parentNode.classList.add("animacionBorde")
    })
    inputs[i].addEventListener("blur",function(e){
        if(e.target.value.length <= 0){
            e.target.parentNode.children[0].classList.remove("subir")
            e.target.parentNode.classList.remove("animacionBorde")
        }
    })
    
}
//7)Utilizar la plantilla del archivo formulario.html y pegarlo entre el <article> y el <script>. Asignarle un evento al formulario para que sea capaz de capturar los valores de sus inputs de manera dinámica SIN usar querySelectors para construir un listado de comentarios de usuarios dentro del <ul>. Cada item deberá tener el nombre del usuario, titulo y cuerpo del comentario. 
let comentar=document.querySelector("#comentar")
let inputs_2 = document.querySelectorAll("input,textarea")
comentar.addEventListener("click",function(e){
    e.preventDefault()
    let usuario = document.createElement("li")
    for(i = 0; i < inputs_2.length; i++){
        usuario.innerText += inputs_2[i].parentNode.children[0].innerText + ": "+ inputs_2[i].value + "--"
    }
    document.querySelector("ul").appendChild(usuario)
})