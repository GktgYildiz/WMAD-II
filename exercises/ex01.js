/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

  // Put your solution here

const sumLargestNumbers = function (data) {

//    alternative way of solution. just sort data by descending order.

//   data.sort((a, b)=> b - a);
//  return (data[0] + data[1]);

let largest = -Infinity;
let secondLargest = -Infinity;

for (const num of data) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest) {
    secondLargest = num;
  }
}

  return largest + secondLargest;
};
 


console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;
