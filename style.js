
function newCity(city) {
    let apikey = "795fc3dt59e943954b5e5aoc405fb9c4";
    let apiurl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}`;
    axios.get(apiurl).then(response);
}
function response(result) {
    let newName = document.querySelector("#current-city");
    newName.innerHTML = result.data.city;
    let temperature = document.querySelector("#current-temperature-value");
    temperature.innerHTML = `${Math.round(result.data.daily[0].temperature.day
)}`; 
}

function search(event) {
    event.preventDefault();
    let takeCity = document.querySelector("#search")
    newCity(takeCity.value);
}

let takeInput = document.querySelector("#search-form");
takeInput.addEventListener("submit", search);

let now = new Date();

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = formatAll(now);

function formatAll(day) {
    let minute = day.getMinutes();
    let hour = day.getHours();
    let today = day.getDay();

    if (minute < 10) {
        minute = `0${minute}`;
    }

    if (hour < 10) {
        hour = `0${hour}`;
    }
    
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
    let correctDay = days[today];

    return `${correctDay} ${hour}:${minute}`;
}