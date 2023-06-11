### Approach

This problem can be solved for the mentioned test cases by using the following property

_for a,b,c to be a pythagorean triplet ka,kb and kc will be also be a pythogorean triplet for a natural number k._ [https://en.wikipedia.org/wiki/Pythagorean_triple](Link)

So i found the pythagorean triplets under 100 and checked if the sum of any of them divides the input number completely. 
If yes the result would be quotient of division cubed multiplied by product of a,b,c.

#### Pseudocode


```

SET a,b,c,flag,k

FOR a FROM 1 to 100
	FOR b from 1 to a
		FOR c from 1 to b
			IF (a ,b,c are pythagorean triplets and a+b+c divides n (no remainder))
				SET flag to TRUE
				BREAK
			ENDIF
		ENDFOR
		IF flag is TRUE
			BREAK
		ENDIF
	ENDFOR
	IF flag is TRUE
		BREAK
	ENDIF
ENDFOR

COMPUTE k as qutoient for n divided by a,b,c
RETURN k * k * k * a * b * c

```
