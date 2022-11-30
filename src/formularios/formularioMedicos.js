import {validarFormulario} from './validacionFormularioMedico.js'

//creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad){

    let nombresMedico=etiquetaNombre.value
    let documentoMedico=etiquetaDocumento.value
    let especialidadMedico=etiquetaEspecialidad.value

    //debemos almacenar todos los valores del formulario
    //en una SOLA VARIABLE
    //OBJETO=ALMCACENAR VARIOS DATOS EN 1 SOLO ESPACIO DE MEMORIA
    let datosFormularioMedico={
        nombre:nombresMedico, 
        documento:documentoMedico,
        especialidad:especialidadMedico 
    }
    console.log(datosFormularioMedico)

    

}