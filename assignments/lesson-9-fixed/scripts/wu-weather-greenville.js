var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','//api.wunderground.com/api/4229641ac2784814/conditions/q/TX/Greenville.json',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('conditions').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('weather_icon').innerHTML = weatherInfo.current_observation.icon_url;
    
    document.getElementById('windspeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('textForecast').innerHTML = weatherInfo.current_observation.txt_forecast;
    
    
} //end of onload