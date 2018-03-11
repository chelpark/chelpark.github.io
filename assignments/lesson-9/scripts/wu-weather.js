var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','//api.wunderground.com/api/4229641ac2784814/conditions/q/MN/Franklin.json',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('conditions').innerHtml = weatherInfo.current_observation.weather;
    
    document.getElementById('currentTemp').innerHtml = weatherInfo.current_observation.temp_f;
    
    document.getElementById('weather_icon').innerHtml = weatherInfo.current_observation.icon_url;
    
    document.getElementById('windspeed').innerHtml = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('textForecast').innerHtml = weatherInfo.current_observation.txt_forecast: forecastday.fctext;
    
    
} //end of onload