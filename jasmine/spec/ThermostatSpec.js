describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it ("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it ("increases the temperature", function(){
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(21)
  });

  it ("decreases the temperature", function(){
    thermostat.decreaseTemp()
    expect(thermostat.temperature).toEqual(19)
  });

  it ("resets the temperature", function(){
    thermostat.decreaseTemp()
    thermostat.decreaseTemp()
    thermostat.resetTemp()
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMP)
  });

  describe("Errors", function(){

    it ("doesn't go below min temp", function() {
      var i = thermostat.DEFAULT_TEMP - thermostat._minTemp;

      while(i--) {
        thermostat.decreaseTemp()
      }
      expect(function() {
        thermostat.decreaseTemp();}).toThrowError(TypeError, "Can't go below " + thermostat._minTemp);
    });

    it ("doesn't go above max temp", function() {

      for (i = thermostat.DEFAULT_TEMP; i < thermostat._maxTemp; i ++){
        thermostat.increaseTemp();
      };
      console.log(thermostat.temperature);
      expect(function() {
        thermostat.increaseTemp();}).toThrowError(TypeError, "Can't go above " + thermostat._maxTemp);
    });
  });


});