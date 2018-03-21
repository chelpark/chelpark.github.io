function renderDate() {
    
    //Date
    var myDate = new Date();
    var year = myDate.getYear();
        if(year < 1000){
            year +=1900
        }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var dayM = myDate.getDate();
    var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
    //Date End
    

        var dateDisplay = document.getElementById("dateDisplay");
        dateDisplay.innerHTML = "" + dayArray[day] + ", " + dayM + " " + monthArray[month] + " " + year;
}
renderDate();