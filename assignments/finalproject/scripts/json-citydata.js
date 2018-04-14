var fMotto = document.getElementById("fMotto");
var fFounded = document.getElementById("fFounded");
var fPop = document.getElementById("fPop");
var fRainfall = document.getElementById("fRainfall");

var gMotto = document.getElementById("gMotto");
var gFounded = document.getElementById("gFounded");
var gPop = document.getElementById("gPop");
var gRainfall = document.getElementById("gRainfall");

var sMotto = document.getElementById("sMotto");
var sFounded = document.getElementById("sFounded");
var sPop = document.getElementById("sPop");
var sRainfall = document.getElementById("sRainfall");

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();    
request.onload = function() {
	var cityinfo = request.response;
	var towns = cityinfo['towns'];
	fMotto.innerHTML = towns[0].motto;
	fFounded.innerHTML = towns[0].yearFounded;
	fPop.innerHTML = towns[0].currentPopulation;
	fRainfall.innerHTML = towns[0].averageRainfall;
	
	gMotto.innerHTML = towns[1].motto;
	gFounded.innerHTML = towns[1].yearFounded;
	gPop.innerHTML = towns[1].currentPopulation;
	gRainfall.innerHTML = towns[1].averageRainfall;
	
	sMotto.innerHTML = towns[3].motto;
	sFounded.innerHTML = towns[3].yearFounded;
	sPop.innerHTML = towns[3].currentPopulation;
	sRainfall.innerHTML = towns[3].averageRainfall;
}