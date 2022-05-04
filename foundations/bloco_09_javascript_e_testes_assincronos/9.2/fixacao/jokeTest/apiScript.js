// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";

function putJokeOnHTML(joke) {
  const div = document.createElement("div");
  console.log(joke);
  div.innerHTML = joke;

  document.getElementById("jokeContainer").appendChild(div);
}

const fetchJoke = async () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  const response = await fetch(API_URL, myObject);
  const { joke } = await response.json();

  putJokeOnHTML(joke);
  
  // fetch(API_URL, myObject)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     putJokeOnHTML(data.joke);
  //   });
};

window.onload = () => fetchJoke();
