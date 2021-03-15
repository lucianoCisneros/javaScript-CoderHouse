function informacion (){

    let info = prompt("Nos gustaria saber donde nos conociste:");

    return alert("Gracias por tu colaboracion!");
    
}

informacion();

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

    nuevo_turno = new turno (document.querySelector("input[name = 'nombre']").value, document.querySelector("input[name = 'apellido']").value, document.querySelector("input[name = 'email']").value, document.querySelector("input[name = 'telefono']").value, document.querySelector("input[name = 'fecha']").value, servicios = document.querySelector("select[name = 'servicios']").value, document.querySelector("textarea[name = 'motivo']").value);
    almacenar_turno = turnos.push(this.nuevo_turno);

}