let dropzone = document.querySelector("#dropzone")
let label_archivos = dropzone.children[0]
let input_archivos = dropzone.children[1]
let viejo_texto

input_archivos.addEventListener("change",e=>{
    e.stopPropagation()
    let archivo = e.target.files
    console.log(archivo)
})

//DRAG & DROP API
//dragenter - dragleave - dragover - drop
dropzone.addEventListener("dragenter",()=>{
    viejo_texto = label_archivos.innerText
    label_archivos.innerText = "Soltalo ahora!"
})

dropzone.addEventListener("dragleave",()=>{
    label_archivos.innerText = viejo_texto
})