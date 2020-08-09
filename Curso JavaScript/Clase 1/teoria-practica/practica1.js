// Manipulacion del DOM   
//1)Crear una lista desordenada con 10 elementos dentro usando un bucle for. Tener en cuenta que solo se le puede hacer un único appendChild al ul creado, asi minimizamos el tiempo de modificaciones en el DOM.
let ul = document.createElement("ul")
let frag = document.createDocumentFragment()
for (var i = 0; i < 10; i++) {
    let li = document.createElement("li")
    li.innerText = "item " + i
    frag.appendChild(li)
}
ul.appendChild(frag)

//2)Hacer que el <article> con id "movil" solamente se vea si la pagina se carga a menos de 500px.
 if (window.outerWidth > 600) {
    document.querySelector("#movil").style.display = 'none'
}

//3)Realizar la misma operacion que en el punto uno, pero ahora para el <ul> que ya se encuentra en el <body>. Recordar que no se puede hacer multiples appendChild a un nodo.
let frag2 = document.createDocumentFragment()
for (let i=0;i<10;i++){
    let li = document.createElement("li")
    li.innerText = "item "+i
    frag2.appendChild(li)
}
document.querySelector("#estatico").appendChild(frag2)

//4)Intercambiar las URLs de los links de la barra de navegacion. El que dice Google! tiene que redirigir a educacionit.com y viceversa.
let links = document.querySelectorAll("a")
let temp = links[0].href
links[0].href = links[1].href
links[1].href = temp

//5)Cambiarle el color del fondo al <header> por alguna tonalidad de azul oscuro y al <h1> por alguna tonalidad de blanco para que contraste.
let head = document.querySelector("header")
let titulo = document.querySelector("h1")
head.style.backgroundColor = 'rgba(0,50,150,0.3)'
titulo.style.backgroundColor = "rgb(186, 184, 224)"
//Bonus:
//6)Realizar un efecto marquesina en un nodo <p> que diga "Mi primer programa en JS" que muestre de a una letra a la vez cada medio segundo por letra
let texto = "Mi primer programa en JS"
let p = document.createElement("p")
p.innerText=""
document.querySelector("header").appendChild(p)
let indice=0
let intervalo = setInterval(()=>{
    if(indice<texto.length){
        p.innerText+=texto[indice]
        indice++
    }
    else{
        p.innerText=""
        indice=0
    }
},200)
console.log(texto.length)
//7)Crear un <div> de 200px de ancho por 200px de alto con el color de fondo a eleccion. El elemento tiene que poder ir y venir a lo largo de todo el ancho de la pantalla de manera continua.
let div = document.createElement("div")
document.querySelector("main").appendChild(div)
div.style.position="relative"
div.style.height = "200px"
div.style.width = "200px"
div.style.backgroundColor = "red"
let left = 0
let avanzar = setInterval(() =>  {
    if((left+200) >= window.innerWidth){
        div.style.backgroundColor = "blue"
        left = 0
    }
    div.style.left = left+"px" 
    left++
}, 5);
//8)Al <div> del punto anterior transformarlo en circulo cada vez que se aproxime al centro de la pantalla y que vuelva a cuadrado cuando se aproxime a los extremos. 
