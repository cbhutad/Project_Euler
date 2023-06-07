function largestPalindromeProduct(n) {

	let reverseFlag,flag = false;
	let largestProduct = Math.pow(10,2*n) - 1

	while(!flag) {
			for(let i = largestProduct;i >= Math.pow(10,2*n) - Math.pow(10,2*n-1);i--) {
				reverseFlag = false;
				let tempString = i.toString();
				
				for(let j = 0;j < n;j++) {
					if(tempString[j] != tempString[n*2-1-j]) {
						reverseFlag = true;
						break;
					}
				}
				if(!reverseFlag) {
					//console.log(i);
					largestProduct = i;
					break;
				}
			}

			for(let i = Math.pow(10,n)-1;i >= Math.pow(10,n)-Math.pow(10,n-1);i--) {
				if(largestProduct % i == 0) {
					let temp = largestProduct / i;
					if(temp >= Math.pow(10,n) - Math.pow(10,n-1) && temp <= Math.pow(10,n)-1) {
						flag = true;
						break;
					}
				}
			}
			if(!flag)
				largestProduct--;
	}

	return largestProduct;
}

console.log(largestPalindromeProduct(2));
