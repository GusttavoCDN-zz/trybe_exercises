fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const toUpper = (string) => string.toUpperCase();
const returnFirstLetter = (string) => string[0];
const stringJoin = (s1, s2) => `${s1}${s2}`;

const fetchDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
  return data;
}

module.exports = {randomNumber, toUpper, returnFirstLetter, stringJoin, fetchDog};
