class Paciente{
    constructor(nombre,apellidos,fechaNacimiento){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
    }

    saludar(){
        return "Hola"+this.nombre;
    }
   get nombre(){
        return this.nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

var paciente02 = new Paciente("john","Doe",Date());
module.exports = Paciente;