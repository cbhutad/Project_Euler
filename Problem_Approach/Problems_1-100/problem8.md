### Approach

Here i checked for the adjacent set of n numbers and reset them if a larger set of such numbers are found. To do so a flag variable can be used to check if each of the adjacent number is greater than the previous set of number.


#### Pseudocode

```

INIT max (array of size n),flag,result

FOR i from 0 to n
	SET max[i] = inputArray[i];
ENDFOR

FOR i from 0 to 1001 - n
	SET flag to FALSE
	FOR j from 0 to n
		IF max[j] >= inputArray[i+j] (i+j as this will be corrosponding position after each i index. Say i = 5 and we want the next 5th element to compare so it will be 10th index for input array)
			SET flag to TRUE
		ELSE 
			SET flag to FALSE
			BREAK
		ENDIF
	ENDFOR

	IF flag is TRUE
		FOR j from 0 to n
			SET max[j] = inputArray[i+j]
		ENDFOR
	ENDIF

ENDFOR

FOR i from 0 to n
	COMPUTE result = result * max[i]
ENDFOR

RETURN result

```
