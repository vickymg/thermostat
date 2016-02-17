$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
    if(thermostat.currentEnergyUsage === 'yellow') {
      $('#temperature').css("background-color", "yellow");
    } else if(thermostat.currentEnergyUsage === 'red') {
      $('#temperature').css("background-color", "red")
    } else {
      $('#temperature').css("background-color", "green")
    }
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
