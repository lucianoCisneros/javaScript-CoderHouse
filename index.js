$( document ).ready(function (){
    let pedir_nombre = prompt("Nos gustaria saber tu nombre:");
    let nombre_pantalla = document.getElementById('nombre_usuario');

    nombre_pantalla.innerHTML = pedir_nombre;

    sessionStorage.nombre = pedir_nombre;
    
})


class turno {

    constructor(nombre, apellido, email, telefono, fecha, servicios, motivo){
         this.nombre = nombre;
         this.apellido = apellido;
         this.email = email;
         this.telefono = telefono;
         this.fecha = fecha;
         this.servicios = servicios;
         this.motivo = motivo;
    }

}

nuevo_turno = new turno (document.querySelector("input[name = 'nombre']").value, document.querySelector("input[name = 'email']").value, document.querySelector("input[name = 'telefono']").value, document.querySelector("input[name = 'fecha']").value, servicios = document.querySelector("select[name = 'servicios']").value, document.querySelector("textarea[name = 'motivo']").value);

turno_JSON = JSON.stringify(nuevo_turno);

localStorage.turno = turno_JSON;


$( "#motivo" ).keypress(function (evento){
    if (evento.keyCode == 13){
        
        alert('Gracias por enviar el formulario!');

    }
})