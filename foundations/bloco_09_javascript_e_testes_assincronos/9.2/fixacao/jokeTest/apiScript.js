// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


function putJokeOnHTML(joke) {
  const div = document.createElement('div');
  div.innerHTML = joke;

  document.querySelector('body').appendChild(div);
}


const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    });
};

window.onload = () => fetchJoke();