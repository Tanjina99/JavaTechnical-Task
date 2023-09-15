// write a program that can sum an array elements, array elements are 2, 5, 7, 8

const array = [2, 5, 7, 8];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(`The sum of the array elements is: ${sum}`);