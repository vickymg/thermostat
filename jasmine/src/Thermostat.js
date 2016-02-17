'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP
  this._minTemp = 10;
  this.savingMode = true;
  this._maxTemp = this.determineMaxTemp();
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.increaseTemp = function() {

  if (this.temperature >= this._maxTemp){
    throw new TypeError("Can't go above " + this._maxTemp)
  }
  this.temperature += 1
 }

Thermostat.prototype.decreaseTemp = function() {
   if (this.temperature <= this._minTemp){
    throw new TypeError("Can't go below " + this._minTemp)
  }
  this.temperature -= 1
}

Thermostat.prototype.savingModeOff = function() {
  this.savingMode = false;
  this.determineMaxTemp();
}

Thermostat.prototype.savingModeOn = function() {
  this.savingMode = true;
  this.determineMaxTemp();
}

Thermostat.prototype.determineMaxTemp = function(){
  if(this.savingMode === true) {
    return this._maxTemp = 25;
  } else {
    return this._maxTemp = 32;
   }
}