// write a program that can convert a string, use function

function convertStringToUppercase(inputString) {
    return inputString.toUpperCase();
}

const inputString = prompt("Enter a string:");
const result = convertStringToUppercase(inputString);

console.log(`The converted string is: ${result}`);