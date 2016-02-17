function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.maximumTemperature = 25
  this.minimumTemperature = 10;
  this.currentEnergyUsage = 'yellow'
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
    this._energyUsage();
};

Thermostat.prototype.switchPowerSaving = function() {
  if(this.powerSaving === true) {
  this.powerSaving = false;
  this.maximumTemperature = 32;
} else {
  this.powerSaving = true;
  this.maximumTemperature = 25;
  };
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype._energyUsage = function() {
  if (this.temperature < 18) {
    this.currentEnergyUsage = 'green';
  };
};
