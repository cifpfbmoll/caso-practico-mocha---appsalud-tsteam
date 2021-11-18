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

  /**
   * Casos test Saludar.
   */
  it ('Debe devolver Hola soy Pepe', function(){
    var actualResult = Paciente.saludar();
    var expectedResult = "Hola soy Pepe"
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test obtenerNombre.
   */
  it ('Debe devolver Pepe', function(){
    var actualResult = Paciente.obtenerNombre();
    var expectedResult = "Pepe"
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test modificarNombre.
   */
  it ('Se modifica el nombre', function(){
    var actualResult = Paciente.modificarNombre("Antonio");
    var expectedResult = "Tu nuevo nombre es Antonio"
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test obtenerApellidos.
   */
  it ('Debe devolver Pepito', function(){
    var actualResult = Paciente.obtenerApellidos();
    var expectedResult = "Pepito"
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test modificarApellidos.
   */
  it ('Se modifica el apellido', function(){
    var actualResult = Paciente.modificarApellidos("Rodolfo");
    var expectedResult = "Tu nuevo apellido es Rodolfo"
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test obtenerFechaNacimiento.
   */
    it ('Debe devolver 18/11/1999', function(){
      var actualResult = Paciente.obtenerFechaNacimiento();
      var expectedResult = "18/11/1999"
      
      expect(actualResult).to.equal(expectedResult);
    });

  /**
   * Casos test modificarFechaNacimento.
   */
  it ('Se modifica la fecha de nacimiento', function(){
    var actualResult = Paciente.modificarFechaNacimento("11/02/2000");
    var expectedResult = "Tu nueva fecha de nacimiento es 11/02/2000"
    
    expect(actualResult).to.equal(expectedResult);
  });
});