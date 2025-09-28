// Spread operator with arrays and objects
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

const person = { name: "John", age: 30 };
const updatedPerson = { ...person, country: "Ghana" };

console.log(moreNumbers);
console.log(updatedPerson);
