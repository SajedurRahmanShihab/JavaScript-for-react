const array1 = [1, 2, 3, 5];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array1.reduce(reducer));