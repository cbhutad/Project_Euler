/*

Problem 6: Sum square difference

The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

Test cases:

sumSquareDifference(10) should return a number.
Waiting: sumSquareDifference(10) should return 2640.
Waiting: sumSquareDifference(20) should return 41230.
Waiting: sumSquareDifference(100) should return 25164150.

*/


function sumSquareDifference(n) {

return Math.pow((n * (n + 1)) / 2,2) - (n * (n+1) * (2*n + 1))/6;

}


