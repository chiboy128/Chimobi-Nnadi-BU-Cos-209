// Array & Object Destructuring
const person = { name: "Sarah", age: 25, country: "Ghana" };
const { name, age } = person;

const fruits = ["Apple", "Banana", "Orange"];
const [firstFruit, secondFruit] = fruits;

console.log(`${name} is ${age} years old.`);
console.log(`First Fruit: ${firstFruit}, Second Fruit: ${secondFruit}`);
