const Bascula = {
  constructor () {
    this.pesos = [ 75.5, 63.45, 61.90];
    this.alturas = [ 1.60, 1.61,];
    this.fechas = [ '29/10/2021', '03/11/2021', '11/11/2021'];
    this.anotaciones = 3;
    
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