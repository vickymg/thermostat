function Thermostat() {
  this.temperature = 20;
  this.maximumTemperature = 25;
  this.minimumTemperature = 10;
  this.powerSaving = true;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this.temperature === this.maximumTemperature) {
    throw new Error("Cannot increase above 25 degrees!")
  }
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if(this.temperature === 10) {
    throw new Error("Cannot decrease below 10 degrees!");
  }
    this.temperature -= 1;
};
