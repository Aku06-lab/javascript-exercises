const search = document.querySelector(".search");
const inputCity = document.querySelector(".city");


const info1= document.querySelector(".innerContainer1");



const displayContainer = document.querySelector(".container");

async function getWeather(location){
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?unitGroup=metric&" + "key=3NP5XX8RCEW4H2ERQSU5GSJYE");
    const weatherData = await response.json();
    processWeatherData(weatherData);
}

search.addEventListener("click", ()=> {
    // const location = "malindi"
    const location = inputCity.value;
    getWeather(location);
    inputCity.value = ""
    info1.textContent = ""
})
const currentTime = new Date();

function processWeatherData(data){
    const location = document.createElement("p")
    location.textContent =data.address;
    const weatherConditions = document.createElement("p");
    weatherConditions.textContent =  data.days[0].conditions;
    const dateTime = document.createElement("p");
    const formatter =  new Intl.DateTimeFormat('en-GB', {
        timeZone: data.timezone,
        hour:"2-digit",
        minute:"2-digit"
    }).format(currentTime);
    dateTime.textContent = `${data.address}, ${data.days[0].datetime}, ${formatter}`;
    const temperature = document.createElement("p");
    temperature.textContent =  `${data.currentConditions.temp}°C`;
    temperature.style.fontSize = "100px";   

    info1.append( temperature, weatherConditions,dateTime, );

}