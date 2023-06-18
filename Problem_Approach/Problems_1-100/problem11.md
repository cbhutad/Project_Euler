### Approach

In order to find the product i tried to find the max product of 4 adjacent digits in row, column and along the diagonal and reverse diagonal.

so let say grid is :

1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

so the row wise logic would be take 1st row and find the max product of 4 adjacent digits. Then we jump to next row and then continue for the same logic. Here we will go to the index which is always less than or equal to grid length - 4 (in this case will be 1) so as to not go over the index. In order to find the product we will take the current index from the row and then count till the next 4 indexes.

The same logic can be be applied to column wise calculations by changing the index positions as that of considered for the row calculations.

For the diagonal and reverse diagonal check the pseudocode for the logic its easy to understand.

### Pseudocode

```

INIT product to -1,temp to 1,index to 0,index1 to 0,index2 to 0
INIT gridLen to grid single array length

FOR i FROM 0 TO gridLen-1
	FOR j FROM 0 TO gridLen-4
		FOR k FROM 0 TO 3
			COMPUTE index = j+k
			COMPUTE temp = temp * grid[i][index]
		ENDFOR
	IF temp > product
		product = temp
	ENDIF
	temp = 1
ENDFOR

FOR i FROM 0 TO gridLen-1
	FOR j FROM 0 TO gridLen-4
		FOR k FROM 0 TO 3
			COMPUTE index = j+k
			COMPUTE temp = temp * grid[index][i]
		ENDFOR
	IF temp > product
		product = temp
	ENDIF
	temp = 1
ENDFOR

FOR i FROM 0 TO gridLen-4
	FOR j FROM 0 TO gridLen-4
		FOR k FROM 0 TO 3
			COMPUTE index1 = i+k
			COMPUTE index2 = j+k
			COMPUTE temp = temp * grid[index1][index2]
		ENDFOR
	IF temp > product
		product = temp
	ENDIF
	temp = 1
ENDFOR

FOR i FROM 0 TO gridLen-4
	FOR j FROM 3 TO gridLen-1
		FOR k FROM 0 TO 3
			COMPUTE index1 = i+k
			COMPUTE index2 = j-k
			COMPUTE temp = temp*grid[index1][index2]
		ENDFOR
	IF temp > product
		temp = product
	ENDIF
	temp = 1
ENDFOR

```


