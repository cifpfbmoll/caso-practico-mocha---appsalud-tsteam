var assert = require('assert');
var expect = require('chai').expect;
var Bascula = require('../bascula.js');

describe('Bascula', () => {
  /**
   * Casos test del constructor.
   */
  it ('El contructor devuelve un objeto con las variables pesos, altura, fechas y anotaciones inicializadas.', function(){
    var actualResult = Bascula.constructor();
    var expectedResult = {
      pesos: [],
      alturas: [],
      fechas: [],
      anotaciones: 0,
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
});