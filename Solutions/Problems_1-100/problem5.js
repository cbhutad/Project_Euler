/*

Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

Test cases:

smallestMult(5) should return a number.
Waiting: smallestMult(5) should return 60.
Waiting: smallestMult(7) should return 420.
Waiting: smallestMult(10) should return 2520.
Waiting: smallestMult(13) should return 360360.
Waiting: smallestMult(20) should return 232792560.


*/

function smallestMult(n) {

	let hcf,lcm = 2;

	for(let i = 3;i <=n;i++) {
		if(lcm > i)
			hcf = calcHCF(i,lcm);
		else
			hcf = calcHCF(lcm,i);

		lcm = (i * lcm) / 2; 
	}

	return lcm;

}

function calcHCF(a,b) {
	
	if(b == 0)
		return a;
	return calcHCF(b, a % b);

}
