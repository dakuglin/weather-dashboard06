$(document).ready(function() {   //goes in every jQuery script

    //API call for current weather data for given city user inputs 
    //---------------------------------------------------------------------------------------------
    $("#find-city").on("click", function(event) {

        // ___________________________________________________________________________________________________
        //global variables

        event.preventDefault();

        var city = $("#city-input").val(); //grabbing the user city input

        var APIKey = "b9f7c13b06d755b57198e1781901ad93" //my API key

        //________________________________________________________________________________________________
        // current weather query

        var queryCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&appid=" + APIKey; //link to get current forecast for specfic city seleccted by user
        
        $.ajax({
            url: queryCurrentWeather,
            method: "GET"
        })
        .then(function(response) { //store data inside object "response"
    
            console.log(response); //log the response 

            var latitude = response.coord.lat; //needed for uv index
            var longitude = response.coord.lon; //needed for uv index
        

            //display main portion of city weather content
            var cityName = $("#cityName").text(response.name).append(cityName) //city name
            cityName.addClass("search")

            // Convert the temp to fahrenheit
            var tempK = response.main.temp;
            var tempF = (tempK - 273.15) * 1.80 + 32;

            var cityTemp = $("#cityTemp").text("Temperature: " + tempF.toFixed(2) + " F").append(cityTemp) //current temperature

            var cityHumidity = $("#cityHumidity").text("Humidity: " + response.main.humidity +" %").append(cityHumidity) //current humidity

            var cityWindSpeed = $("#cityWindSpeed").text("Wind Speed: " + response.wind.speed).append(cityWindSpeed) //current wind speed

            //________________________________________________________________________________________________
           // 5-day forecast query

            var queryForecastWeather = "http://api.openweathermap.org/data/2.5/forecast?" +"q=" + city + "&appid=" + APIKey; //link to get weather forecast for specfic city seleccted by user

            $.ajax({
                url: queryForecastWeather,
                method: "GET"
            })
            // We store all of the retrieved data inside of an object called "response"
            .then(function(resp) {
        
                console.log(resp); //log the response 

            }); 
            
            //________________________________________________________________________________________________
            //local storage of user city input

             localStorage.setItem("City",city);
             $("#search1").val(localStorage.getItem('City'));
 
 

    
        });

    });







    $("#find-city").on("click", function() {  //listener 

       
       
    });





});    