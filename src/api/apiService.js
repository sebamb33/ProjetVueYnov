import axios from 'axios';
const KeyAPIWeather = 'e94da397866a4e73b5e60414232104';
const KeyApiCity='2jI0qiYy3fSIH7WUuMsmQw==w83xnkrHIZGigIkW'
export const getWeather = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KeyAPIWeather}&q=${city.name}&lang=fr`;
    const response = await axios.get(url);
    return response.data;
};
export const getCity = async(searchedCity)=>
{
    try {
        const response = await axios.get(
            `https://api.api-ninjas.com/v1/city?name=${searchedCity}&limit=30`,
            {
                headers: {
                    "X-Api-Key": KeyApiCity,
                },
            }
        );
        return response.data;
    }catch (error){
        console.log(error)
    }

}
export const getWeatherforecast = async(city)=>{
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${KeyAPIWeather}&q=${city.name}&days=5`;
    const response = await axios.get(url);
    return response.data;
}

export const getWeatherLiteInfo = async(city)=>{
    const url = `https://api.weatherapi.com/v1/current.json?key=${KeyAPIWeather}&q=${city.name}&lang=fr`;
    const response = await axios.get(url);
    let linkIcon = response.data.current.condition.icon.split('/');
    return {link:'/weatherIcon/'+linkIcon[linkIcon.length-2]+'/'+linkIcon[linkIcon.length-1],currentTemp:response.data.current.temp_c}
}
export default { getWeather,getCity,getWeatherforecast };