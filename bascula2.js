class Bascula{
  constructor(pesos,alturas,anotaciones){
      this.pesos = [90,110,120];//pesos;// [90,110,70,40];
      this.alturas = [180,179,176];//alturas;//[170,171,169];
      this.anotaciones = [0,1,2,3];//anotaciones ;//0;
  
  }
  obtenerAnotaciones(){
    return '0';
  }
  obtenerNumeroAnotaciones(anotaciones) {
      return `${this.anotaciones} :Anotación`;
    }
    anotarPesoAltura() {
      return "";
    }
    obtenerPesoMaximo() {
      console.log(Math.max(...this.pesos));
      return "";
    }
    obtenerPesoMinimo() {
      console.log(Math.min(...this.pesos));
      return "";
    }
    calcularIMC(altura,peso) {
     
      altura=Math.round(altura)/100;
      peso = Math.round(peso);
      var index = (peso/Math.pow(altura,2));
      var result = "";
      if(index<16){
        result = "InfraPeso: Delgadez Severa";
      }else if( index === 16 || index === 17 ){
        result = "InfraPeso: Delgadez Moderada";
      }else if( index > 17.1 && index <18.5){
        result = "InfraPeso: Delgadex aceptable";
      }else if( index >= 18.5 & index < 25){
        result = "Peso Normal";
      }else if( index > 25 || index < 30){
        result = "SobrePeso";
      }else if( index > 30.1 && index < 35){
        result = "Obeso (tipo I)";
      }else if( index > 35.1 && index < 39.9){
        result = "Obeso (tipo II)";
      }else if( index> 40){
        result = "Obeso (tipo III)";
      }
    }
    describirIMC() {
      return `Esto su peso:${this.pesos[0]} y su altura: ${this.alturas[0]}`
    }
  
}

//var prueba = calcularIMC(180,90) ;

var pesos = [90];
// var a = prompt("Inserte su peso");
// var b = prompt("Inserte su altura");
var basc = new Bascula();
var bascula01 = new Bascula();

//console.log(basc.pesos[1]);
//console.log(basc.obtenerPesoMaximo());
//console.log(basc.obtenerPesoMinimo());
//console.log(basc.calcularIMC(altura,peso));
//console.log(typeof(basc));
console.log("Usted Mide:"+bascula01.alturas[0]+"cm");
console.log("Usted Pesa:"+bascula01.pesos[0]+"kg");




// function Bascula(pesos,alturas,obtenerNumeroAnotaciones) {
//   this.pesos = [90,110,70,40];
//   this.alturas = [];
//   this.obtenerNumeroAnotaciones= 0;
// }
  // const Bascula = {
  // constructor () {
  // },
  //     pesos: [90,120,100],
  //     alturas: [180,90,110],
  //     fechas: ["11-11-2021","12-11-2021","16-11-2021"],
  //     anotaciones: 0,
      // obtenerNumeroAnotaciones:function() {
      //   return `${this.anotaciones} :Anotación`;
      // },
      // anotarPesoAltura:function() {
      //   return "";
      // },
      // obtenerPesoMaximo:function () {
      //   return "";
      // },
      // obtenerPesoMinimo:function () {
      //   return "";
      // },
      // calcularIMC:function(altura,peso) {
      //   //IMC = peso / altura2
      // },
      // describirIMC:function() {
      //   return `Esto su peso:${this.pesos[0]} y su altura: ${this.alturas[0]}`
      // }

  



      module.exports = Bascula;