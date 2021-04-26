$( document ).ready(function (){

    let pedir_nombre = prompt('Nos gustaria saber tu nombre:');
    let nombre_pantalla = document.getElementById('nombre_usuario');
    
    if(pedir_nombre.length >= 3){
        nombre_pantalla.innerHTML = ' ' + pedir_nombre;
        sessionStorage.nombre = pedir_nombre;
    }

})


class turno {

    constructor(nombre, email, telefono, fecha, horario, servicios, prepaga, motivo){
         this.nombre = nombre;
         this.email = email;
         this.telefono = telefono;
         this.fecha = fecha;
         this.horario = horario;
         this.servicios = servicios;
         this.prepaga = prepaga;
         this.motivo = motivo;
    }

}

function espera(){
 
    nuevo_turno = new turno (document.getElementById('nombre').value, document.querySelector('input[name = "email"]').value, document.querySelector('input[name = "telefono"]').value, document.querySelector('input[name = "fecha"]').value, document.querySelector('select[name = "horario"]').value, document.querySelector('select[name = "servicios"]').value, document.querySelector('select[name = "prepaga"]').value, document.querySelector('textarea[name = "motivo"]').value);
    turno_JSON = JSON.stringify(nuevo_turno);
    localStorage.turno = turno_JSON;
    alert('Gracias ' + sessionStorage.nombre + ' te esperamos el dia ' + document.querySelector('input[name = "fecha"]').value + ' en el siguiente horario: ' + document.querySelector('select[name = "horario"]').value + '.');
   
}


$( '#motivo' ).keypress((evento) => {

    if (evento.keyCode == 13){
        
        alert('Gracias por enviar el formulario!');

    }

})