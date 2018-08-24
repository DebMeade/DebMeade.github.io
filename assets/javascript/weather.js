console.log(window.navigator.geolocation);
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    var {latitude, longitude}=position.coords
    console.log(latitude, longitude);
    var url2=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&&lon=${longitude}&APPID=84c07ea9b4ea804915b8683ab42742b4&units=imperial`
    fetch(url2)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        $(".weatherContainer").text(`${myJson.name} current temperature ${myJson.main.temp}`);
        $(".weatherContainer").append($("<span>&#x2109</span>"))
    })
    .catch(function(error) {
        console.error(error);
    })   
})



// var url = "http://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=84c07ea9b4ea804915b8683ab42742b4&units=imperial"
// fetch(url)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(myJson);
//         // $(".weatherContainer").text(myJson.main.temp);
//     })
//     .catch(function(error) {
//         console.error(error);
//     })