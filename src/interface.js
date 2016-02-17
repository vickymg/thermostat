$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  }

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#switch-power-saving').on('click', function() {
    if(thermostat.powerSaving === true) {
      thermostat.switchPowerSaving();
      $('#power-saving-status').text('off');
    }
    else {
      thermostat.switchPowerSaving();
      $('#power-saving-status').text('on');
    }
  })

})
