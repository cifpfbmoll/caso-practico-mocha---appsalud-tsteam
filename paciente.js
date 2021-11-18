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
}


module.exports = Paciente;