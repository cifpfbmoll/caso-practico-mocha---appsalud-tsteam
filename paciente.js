const Paciente = {
  constructor () {
    this.nombre = 'Pepe';
    this.apellidos = 'Pepito';
    this.fechaDeNacimiento = '18/11/1999';
      
    return {
      nombre: this.nombre,
      apellidos: this.apellidos,
      fechaDeNacimiento: this.fechaDeNacimiento,
    }
  },

  /**
   * Setters.
   */
  modificarNombre(newName) {
    this.nombre = newName;
    return `Tu nuevo nombre es ${this.nombre}`;
  },
  modificarApellidos(nuevoApellidos) {
    this.apellidos = nuevoApellidos;
    return `Tu nuevo apellido es ${this.apellidos}`;
  },
  modificarFechaNacimento(nuevaFechaDeNacimiento) {
    this.fechaDeNacimiento = nuevaFechaDeNacimiento;
    return `Tu nueva fecha de nacimiento es ${this.fechaDeNacimiento}`;
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
}


module.exports = Paciente;