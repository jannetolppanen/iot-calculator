const BASE_URL = 'http://4.210.123.248:3000/';
const COUNT_DOM = document.getElementById('maara');
const COUNT_ALL = document.getElementById('kaikki');

// const getCount = () => {
//     fetch(BASE_URL,{
//         "method": "GET",
//     }).then (response => response.text())
//     .then((text) => {
//         console.log('text: ', text.currentVisitors)
//         COUNT_DOM.innerText = text;
//     }) .catch(err => {
//         console.error(err);
//     });

// };

const getCount = () => {
  fetch(BASE_URL, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data:', data);
      COUNT_DOM.innerText = data.totalVisitors;
    });
};
