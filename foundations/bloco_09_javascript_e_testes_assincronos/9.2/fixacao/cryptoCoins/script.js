const URL_API = 'https://api.coincap.io/v2/assets'
const CURRENCY_API = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

async function fetchCurrent() {
  try {
    const response = await fetch(CURRENCY_API);
    const data = await response.json();
    const brCurrent = data.usd.brl;

   return brCurrent;

  } catch (error) {
    console.error(error);
  }
};


async function putCoinOnTable(coin) {
  const tr = document.createElement('tr');
  const firstTd = document.createElement('td');
  const secondTd = document.createElement('td');
  firstTd.innerText = `${coin.name} (${coin.symbol})`;
  secondTd.innerText = `${(parseFloat(coin.priceUsd) * parseFloat(await fetchCurrent())).toFixed(2)}`;
  
  tr.appendChild(firstTd);
  tr.appendChild(secondTd);

  document.querySelector('.table_body').appendChild(tr);
}

function get10firtsCoins(coinArray) {
  for (let i = 0; i < 10; i += 1) {
    putCoinOnTable(coinArray[i]);
  }
}

const fetchCrypto = async () => {
  const apiObject = {
    method: 'GET',
    redirect: 'follow'
  };

  try {
    const response = await fetch(URL_API, apiObject);
    const data = await response.json();
    const coinsArray = data.data;

    get10firtsCoins(coinsArray);
  } catch (error) {
    error.toString();
    console.log(`Thats is a error`);
  }
}

window.onload = () => fetchCrypto();