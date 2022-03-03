// Calculo de lucro sobre a venda de um produto

const productValue = 10.00;
const  saleValue = 15.00;

const tax = 0.2;

let totalCostValue = productValue + (productValue * tax);
let profitValue = saleValue - totalCostValue;

if (productValue < 0 || saleValue < 0) {
    console.log('Valor inválido');
} else {
    console.log(profitValue * 1000)
}


