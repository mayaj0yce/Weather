
var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=45b1c3fdaea8e8d0b6ee28b6edef4eaf';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}
var count = localStorage.getItem("count");

getApi(requestUrl);
