function fetchdata() {
        var city1 = city.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=5b4bee0ba241d092159faf007e166080`).then(i => i.json()).then(data => accessData(data))

        function accessData(data) {
            

            const date = new Date();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



            var da = date.getDate()
            let mn = months[date.getMonth()];
            var yr = date.getFullYear()


            var day = days[date.getDay()];
            var temp = Math.floor(data.main.temp - 273.15)



            details.innerHTML = `

                <div class="w-4/4">
                    <h1 class=" text-2xl sm:text-l"><i class="fa-solid fa-location-dot me-2"></i>${data.name}</h1>
                    
                    <div id="imgg"><img src="./Media/clearSky.png" alt="" class="w-2/4  my-4" ></div>
                    <h1 class="font-black text-3xl md:text-4xl mt-3">${temp}°C</h1>
                    <h2 class="text-md md:text-lg mt-2">${da} ${mn} ${yr} |  ${day}</h2>
                    <div class="mt-2 flex flex-col sm:flex-row justify-around">
    <div class="flex items-center mb-2 sm:mb-0"><i class="fa-solid fa-wind me-2"></i><span>Wind: ${data.wind.speed} km/h</span></div>
    <div class="flex items-center mb-2 sm:mb-0"><span class="mdi mdi-water-percent me-2"></span><span>Humidity: ${data.main.humidity}%</span></div>
    <div class="flex items-center"><i class="fas fa-temperature-up me-2"></i><span>Pressure: ${data.main.pressure} hPa</span></div>
</div>

                    <h2 class="text-md font-black md:text-lg mt-2">${data.weather[0].main}</h2>
                    <!-- <h2 class="text-md md:text-lg">Weather</h2> -->
                </div>
                <div class=" flex flex-col justify-start p-3 w-full md:w-1/2 ">
                    <div class="flex flex-wrap gap-2 flex-row items-center mb-2">
                        <input id="city" type="text" class="flex-grow p-2 mr-2 text-gray-900 outline-none rounded-2xl ps-3" placeholder="Enter city name">
                        <input onclick="fetchdata()" type="button" value="Search" id="i1" class="flex-none border p-2 cursor-pointer">
                    </div>
                    <div class="flex flex-wrap flex-rows justify-evenly  gap-1 xl:mt-3" id="details2">
                        
                    </div>
                </div>

                
        `

            details2.innerHTML = `


                         <div class=" attribute-box flex flex-col justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:p-2 xl:w-3/12 p-4">
                            <p class="text-center">Feels Like</p>
                            <p class="text-center">${temp}°C</p>
                        </div>
                        <div class="attribute-box flex flex-col justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:p-2 xl:w-3/12 p-4">
                            <p class="text-center">Pressure</p>
                            <p class="text-center">${data.main.pressure}</p>
                        </div>
                        <div class="attribute-box flex flex-col justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:p-2 xl:w-w-3/12 p-4">
                            <p class="text-center">Humidity</p>
                            <p class="text-center">${data.main.humidity}</p>
                        </div>
                        <div class=" attribute-box flex flex-col justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:p-2 xl:w-w-3/12 p-4">
                            <p class="text-center">Wind Speed</p>
                            <p class="text-center">${data.wind.speed} Km/h</p>
                        </div>
                        <div class="attribute-box flex flex-col justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:p-2 xl:w-3/12 p-4">
                            <p class="text-center">Sunrise</p>
                            <p id="srise" class="text-center">${data.sys.sunrise}</p>
                        </div>
                        <div class="attribute-box flex flex-col justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:p-2 xl:w-3/12 p-4">
                            <p class="text-center">Sunset</p>
                            <p id="sset" class="text-center">${data.sys.sunset}</p>
                        </div>


                    
        `


            if (data.description = 'clear sky') {
                console.log(data.main);
                imgg.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `
            }
            else if (data.description = 'few clouds') {
                console.log("Hot");
                imgg.innerHTML = `
                <img src="./Media/hat.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `
            }
            else if (data.description = 'scattered clouds') {
                console.log("Warm");
                imgg.innerHTML = `
            <img src="https://openwesathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `
            }
            else if (data.description = 'broken clouds') {
                console.log("Perfect");
                imgg.innerHTML = `
            <img src="https://openwesathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `
            }
            else if (data.description = 'shower rain') {
                console.log("Cool");
                imgg.innerHTML = `
            <img src="https://openwesathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `

            }
            else if (data.description = 'rain') {
                console.log("Cool");
                imgg.innerHTML = `
            <img src="https://openwesathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `

            }
            else if (data.description = 'thunderstorm') {
                console.log("Cool");
                imgg.innerHTML = `
            <img src="https://openwesathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `

            }
            else if (data.description = 'snow') {
                console.log("Cool");
                imgg.innerHTML = `
            <img src="https://openwesathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `

            }
            else if (data.description = 'mist') {
                console.log("Cool");
                imgg.innerHTML = `
            <img src="https://openwesathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `

            }
            else {
                console.log("Really cold");
                imgg.innerHTML = `
                <img src="./Media/reallyCold.png" alt="" class="w-1/2 my-4 lg:w-1/4  my-4">
            `
                bgg.style.backgroundImage = "url('./Media/snowBg.gif')";
                bgg.style.backgroundSize = "cover"
            }
            var rise = data.sys.sunrise;
            var zone = data.timezone;
            var set = data.sys.sunset;
            console.log(rise);
            srise.innerHTML = timecalc(rise, zone);
            sset.innerHTML = timecalc(set, zone);
            function timecalc(sun, zone) {
                let sunriseDate = new Date(sun * 1000);
                sunriseDate.setSeconds(sunriseDate.getSeconds() + zone);
                const sunriseHours = sunriseDate.getUTCHours().toString().padStart(2, "0");
                const sunriseMinutes = sunriseDate
                    .getUTCMinutes()
                    .toString()
                    .padStart(2, "0");
                const sunriseTime = `${sunriseHours}:${sunriseMinutes}`;
                var splitTime = sunriseTime.split(":");
                var hours = parseInt(splitTime[0]);
                var minutes = parseInt(splitTime[1]);
                var period = hours >= 12 ? "PM" : "AM";
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                return hours + ":" + minutes + " " + period;
            }
        }



    }