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
//everyメソッド
const hasExpensiceItems = items.every((item) => {
  return item.price > 100;
});
console.log(hasExpensiceItems);

const x = items.every((item) => {
  return item.price > 1;
});
console.log(x);
