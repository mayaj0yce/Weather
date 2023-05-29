var requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=45b1c3fdaea8e8d0b6ee28b6edef4eaf';
 

fetch (requestURL)
// get api
.then()
// search city
.then()
// display city weather in the box



// search button 

function searchCity(event) {
    event.preventDefault();
    var input = document.getElementById("EnterCity");
    var cityName = input.value.trim();
  
    if (cityName) {
  
  
      searchAPI(cityName);
  
      addCityToHistory(cityName);
  
      // Clears the input field after a search is conducted. //
      input.value = "";
    };
  };

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


