### Approach

For the given problem we had to just check with or condition as the given number is divisible by 3 or 5 and check this for all the values which are less than the number argument passed to the function. Now for each number satisfying this condition will be added to sum. And we return this sum.


#### Pseudocode

```

SET sum to zero
FOR each value from 1 to argumentNumber-1
	IF value is divisble by 3 OR value is divisible by 5
		COMPUTE sum = sum + value
	ENDIF
ENDFOR
RETURN sum

```
