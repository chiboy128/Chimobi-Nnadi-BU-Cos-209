// Array methods: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num ** 2);
const even = numbers.filter(num => num % 2 === 0);
const total = numbers.reduce((acc, num) => acc + num, 0);

console.log(squares, even, total);
