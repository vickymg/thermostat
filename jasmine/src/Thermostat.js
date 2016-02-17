'use strict';

var maxTempHash = {savingOff:32, savingOn:25}
var tempRange= {high: 32, medium: 25, low: 18}

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP
  this._minTemp = 10;
  this._maxTemp = maxTempHash.savingOn;
  this.savingMode = true;
  this.screenColor = this.determineColor();
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.increaseTemp = function() {

  if (this.temperature >= this._maxTemp){
    throw new TypeError("Can't go above " + this._maxTemp)
  }
  this.temperature += 1;
  this.screenColor = this.determineColor();
 }

Thermostat.prototype.decreaseTemp = function() {
   if (this.temperature <= this._minTemp){
    throw new TypeError("Can't go below " + this._minTemp)
  }
  this.temperature -= 1;
  this.screenColor = this.determineColor();
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
    return this._maxTemp = maxTempHash.savingOn;
    // return  temperatureHash["savings"];
  } else {
    return this._maxTemp = maxTempHash.savingOff;
    // return temperatureHash["noSavings"];
   }
}

Thermostat.prototype.determineColor = function(){
  if(this.temperature < tempRange.low) {
    return "green"; 
  } 
  else if(this.temperature < tempRange.medium) {
    return "yellow";
  } 
  else {
    return "red";
  }
}
