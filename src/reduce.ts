export {};

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

//reduceメソッド
const total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
}, 1000);
console.log(total);

const x = items.reduce((currentTotal, items) => {
  return currentTotal + items.price;
}, 0);
console.log(x);
