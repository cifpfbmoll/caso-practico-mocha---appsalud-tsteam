var assert = require('assert');
var expect = require('chai').expect;
var Paciente = require('../paciente.js');
var Bascula = require('../bascula.js');

describe('Paciente', () => {
  /**
   * Casos test del constructor de Paciente.
   */
  it ('El constructor devuelve un objeto con las variables nombre, apellidos, fechasDeNacimiento inicializadas.', function(){
    var actualResult = Paciente.constructor();
    var expectedResult = {
      nombre: "Pepe",
      apellidos: "Pepito",
      fechaDeNacimiento: "18/11/1999",
    };
    
    expect(actualResult).to.eql(expectedResult);
  });
});