//create function that will display current weather when searched
    //search bar should get city
    //then add that info to the api key so that it can search for city
    //then it will display current info that will be appended to a div
    //local storage to create a search history

//variable with APIkey

var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityGet + "&APPID=c6974ef21f89091e901a5ee288cf4f5c"
var cityGet;

//on click grab city name from text box

$("#search").on("click", function (event) {
    event.preventDefault();

    //clear div if anything is in it from previous search
    $("#currentDisplay").hide(200);
    $("#currentDisplay").empty();
    

    var cityGet = $("#city").val().trim();
    console.log(cityGet);

    var queryURLcurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + cityGet + "&units=imperial&APPID=d62b29c9b9eeaab0139cc3a11a3896b9"
    
    //AJAX call from Open Weather API

    $.ajax({
        url: queryURLcurrent,
        method: "GET"
      }).then(function(response) {

          console.log(response);

       //variable displaying city name
       var city = response.name
       var country = response.sys.country
       var cityDisplay = $("<h2>").text(city + " , " + country);

       //variable for storing and displaying temp
        var temp = response.main.temp;
        var tempDisplay = $("<p>").text("temp: " + temp + " F");

       //variable storing humidity and displaying it
       var humidity = response.main.humidity;
       var humidityDisplay = $("<p>").text("humidity: " + humidity + "%");

       //variable storing wind speed and displaying it
       var windSpeed = response.wind.speed;
       var windSpeedDisplay = $("<p>").text("wind speed: " + windSpeed + " MPH");

        //append to data display to div
        $("#currentDisplay").append(cityDisplay);
        $("#currentDisplay").append(tempDisplay);
        $("#currentDisplay").append(humidityDisplay);
        $("#currentDisplay").append(windSpeedDisplay);
        
        //display currentDisplay div
        $("#currentDisplay").show(1000);

        //append search history
      var historyBtn = $("<button>").text(city);
      $("#searchHistory").prepend(historyBtn);

        //locally store search results
        localStorage.setItem("place", city);
        console.log(localStorage);
      });

      //calling 5 day forecast from API
      var queryURL5day = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityGet + "&units=imperial&APPID=d62b29c9b9eeaab0139cc3a11a3896b9"

      $.ajax({
        url: queryURL5day,
        method: "GET"
      }).then(function(response) {

          console.log(response);


        //placing data in a div for display

        //first display for 5 day forecast

        //temp
          var forTemp1 = response.list[0].main.temp;
          console.log(forTemp1);
          var forTempDisp1 = $("<p>").text(forTemp1);
          $("#firstForecast").append("Temp: " + forTempDisp1);

        //humidity
        var hum1 = response.list[0].main[0].humidity;
        console.log(hum1);
        var forhumDisp1 = $("<p>").text(hum1);
        $("#firstForecast").append("humidity: " + forhumDisp1);
        
        });

});

    //get item from local storage
   var gotten = localStorage.getItem("place");
   var historyBtn = $("<button>").text(gotten);
      $("#searchHistory").prepend(historyBtn);



//Also have a function that diplays weather for 5 day forecast
    //on click automatically do that?

