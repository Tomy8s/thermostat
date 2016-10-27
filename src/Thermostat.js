
'use strict';

function Thermostat(){
  this._DEFAULT_TEMP = 20;
  this._MIN_TEMP = 10;
  this._POWER_SAVING_MAX = 25;
  this._MAX = 32;
  this._power_saving_mode = true;
  this._temperature = this._DEFAULT_TEMP;
};

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  if((this.powerSaving() && this.temperature() < this._POWER_SAVING_MAX) || (!this.powerSaving() && this.temperature() < this._MAX )) {
    this._temperature++
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if(this.temperature() > this._MIN_TEMP) {
    this._temperature--;
  }
};

Thermostat.prototype.powerSaving = function () {
  return this._power_saving_mode;
};

Thermostat.prototype.switchOffPowerSaving = function () {
  this._power_saving_mode = false;
};

Thermostat.prototype.switchOnPowerSaving = function () {
  this._power_saving_mode = true;
  if(this.temperature() > this._POWER_SAVING_MAX) {
    this._temperature = this._POWER_SAVING_MAX;
  };
};

Thermostat.prototype.togglePowerSaving = function () {
  if (this.powerSaving()) {
    this.switchOffPowerSaving();
  } else {
    this.switchOnPowerSaving();
  }
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = this._DEFAULT_TEMP
};

Thermostat.prototype.screenColour = function () {
  if(this.temperature() < 18) {
    return "lightgreen";
  } else if(this.temperature() < 25) {
    return "gold";
  } else {
    return "salmon"
  };
};