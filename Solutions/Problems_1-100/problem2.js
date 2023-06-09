/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

Test cases:

fiboEvenSum(10) should return a number.
Passed: Your function should return an even value.
Passed: Your function should sum the even-valued Fibonacci numbers: fiboEvenSum(8) should return 10.
Passed: fiboEvenSum(10) should return 10.
Passed: fiboEvenSum(34) should return 44.
Passed: fiboEvenSum(60) should return 44.
Passed: fiboEvenSum(1000) should return 798.
Passed: fiboEvenSum(100000) should return 60696.
Passed: fiboEvenSum(4000000) should return 4613732.

*/


function fiboEvenSum(n) {

	let sum = 0,num1 = 1,num2 = 2,temp;

	while(num2 <= n) {
		if(num2 % 2 == 0) {
			sum += num2;
		}
		temp = num1 + num2;
		num1 = num2;
		num2 = temp;
	}

	return sum;

}

console.log(fiboEvenSum(10));
