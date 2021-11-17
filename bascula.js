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
 
  calcularIMC(altura=170,peso=65){
    altura = Math.round(altura) / 100;
    peso = Math.round(peso);
    var indice = (peso / Math.pow(altura, 2));
    var resultado = "";
    if (indice < 20)
            {
              resultado = "Su peso es inferior al normal.";
            }
            else if (indice >= 20 && indice < 24)
            {
              resultado = "Su peso es normal.";
            }
            else if (indice >= 24 && indice < 29)
            {
              resultado = "Tiene el peso superior al normal.";
            }
            else
            {
              resultado = "Tiene usted obesidad.";
            }  
    return resultado;
  },

  describirIMC(altura=180,peso=70) {
    altura = parseInt(altura)/100;
    indice=peso/(altura*altura);
   
    var resultado = "";
    if (indice < 20)
            {
              resultado = "Su peso es inferior al normal.";
            }
            else if (indice >= 20 && indice < 24)
            {
              resultado = "Su peso es normal.";
            }
            else if (indice >= 24 && indice < 29)
            {
              resultado = "Tiene el peso superior al normal.";
            }
            else
            {
              resultado = "Tiene usted obesidad.";
            }  
            
   return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
  }


}


module.exports = Bascula;