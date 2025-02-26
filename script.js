function getWeather(){
    const apiKey = '22f1479849df939033182c87050daa97';
    const city_input = document.getElementById('city-input');
    let city =  city_input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((res)=>res.json()).then((data)=>{
        const temp = data.main.temp-273.15;
        const weather = data.weather[0].description;
        const icon = data.weather[0].icon;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const cityName = data.name;
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(2)+'°C';
        document.getElementById('description').innerText = "Description: "+weather;
        document.getElementById('humidity').innerText = "humidity:"+humidity;
        document.getElementById('wind').innerText = "Wind Speed:"+wind;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    })

}

const button = document.getElementById('btn');
button.addEventListener('click', getWeather);


const city_input = document.getElementById('city-input');
city_input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    getWeather();
  }
});