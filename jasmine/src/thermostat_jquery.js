$( document ).ready(function() {

    	function displayTemp() {
    		$('#temperature').text(thermostat.temperature);
    		$('#notification').css("background-color", thermostat.determineColor());
    	}

    	var thermostat = new Thermostat();
    	displayTemp();
    	

      $( "#up-arrow" ).click(function( event ) {
        thermostat.increaseTemp();
        displayTemp();
      });

      $( "#down-arrow" ).click(function( event ) {
        thermostat.decreaseTemp();
        displayTemp();
      });

      $( "#reset-temp" ).click(function( event ) {
        thermostat.resetTemp();
        displayTemp();
      });

      $( "#power-saving" ).click(function( event ) {
        thermostat.savingModeOff();
        displayTemp();
      });


      function turnPSOn() {
      	thermostat.savingModeOn();
      	$('#power-saving').text('Power Saving is On');
      	displayTemp();
      	$(this).one("click", turnPSOff);
      };

      function turnPSOff() {
      	thermostat.savingModeOff();
      	$('#power-saving').text('Power Saving is Off');
      	displayTemp();
      	$(this).one("click", turnPSOn);
      };

      $('#power-saving').one("click", turnPSOff);

    });