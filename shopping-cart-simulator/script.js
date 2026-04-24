const products = [
    {name: 'Macbook' ,price: 600},
    {name: 'Speaker' ,price: 50},
    {name: 'Keyboard', price: 35},
    {name: 'Smartwatch' ,price: 200},
];

const filterPrices = products.filter((product)=>{return product.price > 100});
console.log(filterPrices);

const productsDisccount = filterPrices.map((product)=> {return {name: product.name, price: product.price * 0.95}});
console.log(productsDisccount)

const totalCost = productsDisccount.reduce((acc, product)=>{return acc + product.price},0)
console.log(totalCost)

const cart = new Set
cart.add(productsDisccount[0])
cart.add(productsDisccount[1])
console.log(cart)