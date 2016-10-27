  update();

  $( "#up_button" ).click(function(){
    thermostat.increaseTemperature();
    update();
  });

  $( "#down_button" ).click(function(){
    thermostat.decreaseTemperature();
    update();
  });

  $( "#reset_button" ).click(function(){
    thermostat.resetTemperature();
    update();
  });

  $( "#psm_toggle_button" ).click(function(){
    thermostat.togglePowerSaving();
    var status = ( thermostat.powerSaving() ? "on" : "off" );
    $( "#powerSaving" ).html( "PowerSaving is " + status );
    var notStatus = status === "on" ? "off" : "on";
    $( "#psm_toggle_button" ).html( "Turn PowerSaving " + notStatus );
    update();
  });
});

