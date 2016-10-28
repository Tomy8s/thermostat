$(document).ready(function(){

  var showWeather = function() {
    if($("#city").val() === ""){
      $("#show_weather").hide();
    } else {
      $("#show_weather").show();
    }
  }

  showWeather();

  $("#city").keyup(function (){
    var city = $("#city").val();
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(weather){
      $("#city_span").text(weather.name + ", " + weather.sys.country);
      $("#current_weather").text(weather.weather[0].description);
      $("#temperature_outside").text(Math.round(weather.main.temp));
    });
    showWeather();
  });
});
