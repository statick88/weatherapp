const api_key= "9d575ce14f982269a104fc4d6e3164dc"
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

const getUrlWeatherByCity = city=>{
return `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`
}
export default getUrlWeatherByCity;