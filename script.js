$(document).ready(function() {   //goes in every jQuery script

    //creating h1 tag dynamically 
    //  var h1Tag = $("<h1>").text("Weather Dashboard")
    //  $("#header").append(h1Tag);

     //h1Tag.addClass("h1")


    $("#find-city").on("click", function(event) {
        
        event.preventDefault();

        var city = $("#city-input").val(); //grabbing the user city input

        var APIKey = "b9f7c13b06d755b57198e1781901ad93" //my API key

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&appid=" + APIKey; //queryURL for the server to grab the API information
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
    
            console.log(response);     //log the response 
            

            //display main portion of city weather content
            var cityName = $("#cityName").text(response.name).append(cityName) //city name

            // Convert the temp to fahrenheit
            var tempK = response.main.temp;
            var tempF = (tempK - 273.15) * 1.80 + 32;

            var cityTemp = $("#cityTemp").text("Temperature: " + tempF.toFixed(2) + " F").append(cityTemp) //current temperature

            var cityHumidity = $("#cityHumidity").text("Humidity: " + response.main.humidity +" %").append(cityHumidity) //current humidity

            var cityWindSpeed = $("#cityWindSpeed").text("Wind Speed: " + response.wind.speed).append(cityWindSpeed) //current wind speed

        });

    });


      
    

});    