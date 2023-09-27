const BASE_URL = "http://iotcounter.northeurope.cloudapp.azure.com/status";
const COUNT_NOW = document.getElementById("now");
const COUNT_ALL = document.getElementById("all");

const getCount = () => {
    fetch(BASE_URL, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data:', data);
        COUNT_NOW.innerText = data.currentVisitors;
        COUNT_ALL.innerText = data.totalVisitors;
    }) .catch(err => {
        console.error(err);
    });

  };