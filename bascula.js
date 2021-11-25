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
  obtenerPesoMaximo() {
    return Math.max(...this.pesos);
    
  },
  obtenerPesoMinimo() {
    return Math.min(...this.pesos);
  },
 
  calcularIMC(){
    let altura = this.alturas[this.alturas.length - 1];
    let peso = this.pesos[this.pesos.length - 1];

    let indice = Number((peso / (altura * altura)).toFixed(2));

    return indice;
  },

  describirIMC(imc) {
    let = "";
    if (imc < 16) {
      resultado = "Imc inferior a 16: Infrapeso (delgadez severa).";
    }
    if (16 <= imc && imc < 17) {
      resultado = "Imc entre 16–17: Infrapeso (delgadez moderada).";
    }
    if (17 <= imc && imc < 18.5) {
      resultado = "Imc entre 17-18.5: Infrapeso (delgadez aceptable).";
    }
    if (18.5 <= imc && imc < 25) {
      resultado = "Imc entre 18.5-25: Peso normal.";
    }
    if (25 <= imc && imc < 30) {
      resultado = "Imc entre 25-30: Sobrepeso.";
    }
    if (30 <= imc && imc < 35) {
      resultado = "Imc entre 30-35: Obeso (Tipo I).";
    }
    if (35 <= imc && imc < 40) {
      resultado = "Imc entre 35-40: Obeso (Tipo II).";
    }
    if (40 <= imc) {
      resultado = "Imc superior a 40: Obeso (Tipo III).";
    }

   return resultado;
  }
}


module.exports = Bascula;