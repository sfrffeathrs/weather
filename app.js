document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city){


let key = '77f97b598769bf8861004c74e30ebbba'
let req = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
fetch(req)
.then(function (resp) {
    return resp.json()
})
.then(function (data){
    console.log(data)
})
    .catch(function (error){
    console.log(error)
    })
}

function cityWeather(){
    weatherDataFetch('Tartu')
}