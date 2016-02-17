function Thermostat() {
  this.temperature = 20;
  this.minimumTemperature = 10;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if(this.temperature === 10) {
    throw new Error("Cannot decrease below 10 degrees!");
  }
    this.temperature -= 1;
};
