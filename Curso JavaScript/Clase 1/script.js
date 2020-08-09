/**
 * TIPOS DE DATOS
 * 
 * Primitivos : Se pasan por valor
 * 
 *  - Boolean = true ó false
 *      
 *  {TRUE}    {FALSE|0|""|undefined|null|NaN}
 * 
 *  - String = ""  ''  ``
 *  
 *  "Hola, mi nombre es " + nombre
 *  `Hola, mi nombre es ${nombre}`
 * 
 *  - Number : 1 -1  5.6
 *  - NaN : Not a Number
 *  - Null : escritura
 *  - undefined : lectura
 *  - Symbol : Sirven para crear propiedades constantes en objetos
 * 
 * 
 * Objetos : Se pasan por referencia
 *  - Object : { propuno : valor , propdos : valor }
 *  - Array : [valoruno,valordos,valortres]
 *  - Function : function foo(){}
 * 
 * 
 * var -> let -> const
 */

//Declaracion
var nombre
//Asignacion
nombre = "Juan"

var nombre = "Horacio"


//Globales
if(true){
    var a = 10
    console.log(a)
}

console.log(a)



let c = 50
//let c = 50
c = 60
console.log(c)

if(true){
    let b = 20
    console.log(b)
}

//console.log(b)



const e = 10
//e = 20




console.clear() //Borra la consola



let obj = { x : 1 }
let nueva_prop = "edad"

//Notacion de punto : obj.prop = valor
//obj.mi nombre = "Horacio"
//obj.nueva_prop = 31
//obj.0 = true
obj.vive = true

//Notacion de corchete : obj["prop"] = valor
obj["mi nombre"] = "Horacio"
obj[nueva_prop] = 31
obj[0] = true





//Funciones : Son objetos ejecutables

 function foo(){
    //Cuerpo de la funcion (Parte ejecutable)
    console.log("Hola Mundo")
} 

/* var foo = function(){
    console.log("Hola Mundo")
    //console.log(x)
} */

foo.x = true

//foo()
//console.log(foo) Me muestra la definicion de la funcion
//console.dir(foo) Fuerza una variable a mostrarse en forma de objeto


/*************************************************************/

//ECMASCRIPT + WEB APIs

//Objeto Global = window = Window = BOM = Browser Object Model


//var a = 1
//window.a = 1

/**
 * 
 * window.innerWidth = Ancho interno del navegador
 * window.innerHeight = Alto interno del navegador
 * 
 * window.outerWidht = Ancho externo del navegador
 * window.outerHeight = Ancho externo del navegador
 * 
 * 
 * Screen = screen
 * screen.width = Ancho del hardware
 * screen.height = Alto del hardware
 * 
 * 
 * Location = location
 * 
 * location.href = Es una referencia a la barra de direcciones
 * location.reload() = Recarga la pagina
 * 
 * 
 * History = history
 * 
 * history.back() = Retrocede el historial un paso
 * history.forward() = Avanza el historial un paso  
 * 
 * 
 * 
 * DOM = Document Object Model = document
 * 
 */





/* 
console.time("Contador")

for(let i = 0; i< 1000 ; i++){}

console.timeEnd("Contador") 
*/