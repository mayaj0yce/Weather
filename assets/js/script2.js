var requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=45b1c3fdaea8e8d0b6ee28b6edef4eaf';
 
console.log(requestURL)
var CityName = document.getElementById('FindCity');



var cityName =  document.getElementById("-F");


console.log(cityName)

function searchAPI(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=40e8f4e7cce1a052fa34799e8403ed4a&units=imperial"
  
      // Json method on the response. //
    fetch(url).then(function(response){
      return response.json() 
  
    })

fetch (requestURL)
// get api
.then()
// search city
.then()
// display city weather in the box
eventlistener 


// search button 
function getData() {
    fetch(requestURL)
    .then(response => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            return;
        }

        console.log(response.headers.get("Content-Type"));
        return response.json();
        }
    )
    .then(myJson => {
        console.log(JSON.stringify(myJson));
    })
    .catch(err => {
        console.log('Error has occured', err);
    });
}



  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", function (event) { searchCity(event); });
  
  var clearSearchButton = document.getElementById("clearSearchButton");
  clearSearchButton.addEventListener("click", function (event) { clearSearchHistory(event) });


// save history 
history 

var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

function addCityToHistory(cityName) {
  searchHistory.push(cityName);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  console.log(localStorage)
};

function clearSearchHistory(event) {
    event.preventDefault();
    searchHistory = [];
    localStorage.removeItem("searchHistory");
    var cityList = document.getElementById("cityList");
    cityList.innerHTML = "";
  };


}