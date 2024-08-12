// JS Higer order function examples
const inputArray = [1,2,3,4,5,6];
const doubledArray = inputArray.map((item) => item * 2);
console.log('The Doubled array is ', doubledArray);

const inputArray2 = [1,2,3,4,5,6,7,8,9,10];
const oddNumbers = inputArray2.filter((item) => item % 2 !== 0);
console.log('The odd numbers array ', oddNumbers);


const inputArray3 = [1,2,3,4,5,6,7,8,9,10];
const arraySum = inputArray3.reduce((total, number) => {
      return total + number;
});
console.log('The array sum is ', arraySum);


const inputArray4 = [1,2,3,4,5,6,7,8,9,10];
inputArray4.forEach((item, i) => {
    console.log(item, i);
});

const numbers = [5, 3, 2, 1, 11, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5, 11]
