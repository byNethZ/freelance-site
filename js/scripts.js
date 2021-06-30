const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

/* const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto); */

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if (nombre === null || email === null || mensaje === null){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return //Corta la ejecucion del codigo
    } else{
        mostrarAlerta('Muchas gracias por contactarme', false)
    }

    //Crear otra alerta de envio

    limpiarFormulario()

})


//Funciones

//Refactorizar las funciones mostrarAviso y mostrarError de mas abajo
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error = true){
        alerta.classList.add('error');
    }else{alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    }, 5000)
}

function limpiarFormulario() {

    formulario.reset();
}


/* function leerTexto(e){
    datos[e.target.id] = e.target.value; //Se colocan los datos en el id del arreglo datos
    
} */