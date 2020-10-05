$(document).ready(function() {   //goes in every jQuery script

    //API call for current weather data for given city user inputs 
    //---------------------------------------------------------------------------------------------
    $("#find-city").on("click", function(event) {

        // ___________________________________________________________________________________________________
        //global variables

        event.preventDefault();

        var city = $("#city-input").val(); //grabbing the user city input

        var APIKey = "b9f7c13b06d755b57198e1781901ad93" //my API key

        var date = moment().format('l');  //current date

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
            var cityName = $("#cityName").text(response.name + " " + "(" + date + ")" ).append(cityName) //city name
            //cityName.addClass("search")

            // Convert the temp to fahrenheit
            var tempK = response.main.temp;
            var tempF = (tempK - 273.15) * 1.80 + 32;

            var cityTemp = $("#cityTemp").text("Temperature: " + tempF.toFixed(2) + " F").append(cityTemp) //current temperature

            var cityHumidity = $("#cityHumidity").text("Humidity: " + response.main.humidity +" %").append(cityHumidity) //current humidity

            var cityWindSpeed = $("#cityWindSpeed").text("Wind Speed: " + response.wind.speed).append(cityWindSpeed) //current wind speed


            //______________________________________________________________________________________________
            //uv index query

            var queryUVIndex = "http://api.openweathermap.org/data/2.5/uvi?lat="+ latitude + "&lon=" + longitude + "&appid=" + APIKey; //link to uv index for specfic city seleccted by user

            $.ajax({
                url: queryUVIndex,
                method: "GET"
            })
            // We store all of the retrieved data inside of an object called "response"
            .then(function(respUV) {
        
                console.log(respUV); //log the response 

                var cityUV = $("#cityUVIndex").text("UV Index: " + respUV.value).append(cityUV) //current wind speed

            }); 


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

                $("#forecast").text("5-Day-Forecast:");

                // Convert the temp to fahrenheit
                // var tempIndex = 0;
                // var arr = ["1","2","3","4","5"]
                for (var i=0; i < 5; i++) {
                    var tempK = resp.list[i].main.temp;
                    console.log(tempK)
                    var tempF = (tempK - 273.15) * 1.80 + 32;
                    console.log(tempF)
                };

                var day1Temp = $("#forecastTemp1").text(tempF.toFixed(2) + " F").append(day1Temp)
                



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