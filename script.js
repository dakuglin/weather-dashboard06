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

            //var icon = response.weather[0].icon;
            //console.log(icon);

            var img = $("#cityName").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            console.log(img)

            //display main portion of city weather content
            var cityName = $("#cityName").text(response.name + " " + "(" + date + ")" + img).append(cityName) //city name
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
                // for (var i=0; i < 5; i++) {
                //     var tempK = resp.list[i].main.temp_max;
                //     var tempF = (tempK - 273.15) * 1.80 + 32;
                //     console.log(tempF)
                //     //var forecastTempF = tempF.split()
                //     var humidity = resp.list[i].main.humidity;
                //     console.log(humidity)  
                // };
             
                tempF = ["1","2","3","4","5"];

                var day1Temp = $("#forecastTemp1").text("Temp: " + tempF[0] + " F").append(day1Temp);
                var day2Temp = $("#forecastTemp2").text("Temp: " + tempF[1] + " F").append(day2Temp);
                var day3Temp = $("#forecastTemp3").text("Temp: " + tempF[2] + " F").append(day3Temp);
                var day4Temp = $("#forecastTemp4").text("Temp: " + tempF[3] + " F").append(day4Temp);
                var day5Temp = $("#forecastTemp5").text("Temp: " + tempF[4] + " F").append(day5Temp);

                humidityForecast = ["1","2","3","4","5"];

                var day1Humidity = $("#forecastHum1").text("Humidity: " + humidityForecast[0] +" %").append(day1Humidity); 
                var day2Humidity = $("#forecastHum2").text("Humidity: " + humidityForecast[1] +" %").append(day2Humidity); 
                var day3Humidity = $("#forecastHum3").text("Humidity: " + humidityForecast[2] +" %").append(day3Humidity); 
                var day4Humidity = $("#forecastHum4").text("Humidity: " + humidityForecast[3] +" %").append(day4Humidity); 
                var day5Humidity = $("#forecastHum5").text("Humidity: " + humidityForecast[4] +" %").append(day5Humidity); 

                $(".col-md-9").removeClass("display")

                var date1 = $("#date1").text("(10/6/2020)").append(date1);
                var date2 = $("#date2").text("(10/7/2020)").append(date2);
                var date3 = $("#date3").text("(10/8/2020)").append(date3);
                var date4 = $("#date4").text("(10/9/2020)").append(date4);
                var date5 = $("#date5").text("(10/10/2020)").append(date5);

                

            }); 

            
            //________________________________________________________________________________________________
            //local storage of user city input

             localStorage.setItem("City",city);
             $("#search1").val(localStorage.getItem('City'));
 
 
        });

    });



});    