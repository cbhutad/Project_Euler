function largestPrimeFactor(number) {

	if(number < 10) {
		if(number % 2 == 0)
			return 2;
		else if(number % 3 == 0)
			return 3;
		else if(number % 5 == 0)
			return 5;
		else if(number % 7 == 0)
			return 7;
	}

	let factor,flag;
	let squareroot = Number.parseInt(Math.sqrt(number));

	for(factor = squareroot - 1;factor >= 2;factor--) {
		flag = false;
		if(number % factor == 0) {
			for(let j = factor - 1;j >= 2;j--) {
				if(factor % j == 0) {
					flag = true;
					break;
				}
			}
			if(!flag)
				break;
		}
	}

	return factor;
}

console.log(largestPrimeFactor(13195));
