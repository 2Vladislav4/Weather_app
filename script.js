const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const img = document.createElement("img");
img.classList.add('icon')
const feels_like = document.querySelector(".feels_like")
const temp_min = document.querySelector(".temp_min")
const temp_max = document.querySelector(".temp_max")
const humidity = document.querySelector(".humidity")
const description = document.querySelector(".description")

navigator.geolocation.getCurrentPosition(function (position) { //Браузер -> геолокация -> местоположение
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}` //В переменной АРI сохраняем адрес

    fetch(API).then( //Когда запрос будет выполнен и придет ответ...
        response => response.json() // ... назови ответ 'responce' и преврати его в документ, ...
            .then(data => { //Объект дата (словарь)
                city.innerText = data.name;
                temp.innerText = data.main.temp;
                img.src = data.weather[0].icon;
                document.body.appendChild(img);
                feels_like.innerText = data.main.feels_like;
                temp_min.innerText = data.main.temp_min;
                temp_max.innerText = data.main.temp_max;
                humidity.innerText = data.main.humidity;
                description.innerText = data.weather[0].description;
         }) // ... назови его 'data' и выведи его в консоль
    )
})