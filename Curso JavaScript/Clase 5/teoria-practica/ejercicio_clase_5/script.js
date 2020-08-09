/**
 * Asignarle un callback al evento click de todos los links del nav para que puedan ir a buscar con AJAX el archivo que le corresponde y poder mostrarlo dentro del <main>
 * 
 * 
 * 
 * PRIMER BONUS
 * 
 * Por cada vez que se le hace click a un link, tendria que poder cambiar la URL y detectar cambios en la URL. 
 * 
 * 
 * SEGUNDO BONUS
 * 
 * Si el usuario vuelve para atras en el historial, deberia poder ver el contenido que le corresponde a la URL.
 */
let links = document.querySelectorAll("a")
let main = document.querySelector("main")
let arr_nav = {}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(e){
        e.preventDefault()
        e.stopPropagation()
        let xhr = new XMLHttpRequest;
        xhr.open("GET",e.target.href)
        xhr.addEventListener("load",function(){
            if(xhr.status == 200){
                history.pushState(parseInt(e.target.id),"",e.target.href)
                arr_nav[e.target.id] = xhr.response
                main.innerHTML= xhr.response
            }
            else{
                console.log("ERROR")
            }
        })
        xhr.send()
    })
}

window.addEventListener("popstate",()=>{
    if(window.location.pathname == "/posts.html"){
        main.innerHTML= arr_nav["1"]
    }else{
        if(window.location.pathname == "/usuarios.html"){
            main.innerHTML= arr_nav["2"]
        }else{
            if(window.location.pathname == "/contacto.html"){
                main.innerHTML= arr_nav["3"]
            }else{
                main.innerHTML = "<h2>Home</h2>"
            }
        }
    }
})
