//Gets numbers from user input
function findWindchill() {
    var tempF = parseFloat(document.getElementById("temperature").value);
    var speed = parseFloat(document.getElementById("windSpeed").value);
    var windChillTemp = windChill(tempF, speed);
    
    
    //Display the answer
    document.getElementById("outputDiv").innerHTML = windChillTemp;
}

//Equates windchill and returns result  
function windChill (f, s) {
    var windChillEquation = 35.74 + 0.6215 * f - 35.75 * Math.pow(s, 0.16) + 0.4275 * f * Math.pow(s, 0.16);
    return windChillEquation;
    
}