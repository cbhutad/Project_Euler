/*

Problem 9: Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

TestCases:

specialPythagoreanTriplet(24) should return a number.
Waiting: specialPythagoreanTriplet(24) should return 480.
Waiting: specialPythagoreanTriplet(120) should return 49920, 55080 or 60000.
Waiting: specialPythagoreanTriplet(1000) should return 31875000.

*/


function specialPythagoreanTriplet(n) {

	let a,b,c,flag,k;

	for(let a = 1; a < n;a++) {
		for(let b = 1;b < a;b++) {
			for(let c = 1;c < b;c++) {
				if(Math.pow(a,2) == Math.pow(b,2) + Math.pow(c,2) && 
					n % (a+b+c) == 0) {
						flag = true;
						break;
					}
			}
			if(flag)
				break;
		}
		if(flag)
			break;
	}

	k = n / (a+b+c);
	return Math.pow(k,3) * a * b * c;

}

console.log(specialPythagoreanTriplet(1000));
