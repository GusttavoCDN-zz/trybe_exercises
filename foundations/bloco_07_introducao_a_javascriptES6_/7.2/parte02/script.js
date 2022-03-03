const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order['order']['delivery']['deliveryPerson'];
  const receiverPerson = order['name'];
  const tel = order['phoneNumber'];
  const street = order['address']['street'];
  const buildNumber = order['address']['number'];
  const apNumber = order['address']['apartment']
   
  return `Olá ${deliveryPerson}, entrega para: ${receiverPerson}, Telefone: ${tel}, ${street}, Nº ${buildNumber}, AP: ${apNumber}`;

}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const receiverPerson = order.name = 'Luiz Silva'
  const pizza1 = Object.keys(order['order']['pizza'])[0];
  const pizza2 = Object.keys(order['order']['pizza'])[1];
  const drink = Object.values(order['order']['drinks']['coke'])[0]
  const price = order['payment']['total'] = 50;
  console.log(price)
  
  return `Olá ${receiverPerson}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$ ${price}`
}

console.log(orderModifier(order));
console.log(order.name)