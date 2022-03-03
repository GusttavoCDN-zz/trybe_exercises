function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;

    verifySum(value1, value2);

    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;

  } catch (error) {

    const result = error.message;
    document.getElementById('result').innerText = `${result}`;
    throw error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

function verifySum(value1, value2) {
  if (value1 === '' || value2 === '') throw new Error("Os dois valores devem ser preenchidos!");
  
  if (isNaN(value1) || isNaN(value2)) throw new Error("Os dois valores precisam ser números");

}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}