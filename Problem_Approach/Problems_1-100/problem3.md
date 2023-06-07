### Approach

In order to find the largest prime factor for the given number. To do so we can use the square root to find the maximum limit upto which the prime factor will exist. The logic written here does not work for single digit numbers so need to consider them as special case.

#### Pseudocode

```

IF number IS LESS THAN 10
	IF number IS DIVISIBLE BY 2
		RETURN 2
	ELSE IF number IS DIVISIBLE BY 3
		RETURN 3
	ELSE IF number IS DIVISIBLE BY 5
		RETURN 5
	ELSE IF number IS DIVISIBLE BY 7
		RETURN 7
ENDIF

SET I,FLAG
INIT squareroot AS SQRT(n)

FOR I FROM squareroot-1 TO 2
	IF squareroot DIVISBLE BY I
		FOR J FROM I - 1 TO 2
			IF I DIVISBLE BY J
				COMPUTE flag = TRUE
				BREAK
			ENDIF
		ENDFOR
	ENDIF
	IF FLAG
		BREAK
ENDFOR

RETURN I
		
```

