$(document).ready(function() {   //goes in every jQuery script

    //API call for current weather data for given city user inputs 
    //---------------------------------------------------------------------------------------------
    $("#find-city").on("click", function(event) {

        // ________________________________________________________________________________________
        //global variables

        event.preventDefault();

        var city = $("#city-input").val(); //grabbing the user city input
        console.log(city)

        var APIKey = "b9f7c13b06d755b57198e1781901ad93" //my API key

        var date = moment().format('l');  //current date
        
        var history = JSON.parse(localStorage.getItem("history")) || [];

        //____________________________________________________________________________________________
      
        function makeRow(text) {
            var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
            $(".history").append(li);
        }
        for (var i=0; i<history.length; i++) {
            makeRow(history[i]);
        }

    //     $(".history").on("click", "li", function () {
    //         var city = $(this).text();
    //         var queryCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&appid=" + APIKey; //link to get current forecast for specfic city seleccted by user

    //     $.ajax({
    //         url: queryCurrentWeather,
    //         method: "GET"
    //     })
    //     .then(function(response) { //store data inside object "response"


    //         if (history.indexOf(city) === -1) {
    //             history.push(city);
    //             localStorage.setItem("history",JSON.stringify(history));
    //             makeRow(city);
    //         };
    
    //         console.log(response); //log the response 

    //         var latitude = response.coord.lat; //needed for uv index
    //         var longitude = response.coord.lon; //needed for uv index

    //         var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            

    //         //display main portion of city weather content
    //         var cityName = $("#cityName").text(response.name + " " + "(" + date + ")").append(cityName) //city name

    //         cityName.append(img)

    //         var styling = $(".results");
    //         styling.addClass("currentWeather")

    //         // Convert the temp to fahrenheit
    //         var tempK = response.main.temp;
    //         var tempF = (tempK - 273.15) * 1.80 + 32;

    //         var cityTemp = $("#cityTemp").text("Temperature: " + tempF.toFixed(2) + " F").append(cityTemp) //current temperature

    //         var cityHumidity = $("#cityHumidity").text("Humidity: " + response.main.humidity +" %").append(cityHumidity) //current humidity

    //         var cityWindSpeed = $("#cityWindSpeed").text("Wind Speed: " + response.wind.speed).append(cityWindSpeed) //current wind speed


    //         //______________________________________________________________________________________
    //         //uv index query

    //         var queryUVIndex = "http://api.openweathermap.org/data/2.5/uvi?lat="+ latitude + "&lon=" + longitude + "&appid=" + APIKey; //link to uv index for specfic city seleccted by user

    //         $.ajax({
    //             url: queryUVIndex,
    //             method: "GET"
    //         })
    //         // We store all of the retrieved data inside of an object called "response"
    //         .then(function(respUV) {
        
    //             console.log(respUV); //log the response 

    //             var cityUV = $("#cityUVIndex").text("UV Index: " + respUV.value).append(cityUV) //current wind speed

    //         }); 


    //         //______________________________________________________________________________________
    //         // 5-day forecast query

    //         var queryForecastWeather = "http://api.openweathermap.org/data/2.5/forecast?" +"q=" + city + "&appid=" + APIKey; //link to get weather forecast for specfic city seleccted by user

    //         $.ajax({
    //             url: queryForecastWeather,
    //             method: "GET"
    //         })
    //         // We store all of the retrieved data inside of an object called "response"
    //         .then(function(resp) {
        
    //             console.log(resp); //log the response 

    //             $("#forecast").text("5-Day-Forecast:");

    //             var date1 = $("#date1").text(resp.list[7].dt_txt.slice(0,11)).append(date1);
    //             var date2 = $("#date2").text(resp.list[15].dt_txt.slice(0,11)).append(date2);
    //             var date3 = $("#date3").text(resp.list[23].dt_txt.slice(0,11)).append(date3);
    //             var date4 = $("#date4").text(resp.list[31].dt_txt.slice(0,11)).append(date4);
    //             var date5 = $("#date5").text(resp.list[39].dt_txt.slice(0,11)).append(date5);

    //             $("#img1").empty()
    //             var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[7].weather[0].icon + ".png");
    //             $("#img1").append(img)

    //             var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[15].weather[0].icon + ".png");
    //             $("#img2").append(img)

    //             var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[23].weather[0].icon + ".png");
    //             $("#img3").append(img)

    //             var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[31].weather[0].icon + ".png");
    //             $("#img4").append(img)

    //             var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[39].weather[0].icon + ".png");
    //             $("#img5").append(img)
        

    //             var tempK = resp.list[7].main.temp;
    //             var tempF = (tempK - 273.15) * 1.80 + 32;
    //             var day1Temp = $("#forecastTemp1").text("Temp: " + tempF.toFixed(2) + " F").append(day1Temp);

    //             var tempK = resp.list[15].main.temp;
    //             var tempF = (tempK - 273.15) * 1.80 + 32;
    //             var day2Temp = $("#forecastTemp2").text("Temp: " + tempF.toFixed(2) + " F").append(day2Temp);

    //             var tempK = resp.list[23].main.temp;
    //             var tempF = (tempK - 273.15) * 1.80 + 32;
    //             var day3Temp = $("#forecastTemp3").text("Temp: " + tempF.toFixed(2) + " F").append(day3Temp);

    //             var tempK = resp.list[31].main.temp;
    //             var tempF = (tempK - 273.15) * 1.80 + 32;
    //             var day4Temp = $("#forecastTemp4").text("Temp: " + tempF.toFixed(2) + " F").append(day4Temp);

    //             var tempK = resp.list[39].main.temp;
    //             var tempF = (tempK - 273.15) * 1.80 + 32;
    //             var day5Temp = $("#forecastTemp5").text("Temp: " + tempF.toFixed(2) + " F").append(day5Temp);


    //             var day1Humidity = $("#forecastHum1").text("Humidity: " + resp.list[7].main.humidity +"%").append(day1Humidity); 
    //             var day2Humidity = $("#forecastHum2").text("Humidity: " + resp.list[15].main.humidity +"%").append(day2Humidity); 
    //             var day3Humidity = $("#forecastHum3").text("Humidity: " + resp.list[23].main.humidity +"%").append(day3Humidity); 
    //             var day4Humidity = $("#forecastHum4").text("Humidity: " + resp.list[31].main.humidity +"%").append(day4Humidity); 
    //             var day5Humidity = $("#forecastHum5").text("Humidity: " + resp.list[39].main.humidity +"%").append(day5Humidity); 

    //         }); 
 
    //     });

    // });
            
    //     })
      

        //__________________________________________________________________________________________
        // current weather query
    
        var queryCurrentWeather = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&appid=" + APIKey; //link to get current forecast for specfic city seleccted by user

        $.ajax({
            url: queryCurrentWeather,
            method: "GET"
        })
        .then(function(response) { //store data inside object "response"


            if (history.indexOf(city) === -1) {
                history.push(city);
                localStorage.setItem("history",JSON.stringify(history));
                makeRow(city);
            };
    
            console.log(response); //log the response 

            var latitude = response.coord.lat; //needed for uv index
            var longitude = response.coord.lon; //needed for uv index

            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            

            //display main portion of city weather content
            var cityName = $("#cityName").text(response.name + " " + "(" + date + ")").append(cityName) //city name

            cityName.append(img)

            var styling = $(".results");
            styling.addClass("currentWeather")

            // Convert the temp to fahrenheit
            var tempK = response.main.temp;
            var tempF = (tempK - 273.15) * 1.80 + 32;

            var cityTemp = $("#cityTemp").text("Temperature: " + tempF.toFixed(2) + " F").append(cityTemp) //current temperature

            var cityHumidity = $("#cityHumidity").text("Humidity: " + response.main.humidity +" %").append(cityHumidity) //current humidity

            var cityWindSpeed = $("#cityWindSpeed").text("Wind Speed: " + response.wind.speed).append(cityWindSpeed) //current wind speed


            //______________________________________________________________________________________
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


            //______________________________________________________________________________________
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

                var date1 = $("#date1").text(resp.list[7].dt_txt.slice(0,11)).append(date1);
                var date2 = $("#date2").text(resp.list[15].dt_txt.slice(0,11)).append(date2);
                var date3 = $("#date3").text(resp.list[23].dt_txt.slice(0,11)).append(date3);
                var date4 = $("#date4").text(resp.list[31].dt_txt.slice(0,11)).append(date4);
                var date5 = $("#date5").text(resp.list[39].dt_txt.slice(0,11)).append(date5);

                $("#img1").empty()
                var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[7].weather[0].icon + ".png");
                $("#img1").append(img)

                var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[15].weather[0].icon + ".png");
                $("#img2").append(img)

                var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[23].weather[0].icon + ".png");
                $("#img3").append(img)

                var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[31].weather[0].icon + ".png");
                $("#img4").append(img)

                var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + resp.list[39].weather[0].icon + ".png");
                $("#img5").append(img)
        

                var tempK = resp.list[7].main.temp;
                var tempF = (tempK - 273.15) * 1.80 + 32;
                var day1Temp = $("#forecastTemp1").text("Temp: " + tempF.toFixed(2) + " F").append(day1Temp);

                var tempK = resp.list[15].main.temp;
                var tempF = (tempK - 273.15) * 1.80 + 32;
                var day2Temp = $("#forecastTemp2").text("Temp: " + tempF.toFixed(2) + " F").append(day2Temp);

                var tempK = resp.list[23].main.temp;
                var tempF = (tempK - 273.15) * 1.80 + 32;
                var day3Temp = $("#forecastTemp3").text("Temp: " + tempF.toFixed(2) + " F").append(day3Temp);

                var tempK = resp.list[31].main.temp;
                var tempF = (tempK - 273.15) * 1.80 + 32;
                var day4Temp = $("#forecastTemp4").text("Temp: " + tempF.toFixed(2) + " F").append(day4Temp);

                var tempK = resp.list[39].main.temp;
                var tempF = (tempK - 273.15) * 1.80 + 32;
                var day5Temp = $("#forecastTemp5").text("Temp: " + tempF.toFixed(2) + " F").append(day5Temp);


                var day1Humidity = $("#forecastHum1").text("Humidity: " + resp.list[7].main.humidity +"%").append(day1Humidity); 
                var day2Humidity = $("#forecastHum2").text("Humidity: " + resp.list[15].main.humidity +"%").append(day2Humidity); 
                var day3Humidity = $("#forecastHum3").text("Humidity: " + resp.list[23].main.humidity +"%").append(day3Humidity); 
                var day4Humidity = $("#forecastHum4").text("Humidity: " + resp.list[31].main.humidity +"%").append(day4Humidity); 
                var day5Humidity = $("#forecastHum5").text("Humidity: " + resp.list[39].main.humidity +"%").append(day5Humidity); 

            }); 
 
        });

    });

});    