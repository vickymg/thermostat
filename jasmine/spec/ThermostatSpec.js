describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it ("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
    expect(thermostat.screenColor).toEqual('yellow');
  });

  it ("increases the temperature", function(){
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it ("decreases the temperature", function(){
    thermostat.decreaseTemp();
    thermostat.decreaseTemp();
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toEqual(17);
    console.log(thermostat.temperature)
    expect(thermostat.screenColor).toEqual('green');
  });

  it ("resets the temperature", function(){
    thermostat.decreaseTemp();
    thermostat.decreaseTemp();
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMP)
  });

  it ("power saving off changes max temperature", function(){
    thermostat.savingModeOff();
    expect(thermostat._maxTemp).toEqual(32);
  });

  it ("power saving on changes back max temperature", function(){
    thermostat.savingModeOn();
    expect(thermostat._maxTemp).toEqual(25)
  });

  it ("above 25 degrees returns red screen color", function(){

    for (i = thermostat.DEFAULT_TEMP; i < (thermostat._maxTemp) ; i ++){
      thermostat.increaseTemp();
    };
    expect(thermostat.screenColor).toEqual('red');

  });
  describe("Errors", function(){

    it ("doesn't go below min temp", function() {
      var i = thermostat.DEFAULT_TEMP - thermostat._minTemp;

      while(i--) {
        thermostat.decreaseTemp();
      }
      expect(function() {
        thermostat.decreaseTemp();}).toThrowError(TypeError, "Can't go below " + thermostat._minTemp);
    });

    it ("doesn't go above max temp", function() {

      for (i = thermostat.DEFAULT_TEMP; i < thermostat._maxTemp; i ++){
        thermostat.increaseTemp();
      };
      expect(function() {
        thermostat.increaseTemp();}).toThrowError(TypeError, "Can't go above " + thermostat._maxTemp);
    });
  });


});