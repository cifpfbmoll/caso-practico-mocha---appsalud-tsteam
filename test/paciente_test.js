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
      miBascula: {
        alturas: [ 1.6, 1.61 ],
        anotaciones: 3,
        fechas: [ "29/10/2021", "03/11/2021", "11/11/2021" ],
        pesos: [ 75.5, 63.45, 61.9 ]
      }
    };
    
    expect(actualResult).to.eql(expectedResult);
  });

  it ('El contructor no debe devolver un objeto vacio.', function(){
    var actualResult = Paciente.constructor();
    var expectedResult = {};
    
    expect(actualResult).to.not.eql(expectedResult);
  });

  it ('Que no le falte ningún valor al objeto que devuelve el constructor.', function(){
    var actualResult = Bascula.constructor();
    var expectedResult = {
      nombre: "Pepe",
      apellidos: "Pepito",
      fechaDeNacimiento: "18/11/1999",
    };
    
    expect(actualResult).to.not.eql(expectedResult);
  });

  /**
   * Casos test Saludar.
   */
  it ('Debe devolver Hola soy Pepe', function(){
    var actualResult = Paciente.saludar();
    var expectedResult = "Hola soy Pepe"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('No debe devolver Hola soy Juan', function(){
    var actualResult = Paciente.saludar();
    var expectedResult = "Hola soy Juan"
    
    expect(actualResult).not.to.equal(expectedResult);
  });

  it ('No debe devolver un string vacío', function(){
    var actualResult = Paciente.saludar();
    var expectedResult = ""
    
    expect(actualResult).not.to.equal(expectedResult);
  });

  /**
   * Casos test obtenerNombre.
   */
  it ('Debe devolver Pepe', function(){
    var actualResult = Paciente.obtenerNombre();
    var expectedResult = "Pepe"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('no debe devolver Juan', function(){
    var actualResult = Paciente.obtenerNombre();
    var expectedResult = "Juan"
    
    expect(actualResult).not.to.equal(expectedResult);
  });

  /**
   * Casos test modificarNombre.
   */
  it ('Se modifica el nombre', function(){
    var actualResult = Paciente.modificarNombre("Antonio");
    var expectedResult = "Tu nuevo nombre es Antonio"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('Si no se pasa nombre debe dar "Debes añadir tu nuevo nombre"', function(){
    var actualResult = Paciente.modificarNombre();
    var expectedResult = "Debes añadir tu nuevo nombre"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('No debe dar "Tu nuevo nombre es Juan', function(){
    var actualResult = Paciente.modificarNombre("Francisco");
    var expectedResult = "Tu nuevo nombre es Juan"
    
    expect(actualResult).not.to.equal(expectedResult);
  });

  /**
   * Casos test obtenerApellidos.
   */
  it ('Debe devolver Pepito', function(){
    var actualResult = Paciente.obtenerApellidos();
    var expectedResult = "Pepito"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('No debe devolver García', function(){
    var actualResult = Paciente.obtenerApellidos();
    var expectedResult = "García"
    
    expect(actualResult).not.to.equal(expectedResult);
  });

  /**
   * Casos test modificarApellidos.
   */
  it ('Se modifica el apellido', function(){
    var actualResult = Paciente.modificarApellidos("García");
    var expectedResult = "Tu nuevo apellido es García"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('Si no se le pasa apellido debe dar "Debes añadir tu nuevo apellido"', function(){
    var actualResult = Paciente.modificarApellidos();
    var expectedResult = "Debes añadir tu nuevo apellido"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('No debe de dar "Tu nuevo apellido es Corbalán"', function(){
    var actualResult = Paciente.modificarApellidos("García");
    var expectedResult = "Tu nuevo apellido es Corbalán"
    
    expect(actualResult).not.to.equal(expectedResult);
  });

  /**
   * Casos test obtenerFechaNacimiento.
   */
  it ('Debe devolver 18/11/1999', function(){
    var actualResult = Paciente.obtenerFechaNacimiento();
    var expectedResult = "18/11/1999"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('No debe devolver 12/11/1999', function(){
    var actualResult = Paciente.obtenerFechaNacimiento();
    var expectedResult = "12/11/1999"
    
    expect(actualResult).not.to.equal(expectedResult);
  });

  /**
   * Casos test modificarFechaNacimento.
   */
  it ('Se modifica la fecha de nacimiento', function(){
    var actualResult = Paciente.modificarFechaNacimento("11/02/2000");
    var expectedResult = "Tu nueva fecha de nacimiento es 11/02/2000"
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('Si no se le pasa fecha debe dar "Debes añadir tu nueva fecha de nacimiento"', function(){
    var actualResult = Paciente.modificarFechaNacimento();
    var expectedResult = "Debes añadir tu nueva fecha de nacimiento"
    
    expect(actualResult).to.equal(expectedResult);
  });

  /**
   * Casos test La Edad del Paciente.
   */
  it ('Obtener la Edad del Paciente a partir de los datos del paciente', ()=>{  
    var actualResult = Paciente.obtenerEdad();
    var expectedResult = 21;
    
    expect(actualResult).to.equal(expectedResult);
  });

  it ('No debe de dar 25', ()=>{  
    var actualResult = Paciente.obtenerEdad();
    var expectedResult = 25;

    expect(actualResult).not.to.equal(expectedResult);
  });

  /**
   * Casos test obtenerBascula.
   */
  it ('Asociando báscula al paciente', ()=> {
    var actualResult = Paciente.obtenerBascula();
    var expectedResult = Bascula.constructor();

    expect(actualResult).to.eql(expectedResult);
  });

  it ('Que no le falten valores a la báscula', ()=> {
    var actualResult = Paciente.obtenerBascula();
    var expectedResult = {
      pesos: [ 75.5, 63.45, 61.90],
      alturas: [ 1.60, 1.61,],
      fechas: [ '29/10/2021', '03/11/2021', '11/11/2021'],
    };

    expect(actualResult).not.to.eql(expectedResult);
  });
  
  it ('Que no devuelva un objeto vacío', ()=> {
    var actualResult = Paciente.obtenerBascula();
    var expectedResult = {};

    expect(actualResult).not.to.eql(expectedResult);
  });

  /**
   * Casos test obtenerBascula.
   */
  it ('calcularIMC', ()=> {
    var actualResult = Paciente.calcularIMC();
    var expectedResult = Bascula.calcularIMC();

    expect(actualResult).to.equal(expectedResult);
  });

  it ('Que no devuelva 12', ()=> {
    var actualResult = Paciente.calcularIMC();
    var expectedResult = 12;

    expect(actualResult).not.to.equal(expectedResult);
  });
});