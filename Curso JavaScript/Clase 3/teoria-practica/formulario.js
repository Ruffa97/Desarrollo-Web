let inputs = document.querySelectorAll("input,textarea")
let nombre_valor
let apellido_valor
let email_valor
let reemail_valor
let titulo_valor
let mensaje_valor
inputs.forEach(function(input){
    input.addEventListener("focus",function(e){
        e.target.parentNode.children[0].classList.add("subir")
        e.target.parentNode.classList.add("animacionBorde")
    })

    input.addEventListener("blur",function(e){
        if(e.target.value.length <= 0){
            e.target.parentNode.children[0].classList.remove("subir")
        }
        e.target.parentNode.classList.remove("animacionBorde")
    })
})

// function validacion_nombre(){
//     let nombre = inputs[0]
//     nombre.addEventListener("blur", function(e){
//         let valor = nombre.value.trim()
//         if(valor.includes(" ")){
//             let valor_2 = valor.split(" ")
//             for (let i = 0; i < 2; i++) {
//                 if(valor_2[i].length >= 2){
//                     var b = 0
//                 }else{
//                     b = 1
//                 }
//             }
//             if(b == 0){
//                 nombre_valor = valor_2[0] + " " + valor_2[1]
//                 console.log(nombre_valor)
//             }
//             else{
//                 inputs[0].setCustomValidity("El nombre debe tener mas de dos caracteres")
//             }
//         }
//         else{
//             if(valor.length >= 2){
//                 nombre_valor = valor
//                 console.log(nombre_valor)
//             }
//             else{
//                 inputs[0].setCustomValidity("El nombre debe tener mas de dos caracteres")
//             }
//         }
//     })
// }

// function validacion_apellido(){
//     let apellido = inputs[1]
//     apellido.addEventListener("blur", function(e){
//         let valor = apellido.value.trim()
//         if(valor.includes(" ")){
//             let valor_2 = valor.split(" ")
//             for (let i = 0; i < 2; i++) {
//                 if(valor_2[i].length >= 4){
//                     var b = 0
//                 }else{
//                     b = 1
//                 }
//             }
//             if(b == 0){
//                 apellido_valor = valor_2[0] + " " + valor_2[1]
//                 console.log(apellido_valor)
//             }
//             else{
//                 inputs[0].setCustomValidity("El apellido debe tener mas de dos caracteres")
//             }
//         }
//         else{
//             if(valor.length >= 2){
//                 apellido_valor = valor
//                 console.log(apellido_valor)
//             }
//             else{
//                 inputs[0].setCustomValidity("El apellido debe tener mas de dos caracteres")
//             }
//         }
//     })
// }

// function validacion_email(){
//     let email = inputs[2]
//     let email_valor
//     email.addEventListener("blur", function(e){
//         let valor = email.value.trim()
//         if(valor.includes("@dominio.com")){
//             let valor_2 = valor.split("@")
//             var b = 0
//             for(let i = 0 ;i < valor_2[0].length; i++){
//                 let letra = valor_2[0][i]
//                 let codigo = letra.charCodeAt()
//                 if(!(codigo >= 97 && codigo <= 122) && !(codigo >= 65 && codigo <= 90) && (codigo != 46) && (codigo != 95)){
//                     b = 1
//                 }
//             }
//             if( b == 0 && valor_2[1] == "dominio.com"){
//                 email_valor = valor
//                 console.log(email_valor)
//             }
//             else{
//                 inputs[2].setCustomValidity("ERROR")
//                 console.log("ERROR")
//             }
//         }else{
//             inputs[2].setCustomValidity("ERROR")
//             console.log("ERROR")
//         }
//     })
// }

// function validacion_reemail(){
//     let reemail = inputs[3]
//     let reemail_valor
//     reemail.addEventListener("blur", function(e){
//         let valor = reemail.value.trim()
//         if(valor == inputs[2].value.trim()){
//             reemail_valor = inputs[2].value.trim()
//             console.log(reemail_valor)
//         }else{
//             console.log("ERROR")
//             inputs[3].setCustomValidity("Ingrese el email anterior")
//         }
//     })
// }

// function validacion_titulo(){
//     let titulo = inputs[5]
//     let titulo_valor
//     titulo.addEventListener("blur",function(e){
//         if(titulo.value == ""){
//             titulo.value = "Post Anonimo"
//             titulo_valor = titulo.value 
//         }
//         else{
//             titulo_valor = titulo.value.trim()
//         }
//         console.log(titulo_valor)
//     })
// }

// function validacion_contraseña(){
//     let contraseña = inputs[4]
//     let contraseña_valor
//     contraseña.addEventListener("blur",function(e){
//         let valor = contraseña.value.trim()
//         var b = 1
//         if(valor.length >= 6){
//             for (let i = 0; i < valor.length; i++) {
//                 let letra = valor[i]
//                 let codigo = letra.charCodeAt()
//                 if(!(codigo >= 97 && codigo <= 122) && !(codigo >= 65 && codigo <= 90) && (codigo != 63) && (codigo != 33) && (codigo != 95) && (codigo != 45) ){
//                     b = 0
//                 }
//             }
//             if(b==1){
//                 contraseña_valor = valor
//                 console.log(contraseña_valor)
//             }
//             else{
//                 inputs[4].setCustomValidity("Caracteres erroneos")
//                 console.log("Caracteres erroneos")
//             }
//         }else{
//             inputs[4].setCustomValidity("Contraseña demasiada corta")
//             console.log("Contraseña demasiada corta")
//         }
//     })
// }

// function validacion_mensaje(){
//     let mensaje = inputs[6]
//     let mensaje_valor
//     mensaje.addEventListener("blur",function(e){
//         let valor = mensaje.value.trim()
//         if(valor.includes("<script") && valor.includes("</script>")){
//             inputs[6].setCustomValidity("Intento de ataque XSS")
//             console.log("Intento de ataque XSS")
//         }else{
//             mensaje_valor = valor
//             console.log(mensaje_valor)
//         }
//     })
// }

// validacion_nombre()
// validacion_apellido()
// validacion_email()
// validacion_reemail()
// validacion_contraseña()
// validacion_titulo()
// validacion_mensaje()

//Continuando con una extension del formulario de la clase pasada, esta vez ademas de animarlo vamos a intentar validarlo

//1)Asignarle un evento de blur a cada input del formulario de manera tal que se cumplan las siguientes validaciones sin usar expresiones regulares :
    //1.1)nombre : El nombre debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos dos letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.
    //1.2)apellido : El apellido debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos cuatro letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.
    //1.3)email : El email debe respetar el formato nombre@dominio.com pudiendo contener el nombre caracteres especiales como -_.  
    //1.4)reemail : Su valor debe ser identico al de email
    //1.5)contraseña : La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-.
    //1.6)titulo : El titulo puede ser opcional. Si el mismo está faltante, se debe usar el string "Post Anonimo"
    //1.7)mensaje : El mensaje debe tener como mínimo una letra. Puede ser cualquier caracter siempre y cuando el mismo no se imprima en pantalla sin ser escapado, de lo contrario podríamos tener un ataque XSS.

//2)Si no cumplieran con lo requerido, los mismos deberán mostrar un mensaje de error customizado utilizando la API de validación de HTML5 que le corresponda en cada caso. El elemento deberá además tener la clase error. 

//3)Si cumplieran con lo requerido deberán tener la clase success.

//4)Realizar las mismas operaciones pero esta vez dentro de un evento submit que deberá estar registrado en el formulario. 

//BONUS : 
//5)Realizar las mismas validaciones usando RegExp.
function validacion_nombre(){
    let nombre = inputs[0]
    let valor = nombre.value.trim()
    let regexp = /^([a-z]{2,})(\s)*([a-z]{2,})*$/
    if(regexp.test(valor)){
        if(valor.includes(" ")){
            valor = valor.split(" ")
            nombre_valor = valor[0] + " " + valor[1]
            console.log(nombre_valor)
        }else{
            nombre_valor = valor
            console.log(nombre_valor)
        }
    }else{
        //nombre.setCustomValidity("El nombre ingresado no es valido")
        console.log("NOMBRE ERRONEO")
    }
}

function validacion_apellido(){
    let apellido = inputs[1]
    let valor = apellido.value.trim()
    let regexp = /^([a-z]{4,})(\s)*([a-z]{4,})*$/
    if(regexp.test(valor)){
        if(valor.includes(" ")){
            valor = valor.split(" ")
            apellido_valor = valor[0] + " " + valor[1]
            console.log(apellido_valor)
        }else{
            apellido_valor = valor
            console.log(apellido_valor)
        }
    }else{
        //nombre.setCustomValidity("El nombre ingresado no es valido")
        console.log("APELLIDO ERRONEO")
    }
}

function validacion_email(){
    let email = inputs[2]
    let valor = email.value.trim()
    let regexp = /^([a-z]+)@([a-z]{4,})(\.com)$/
    if(regexp.test(valor)){
        email_valor = valor
        console.log(email_valor)
    }else{
        console.log("EMAIL ERRONEO")
    }
}

function validacion_reemail(){
    let reemail = inputs[3]
    let valor = reemail.value.trim()
    let regexp = /^([a-z]+)@([a-z]{4,})(\.com)$/
    if(regexp.test(valor) && valor == email_valor){
        reemail_valor = valor
        console.log(reemail_valor)
    }else{
        console.log("REEMAIL ERRONEO")
    }
}

function validacion_contraseña(){
    let contraseña = inputs[4]
    let valor = contraseña.value.trim()
    let regexp = /^[a-z\!?_-]{6,}$/
    if(regexp.test(valor)){
        contraseña_valor = valor
        console.log(contraseña_valor)
    }
    else{
        console.log("CONTRASEÑA ERRONEA")
    }
}

function validacion_titulo(){
    let titulo = inputs[5]
    let valor = titulo.value.trim()
    if(valor == ""){
        titulo_valor = "Post Anonimo"
    }
    else{
        titulo_valor = valor
    }
    console.log(titulo_valor)
}

function validacion_mensaje(){
    let mensaje = inputs[6]
    let valor = mensaje.value
    if(valor.includes("<script") || valor.includes("</script>")){
        console.log("Intento de ataque XSS")
    }else{
        mensaje_valor = valor
        console.log(mensaje_valor)
    }
}


function logSubmit(e){
    e.preventDefault()
    e.stopPropagation()
    validacion_nombre()
    validacion_apellido()
    validacion_email()
    validacion_reemail()
    validacion_contraseña()
    validacion_titulo()
    validacion_mensaje()
}

let form = document.querySelector("form")
form.addEventListener("submit",logSubmit)
