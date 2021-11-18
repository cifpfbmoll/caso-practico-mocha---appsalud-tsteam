var assert = require('assert');
var expect = require('chai').expect;
var Bascula = require('../bascula.js');

describe('Bascula', () => {
  /**
   * Casos test del constructor.
   */
  it ('El constructor devuelve un objeto con las variables pesos, altura, fechas y anotaciones inicializadas.', function(){
    var actualResult = Bascula.constructor();
    var expectedResult = {
      pesos: [ 75.5, 63.45, 61.90],
      alturas: [ 1.60, 1.61,],
      fechas: [ '29/10/2021', '03/11/2021', '11/11/2021'],
      anotaciones: 3,
    };
    
    expect(actualResult).to.eql(expectedResult);
  });

  it ('El contructor no debe devolver un objeto vacio.', function(){
    var actualResult = Bascula.constructor();
    var expectedResult = {};
    
    expect(actualResult).to.not.eql(expectedResult);
  });

  it ('Que no le falte ningún valor al objeto que devuelve el constructor.', function(){
    var actualResult = Bascula.constructor();
    var expectedResult = {
      pesos: [],
      alturas: [],
      fechas: [],
    };
    
    expect(actualResult).to.not.eql(expectedResult);
  });

  /**
   * Casos test de anotarPesoAltura.
   */
  it ('Crear anotarPesoAltura', function(){
    var actualResult = Bascula.anotarPesoAltura(75, 1.7);
    var expectedResult = '¡Su peso se ha registrado correctamente!';
    
    expect(actualResult).to.eql(expectedResult);
  });

  /**
   * Casos test de obtenerPesoMaximo.
   */
  it ('obtenerNumeroAnotaciones', function(){
    var actualResult = Bascula.obtenerNumeroAnotaciones();
    var expectedResult = 4;
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test de obtenerPesoMaximo.
   */
  it ('obtenerPesoMaximo', function(){
    var actualResult = Bascula.obtenerPesoMaximo();
    var expectedResult = 75.5;
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test de obtenerPesoMinimo.
   */
  it ('obtenerPesoMinimo', function(){
    var actualResult = Bascula.obtenerPesoMinimo();
    var expectedResult = 61.9;
    
    expect(actualResult).to.equal(expectedResult);
  });

    /**
     * Casos test de CalcularIMC. Los valores son 170 altura, 65 peso
     */
    it ('calcularIMC', () => {
      var actualResult = Bascula.calcularIMC();
      var expectedResult = 25.95;
      
      expect(actualResult).to.equal(expectedResult);
    });
});