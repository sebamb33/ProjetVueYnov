<template>
    <div class="City-Weather">
        <div class="city-info" v-if="weatherData">
            <h1>{{ weatherData.location.name }}</h1>
            <div class="locationInfo">
                <p>lat : {{ weatherData.location.lat }}</p>
                <p>long : {{ weatherData.location.lon }}</p>
                <p>Country : {{weatherData.location.country}}</p>
                <p>Local time : {{weatherData.location.localtime}}</p>
            </div>
            <p class="NameOfCateg">
                Today
            </p>
            <div class="todayInfo">
            <div class="temp">

                <div class="iconCurrentWeather">
                    <img :src="getWeatherIcon()" alt="weatherIcon">
                </div>
                <div class="tempInfo">
                    <p id="tempDisplay">
                        {{weatherData.current.temp_c}}°
                    </p>
                    <p class="feelsLike">
                       feels like {{weatherData.current.feelslike_c}}°
                    </p>
                </div>
            </div>
            <div class="wind">
                <img src="/weatherIcon/wind-icon.svg" alt="wind-icon" width="64" height="64">
                <p class="windKph">
                   wind :{{weatherData.current.wind_kph}} /kph
                </p>
                <p class="windDir">
                    wind direction : {{weatherData.current.wind_dir}}
                </p>
                <p class="windPressure">
                    wind pressure : {{weatherData.current.pressure_mb}}mb
                </p>
            </div>
            <div class="waterInfo">
                <img src="/weatherIcon/water-drop-icon.svg" alt="wind-icon" width="64" height="64">
                <p class="precipitation">
                    precipitation  : {{weatherData.current.precip_mm}}mm
                </p>
                <p class="humidity">
                    humidity : {{weatherData.current.humidity}}
                </p>

            </div>
        </div>
            <p class="NameOfCateg">
                5 days forecast
            </p>
            <div class="weatherForecast" v-if="weatherForecastData">
                <div class="dayForecast" v-for="(item, index) in weatherForecastData.forecast.forecastday" :key="index">
                    <div class="OneDayForecast">
                        <p class="dateForecast">
                            {{item.date}}
                        </p>
                        <img :src="getForecastWeatherIcon(item)" alt="weatherIcon">
                        <p class="minMaxTempForecast">
                            min {{item.day.mintemp_c}}°  max{{item.day.maxtemp_c}}°
                        </p>
                        <p class="avgTempForecast">
                            avg temp : {{item.day.avgtemp_c}}°
                        </p>
                        <p class="chanceOfRain">
                            chance of rain : {{item.day.daily_chance_of_rain}}%
                        </p>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>

import {getWeather,getWeatherforecast} from '../api/apiService'
export default {
    name: "CityWeather",
    props: {
        selectedCityData: Object,
    },
    data() {
        return {
            weatherData: null,
            weatherForecastData:null,
        };
    },
    created() {
        this.weatherInfo(this.selectedCityData)
        this.weatherForecastInfo(this.selectedCityData)
    },
    methods: {
        async weatherInfo(city) {
            this.weatherData = await getWeather(city)
            this.weatherData=new Proxy(this.weatherData, {});

        },
        async weatherForecastInfo(city)
        {
          this.weatherForecastData=await getWeatherforecast(city)
            this.weatherForecastData=new Proxy(this.weatherForecastData, {});
        },


        getWeatherIcon()
        {
            if(this.weatherData.current.is_day==1)
            {
                let iconLink = this.weatherData.current.condition.icon.split('/')
                let link ='/weatherIcon/day/'+iconLink[iconLink.length-1]
                return link
            }else{
                let iconLink = this.weatherData.current.condition.icon.split('/')
                let link ='/weatherIcon/night/'+iconLink[iconLink.length-1]
                return link
            }
        },
        getForecastWeatherIcon(item)
        {
                console.log(item)
                let iconLink = item.day.condition.icon.split('/')
                let link ='/weatherIcon/'+iconLink[iconLink.length-2]+'/'+iconLink[iconLink.length-1]
                console.log("link night" +link)
                return link

        },
    },
    watch: {
        selectedCityData(newVal) {
            this.weatherInfo(newVal);
        },
    },
};
</script>

<style scoped>
.City-Weather {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
}
h1
{
    font-size: 5em;
    margin: auto 0px;
}
.NameOfCateg
{
    font-size: 40px;
}
.locationInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}
.locationInfo p
{
    margin: 20px 20px;
}
.city-info {
    margin-bottom: 20px;
}
.todayInfo{
    display: flex;
    flex-direction: row;
    height: 30%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color:#F5F5F5 ;
    border-radius: 2em;
}
.weatherForecast
{
    display: flex;
    justify-content: space-between;
    height: 40%;
    align-items: center;
    background-color:#F5F5F5 ;
    border-radius: 2em;
    padding: 0% 5%;
}
.OneDayForecast
{
    padding: 10px;
    height: 80%;

    border-radius:1em;
    background-color:#EEEEEE ;
}

.city-info{
    width: 80%;
}
.temp
{
    background-color:#EEEEEE;
    width: 25%;
    padding: 10px;
    height: 80%;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.wind
{
    background-color:#EEEEEE;
    width: 25%;
    height: 80%;
    padding: 10px;
    border-radius: 1em;
}
.waterInfo
{
    background-color:#EEEEEE;
    width: 25%;
    padding: 10px;
    height: 80%;
    border-radius: 1em;
}
.weather-Info {
    font-size: 25px;
}
*{color: #333333;
}
</style>
