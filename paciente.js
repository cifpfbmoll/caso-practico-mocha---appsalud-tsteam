const Bascula = require("./bascula");

const Paciente = {
  constructor () {
    this.nombre = 'Pepe';
    this.apellidos = 'Pepito';
    this.fechaDeNacimiento = '18/11/1999';
    this.miBascula = Bascula.constructor();
      
    return {
      nombre: this.nombre,
      apellidos: this.apellidos,
      fechaDeNacimiento: this.fechaDeNacimiento,
      miBascula: this.miBascula,
    }
  },

  /**
   * Setters.
   */
  modificarNombre(newName) {
    if (!newName) {
      return "Debes añadir tu nuevo nombre";
    } else {
      this.nombre = newName;
      return `Tu nuevo nombre es ${this.nombre}`;
    }
  },
  modificarApellidos(nuevoApellidos) {
    if (!nuevoApellidos) {
      return "Debes añadir tu nuevo apellido";
    } else {
      this.apellidos = nuevoApellidos;
      return `Tu nuevo apellido es ${this.apellidos}`;
    }
  },
  modificarFechaNacimento(nuevaFechaDeNacimiento) {
    if (!nuevaFechaDeNacimiento) {
      return "Debes añadir tu nueva fecha de nacimiento";
    } else {
      this.fechaDeNacimiento = nuevaFechaDeNacimiento;
      return `Tu nueva fecha de nacimiento es ${this.fechaDeNacimiento}`;
    }
  },
  modificarBascula(bascula) {
    if (!bascula.peso) {
      return "Debes añadir mínimo tu peso";
    } else {
      Bascula.anotarPesoAltura(bascula.peso, bascula?.altura, bascula?.fecha);
      return "¡Tu nuevo peso se ha registrado correctamente!";
    }
  },
  
  
  /**
   * Getters.
   */
  saludar() {
    return `Hola soy ${this.nombre}`;
  },
  obtenerNombre() {
    return this.nombre;
  },
  obtenerApellidos() {
    return this.apellidos;
  },
  obtenerFechaNacimiento() {
    return this.fechaDeNacimiento;
  },
  obtenerEdad() {
    var dateString = this.fechaDeNacimiento;
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
  },
  obtenerBascula() {
    return this.miBascula; 
  },
  calcularIMC(){
    return Bascula.calcularIMC();
  },
}


module.exports = Paciente;