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

  it ("doesn't go below min temp", function() {
    var i = thermostat.temperature - thermostat._min_temp;

    while(i--) {
      thermostat.decreaseTemp()
    }
    expect(function() {
      thermostat.decreaseTemp();}).toThrowError(TypeError, "Can't go below " + thermostat._min_temp);
  });

  it ("doesn't go above max temp", function() {
    var i = thermostat.temperature - thermostat._min_temp;

    while(i--) {
      thermostat.decreaseTemp()
    }
    expect(function() {
      thermostat.decreaseTemp();}).toThrowError(TypeError, "Can't go below " + thermostat._min_temp);
  });
});