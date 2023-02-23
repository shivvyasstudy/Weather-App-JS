const API_Key = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q = ${city}&appid=${API_KEY}&units=metric`
// 
const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather (data)

}

const showWeather = (data) => {
    console.log(data)
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp}°Celsius </h2>
            <h4>${data.weather[0].main} </h4>
            <h5>Maximum Temperature : ${data.main.temp_max}</h5>
            <h5>Minimum Temperature : ${data.main.temp_min}</h5>

        </div>
    `

}
form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();// stops reloading of form
    }
)