var assert = require('assert');
var expect = require('chai').expect;
var Paciente = require('../paciente.js');
var Bascula = require('../bascula.js');

describe('Paciente', () => {
  /**
   * Casos test del constructor de Paciente.
   */
 
it ('El constructor devuelve un objeto con las variables nombre,apellidos, fechaNacimiento.', ()=>{
    //Falta Inicializar "John Doe 11/11/21 "
    var paciente02 = new Paciente()
    var paciente01 = new Paciente()
    
     expect(paciente01).to.eql(paciente02);
  })
});