function nombre (){

    let pedir_nombre = prompt("Nos gustaria saber tu nombre:");
    let nombre_pantalla = document.getElementById('nombre_usuario');

    nombre_pantalla.innerHTML = pedir_nombre;

    sessionStorage.setItem('Nombre', pedir_nombre);
    
    return nombre_pantalla;

}

nombre();



let turnos = [];

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

turnos.push(nuevo_turno);

console.log(turnos);

function enviar_form(evento) {
    if (evento.keyCode == 13){
        
        alert('Gracias por enviar el formulario!');

    }
}
