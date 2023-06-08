### Approach

In order to find such product we need to find the LCM of all numbers. In order to do so we can start by taking HCF of 2 numbers,calculate the LCM and then subsequently follow the process till we reach n.

#### Pseudocode

```

INIT hcf,lcm = 2

FOR i FROM 3 TO n
	IF i > lcm
		COMPUTE hcf = HCF(i,lcm)
	ELSE 
		COMPUTE hcf = HCF(lcm,i)
	ENDIF

	COMPUTE lcm = (i x (i - 1)) / hcf

ENDFOR

RETURN lcm

```
