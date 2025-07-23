let btn = document.querySelector("#btn");
let api_key = "646d386252faccddbc8c16e47a4280fc";
let img = document.querySelector(".image");

let getWeather = async () => {
  let city = document.querySelector("#city").value;

  if (!city) {
    alert("Enter City");
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  try {
    console.log("Getting Weather data.....");
    let response = await fetch(currentWeatherUrl);

    let data = await response.json();
    displayWeather(data);
  } catch (err) {
    console.log("There is an error ", err);
  }
};

let getForcast = async () => {
  let city = document.querySelector("#city").value;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
  try {
    let response = await fetch(forecastUrl);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log("There is an error", err);
  }
};

let displayWeather = (apidata) => {
  let upcome = document.querySelector(".upcoming");
  upcome.innerHTML = "";

  console.log(apidata);
  let img = document.querySelector(".image");
  let temp = document.querySelector(".temp");
  let data = document.querySelector(".data");
  let upcomming = document.querySelector(".upcomming");
  let iconCode = apidata.weather[0].icon;
  console.log(iconCode);

  let namehtml = apidata.name;
  let dishtml = apidata.weather[0].description;
  let feelslike = apidata.main.feels_like;
  console.log(namehtml);
  console.log(dishtml);

  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  temp.innerHTML = `${Math.round(apidata.main.temp - 273)}°C`;
  data.innerHTML = `<p>${namehtml}</p> <p>${dishtml}</p> <p> Feels like ${Math.round(
    feelslike - 273
  )}°C`;
  img.src = iconUrl;

  upcoming();
};

btn.addEventListener("click", () => {
  getForcast();
  getWeather();
});

async function upcoming() {
  let upcoming = document.querySelector(".upcoming");
  let nxt = await getForcast();
  let nxt24 = nxt.list.slice(0, 8);

  nxt24.forEach((value) => {
    let date = new Date(value.dt * 1000);
    let hrs = date.getHours();
    let uicon = value.weather[0].icon;
    iconimg = `https://openweathermap.org/img/wn/${uicon}.png`;

    let uphtml = `<div>
      
      <span>${hrs}:00</span>
      <img src=${iconimg}>
      <span>${Math.round(value.main.temp - 273)}°C</span>

      </div>`;

    upcoming.innerHTML += uphtml;
  });
}
