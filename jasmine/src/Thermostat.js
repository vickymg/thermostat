'use strict';

function Thermostat() {
  this.temperature = 20;
  this._min_temp = 10;
};

Thermostat.prototype.increaseTemp = function() {
    this.temperature += 1
 }

Thermostat.prototype.decreaseTemp = function() {
   if (this.temperature <= this._min_temp){
    throw new TypeError("Can't go below " + this._min_temp)
  }
  this.temperature -= 1
}
