export const randomNumber = () => Math.floor(Math.random() * 100) + 1;
export const toUpper = (string) => string.toUpperCase();
export const returnFirstLetter = (string) => string[0];
export const stringJoin = (s1, s2) => `${s1}${s2}`;

export const fetchDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
  return data;
}
