//Gets numbers from user input
function findWindchill() {
    var highTemp = 73;
    var lowTemp= 68;
    var windSpeed= 15;
    var tempF = (highTemp + lowTemp) / 2;

    var windChillEquation = Math.floor(35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempF * Math.pow(windSpeed, 0.16));
    
    //Display the answer
   var displayWindchill =  document.getElementById("displayWindchill");
    displayWindchill.innerHTML = "Windchill:" + windChillEquation + "mph";
}
findWindchill();
