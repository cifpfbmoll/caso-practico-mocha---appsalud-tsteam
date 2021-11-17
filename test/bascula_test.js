const assert = require('assert');
const chai = require('chai');
const { it } = require('mocha');
const expect = chai.expect;
//const { it } = require('mocha');

//const Bascula = require('../bascula2.js');
const Bascula = require('../bascula2.js');

describe('Bascula', () => {
 
  describe('.value',() => {
    it('Encendiendo la báscula', () => {
var bascula02 = new Bascula(90,180);
     
      console.log("La báscula está lista:"+typeof(bascula02));
      // const pesos = [90,110,85];
      // const alturas = [180,179,178];
      
      // const result = Bascula.assert.isObject();
      
      // assert.equal(true, result);
    });



   });
});