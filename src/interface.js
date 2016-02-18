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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    $('#cityname').text("London");
  })

  $('#city-search').submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    $('#cityname').text(city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  });

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
