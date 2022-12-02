export function validarFormulario(datos){
    console.log("estamos validando.....")

    let campoNombre=document.getElementById("nombres")
    let campoDocumento=document.getElementById("documento")
    

    if(datos.nombre=="" && datos.documento==""){
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ambos campos deben ser diligenciados',
            
        })

        campoNombre.classList.add("is-invalid")
        campoDocumento.classList.add("is-invalid")

    }else if(datos.nombre=="" && datos.documento !=""){
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el nombre debe ser diligenciado',
            
        })
        campoNombre.classList.add("is-invalid")
        campoDocumento.classList.remove("is-invalid")

    }else if(datos.nombre!="" && datos.documento==""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el documento debe ser diligenciado',
            
        })
        campoNombre.classList.remove("is-invalid")
        campoDocumento.classList.add("is-invalid")
    }else{
        campoNombre.classList.remove("is-invalid")
        campoDocumento.classList.remove("is-invalid")
        console.log("tenemos los datos completos")
        console.log(datos)
    }


}