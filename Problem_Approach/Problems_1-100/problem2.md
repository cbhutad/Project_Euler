### Approach

Here as per the problem statement we need to find all the even valued fibonacci numbers less than the passed argument number. Note that this does not mean the even indexed fibonacci numbers but the fibonacci numbers which are even.

#### Pseudocode

```

SET sum to zero,num1 to 1,num2 to 2
DECLARE temp to calculate the next fibonaaci number
WHILE num2 is less than equal to argumentnumber
	IF num2 is divisible by 2
		COMPUTE sum = sum + num2
	ENDIF
	COMPUTE temp = num1 + num2
	SET num1 = num2
	SET num2 = temp
ENDWHILE
RETURN sum

```
