// write a program that can find the length the total length of a string, use a function 

function calculateLength(inputString) {
    let length = 0;

    for (let i = 0; i < inputString.length; i++) {
        length++;
      }
    
      return length;
    }


    const inputString = prompt("Enter a string:");
    const result = calculateLength(inputString);

    console.log(`The total length of the string is: ${result}`);
