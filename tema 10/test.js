console.log("main.js loaded...");

let dataBaseForecast = {};
let dataBaseDaily = {};
let urlForecast = "https://weather-days-default-rtdb.europe-west1.firebasedatabase.app/";
let urlCurrentWeather = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
let urlIcon = "http://openweathermap.org/img/w/";
let place;

window.onload = function () {
    getData()
};
async function getData() {
    if (place) {
        place = place.split(",")[0];
    }
    const firstResponse = await fetch(urlForecast + ".json");
    dataBaseForecast = await firstResponse.json();
    // const secondResponse = await fetch(urlCurrentWeather + place.trim());
    // dataBaseDaily = await secondResponse.json
    console.log(dataBaseForecast);
    draw();
}

function draw() {
    let table = document.querySelector("tbody")
    let days = "";
    let dayArray = [];
    let arr = [];
    let dayNr = 0;
    let str = "";

    for (let i = 0; i < dataBaseForecast.list.length; i++) {
        let elem = dataBaseForecast.list[i];
        if (elem === null) {
            continue;
        }
        let date = dataBaseForecast[`list`][`${i}`][`dt_txt`];

        date = date.split(" ")[0];
        arr.push(date);
        let aux1 = arr[i];
        let aux2 = arr[i - 1];
        if (arr.length > 2 && aux1[9] === aux2[9]) {
            continue;
        } else {
            dayArray.push(aux1);
        }
    }

    for (let k = 0; k < dayArray.length; k++) {
        days += `
                    <tr class="day${k}">
                        <td>${dayArray[k]}</td>
                    </tr>
        `
    }
    table.innerHTML = days;

    for (let i = 0; i < dataBaseForecast.list.length; i++) {
        let elem = dataBaseForecast.list[i];
        if (elem === null) {
            continue;
        }

        let icon = dataBaseForecast[`list`][`${i}`][`weather`][`0`][`icon`];
        let temp = dataBaseForecast[`list`][`${i}`][`main`][`temp`];
        let description = dataBaseForecast[`list`][`${i}`][`weather`][`0`][`description`];
        let date = dataBaseForecast[`list`][`${i}`][`dt_txt`];

        let aux = arr[i];
        if (i > 1 && aux[9] != date[9]) {
            dayNr++;
            let tr = document.querySelector(`.day${dayNr}`)
            let td = document.createElement("td");
            str = "";
            str = `
                    <td>
                        <img src="${urlIcon + icon + ".png"}"/><br>
                        ${temp}&#8451;
                        ${description}
                    </td>
            `
            
            td.innerHTML = str;
            tr.appendChild(td);
        } else {
            let row = document.querySelector(`.day${dayNr}`)
            let cell = document.createElement("td");
            str = `
                    <td>
                        <img src="${urlIcon + icon + ".png"}"/><br>
                        ${temp}&#8451;
                        ${description}
                    </td>
            `
            cell.innerHTML = str;
            row.appendChild(cell);
        }
    }
    // table.innerHTML = str;



}

function fiveDayForecast(event) {
    // place = document.querySelector("#geocoder > div > input").value;
    event.preventDefault();
    draw();
}