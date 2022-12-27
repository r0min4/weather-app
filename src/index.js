
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let currentDate = document.querySelector("#date");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[date.getDay()];
currentDate.innerHTML = `${day} ${hour}:${minutes}`

function showResult(response){
    let temperature = document.querySelector("#temperature");
    let temp = response.data.main.temp;
    temperature.innerHTML = Math.round(temp) ;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.data.main.humidity} %`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
    let describe = document.querySelector("#describe");
    describe.innerHTML = response.data.weather[0].main ;
    let cityName = document.querySelector("#city");
    cityName.innerHTML = response.data.name ;

}

function searchButton(event){
    event.preventDefault();
    let city = document.querySelector("#search");
    city = city.value;
    let apiKey = "743bee57fddbfaf52447193a87d5dd25";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(api).then(showResult);
}


let search = document.querySelector("#button");
search.addEventListener("click" , searchButton);

function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "743bee57fddbfaf52447193a87d5dd25";
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(api).then(showResult);
  }

function currentButton(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
    
}

let current = document.querySelector("#current-location-button");
current.addEventListener("click" , currentButton);