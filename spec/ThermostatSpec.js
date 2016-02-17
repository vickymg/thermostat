'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has a starting temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    expect(thermostat.minimumTemperature).toEqual(10);
  });

  it('cannot set temperature lower than 10 degrees', function() {
    for(var i = 20; i > 10; i--) {
      thermostat.decreaseTemperature();
    }
    expect(function(){thermostat.decreaseTemperature();} ).toThrowError("Cannot decrease below 10 degrees!")
    expect(thermostat.minimumTemperature).toEqual(10);
  });

});
