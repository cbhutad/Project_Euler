### Approach

In order to solve the big sum what i observed was the length of numbers. Each of the number is 50 digits long. Since obviously we cannot store them in a given variable due to overflow operation after addding them i decided to create an array of integers of size 50 indicating the sum at the given place(unit, ten's, hundread's and thousands). Also i created an carry over variable to store the actual value of carry to be done in case of 50th unit place. The algorithm then is simple

1) loop through all the numbers from 1 to 100
2) start from unit place and move to 50th place(don't know what it should be called)
3) now for each unit place is denoted by kth index then

```

arrname[k] += unit place of each digit.

```

4) Once we have got the exact sum of all digits for each place, we start from unit place and check if the sum is greater or equal to 10. If so then decimal place mus tbe carried over to the next place in addition that is ten's and so on. Considering the unit place at 49th index we have

```

for i from 49 to 0
    if i is not 0 
        arrname[k-1] += arrname[k] / 10
    else
        excess += arrname[k] / 10 -> this is for the case of k being at index representing the 50th place
    arrname[k] = arrname[k] % 10 -> original unit place value is reserved

```

5) Now we check the excess value if it is not zero then considering this we get the exact number of digits of sum we need to display from the right side.


