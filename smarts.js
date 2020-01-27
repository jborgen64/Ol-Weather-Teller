//create function that will display current weather when searched
    //search bar should get city
    //then add that info to the api key so that it can search for city
    //then it will display current info that will be appended to a div
    //local storage to create a search history

//variable with APIkey

var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityGet + "&APPID=c6974ef21f89091e901a5ee288cf4f5c"
var cityGet;
var cityStore = [];
//on click grab city name from text box

$(".search").on("click", function (event) {
    event.preventDefault();

    //clear div if anything is in it from previous search
    $("#currentDisplay").hide(200);
    $("#currentDisplay").empty();


  //if re-searched clear previous search display
    $(".casts").hide(200);
    $(".casts").empty();


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
        cityStore.push(city);
        var cityObj = {
          place1: cityStore[0],
          place2: cityStore[1],
          place3: cityStore[2],
          place4: cityStore[3]
        }
        localStorage.setItem("place", JSON.stringify(cityObj));
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

        //date
        var date1 = response.list[2].dt_txt;
        console.log(date1)
        var dateTempDisp1 = $("<p>").text(date1);
        $("#firstForecast").prepend(dateTempDisp1);

        //temp
          var forTemp1 = response.list[2].main.temp;
          console.log(forTemp1);
          var forTempDisp1 = $("<p>").text("Temp: " + forTemp1);
          $("#firstForecast").append(forTempDisp1);

        //humidity
        var hum1 = response.list[2].main.humidity;
        console.log(hum1);
        var forhumDisp1 = $("<p>").text("Humidity: " + hum1);
        $("#firstForecast").append(forhumDisp1);

        $("#firstForecast").show(1000);
         //second display for 5 day forecast

        //date
        var date2 = response.list[10].dt_txt;
        console.log(date2)
        var dateTempDisp2 = $("<p>").text(date2);
        $("#secondForecast").prepend(dateTempDisp2);

        //temp
          var forTemp2 = response.list[10].main.temp;
          console.log(forTemp2);
          var forTempDisp2 = $("<p>").text("Temp: " + forTemp2);
          $("#secondForecast").append(forTempDisp2);

        //humidity
        var hum2 = response.list[10].main.humidity;
        console.log(hum2);
        var forhumDisp2 = $("<p>").text("Humidity: " + hum2);
        $("#secondForecast").append(forhumDisp2);
        
        
        $("#secondForecast").show(1000);
         //third display for 5 day forecast

        //date
        var date3 = response.list[20].dt_txt;
        console.log(date3)
        var dateTempDisp3 = $("<p>").text(date3);
        $("#thirdForecast").prepend(dateTempDisp3);

        //temp
          var forTemp3 = response.list[20].main.temp;
          console.log(forTemp3);
          var forTempDisp3 = $("<p>").text("Temp: " + forTemp3);
          $("#thirdForecast").append(forTempDisp3);

        //humidity
        var hum3 = response.list[20].main.humidity;
        console.log(hum3);
        var forhumDisp3 = $("<p>").text("Humidity: " + hum3);
        $("#thirdForecast").append(forhumDisp3);
        
        
        $("#thirdForecast").show(1000);
         //fourth display for 5 day forecast

        //date
        var date4 = response.list[30].dt_txt;
        console.log(date4)
        var dateTempDisp4 = $("<p>").text(date4);
        $("#fourthForecast").prepend(dateTempDisp4);

        //temp
          var forTemp4 = response.list[30].main.temp;
          console.log(forTemp4);
          var forTempDisp4 = $("<p>").text("Temp: " + forTemp4);
          $("#fourthForecast").append(forTempDisp4);

        //humidity
        var hum4 = response.list[30].main.humidity;
        console.log(hum4);
        var forhumDisp4 = $("<p>").text("Humidity: " + hum4);
        $("#fourthForecast").append(forhumDisp4);
        
        
        $("#fourthForecast").show(1000);
         //first display for 5 day forecast

        //date
        var date5 = response.list[39].dt_txt;
        console.log(date5)
        var dateTempDisp5 = $("<p>").text(date5);
        $("#fifthForecast").prepend(dateTempDisp5);

        //temp
          var forTemp5 = response.list[39].main.temp;
          console.log(forTemp5);
          var forTempDisp5 = $("<p>").text("Temp: " + forTemp5);
          $("#fifthForecast").append(forTempDisp5);

        //humidity
        var hum5 = response.list[39].main.humidity;
        console.log(hum5);
        var forhumDisp5 = $("<p>").text("Humidity: " + hum5);
        $("#fifthForecast").append(forhumDisp5);

        $("#fifthForecast").show(1000);
        
        });

});

       //get item from local storage up to four stored items
       var gotten = JSON.parse(localStorage.getItem("place"));
       console.log(gotten);
       var historyBtn1 = $("<button>").text(gotten.place1);
       var historyBtn2 = $("<button>").text(gotten.place2);
       var historyBtn3 = $("<button>").text(gotten.place3);
       var historyBtn4 = $("<button>").text(gotten.place4);
          $("#searchHistory").prepend(historyBtn1);
          $("#searchHistory").prepend(historyBtn2);
          $("#searchHistory").prepend(historyBtn3);
          $("#searchHistory").prepend(historyBtn4);
    
        
       
 

     
  