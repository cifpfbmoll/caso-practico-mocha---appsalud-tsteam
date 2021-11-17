const Bascula = {
  constructor () {
    this.pesos = [];
    this.alturas = [];
    this.fechas = [];
    this.anotaciones = 0;
    
    return {
      pesos: this.pesos,
      alturas: this.alturas,
      fechas: this.fechas,
      anotaciones: this.anotaciones,
    }
  },

  /**
   * Setters.
   */

  anotarPesoAltura(peso, altura, fecha) {
    if (!peso) {
      return "¡Debe registar un peso!";
    } else {
      let newPesos = [...this.pesos];
      let newAlturas = [...this.alturas];
      let newFechas = [...this.fechas];
      newPesos.push(peso);

      if (altura) {
        newAlturas.push(altura);
      } else {
        newAlturas.push(1);
      }

      if (fecha) {
        newFechas.push(fecha);
      } else {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        newFechas.push(`${day}/${month}/${year}`);
      }
      
      this.pesos = newPesos;
      this.alturas = newAlturas;
      this.fechas = newFechas;
      this.anotaciones = this.anotaciones + 1;
      return "¡Su peso se ha registrado correctamente!";
    }
  },

  /**
   * Getters.
   */

  obtenerNumeroAnotaciones() {
    return this.anotaciones;
  },
}

module.exports = Bascula;