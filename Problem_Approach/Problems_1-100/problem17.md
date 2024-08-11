# Approach

This problem at first glance revolves around converting a given number into word equivalent and finding its length. But on closer inspection it seems that this process is a bit hectic to acheive. So we just focus on first 100 numbers and observe the pattern being repeated for next 100 range and so on.

Example for above is `111` and `11`. The difference is just addition of length of `one hundred` to first case and we get the total. So we can just store the word lengths for all the numbers below 100 and used them in subsequent numbers above 100 and upto 1000.

In order to find the word length of number equivalent in english we see that numbers above 20 to 99 follow a trend which is as follows:
- tens place number + `ty` + unit's place number

Demonstration -> 29 = twenty + nine.

Exceptions to this case are numbers from 11 to 19 that do not follow this trend as well as numbers are evenly divisible by 10 as 20 is not twoty but twenty. So we first create a map with this exceptions stored in it and calculate the value before hand.

now when looping from 1 to 1000

1. if i < 20 -> then we collect the value from the map where its already added in previous step
2. if i >= 20 and i < 100 -> here we must check first if the number is evenly divisible by 10, if yes then get the length from the map where it is already calculated else we find the ten's place digit first multiply it by 10 , get this numbers length (this one will be evenly divisible value by 10 and hence already present in the map) and add the unit's place length to the total. Now following the above deductions we just add this mapping to map for current number and its word length if not present in the map.
3. if i >= 100 and i != 1000 -> here if skip 1000 and check it as a special case. so if i is evenly divisible by 100 then count for such number is `hundreds place` digit length from map (it will be a single digit as example 700 we get 7) and length of `hundred` which is `7` to it. (Example `700` would be `7`(5) + `hundred`(7) = 12). If not evenly divisible by 100 then we need to calculate the hundred place digit length pluts length of `hundred and` without spaces (mentioned in problem statement) and length of `tens and unit place` combined. (this would be added as we loop from numbers 20 to 99 as mentioned in step 2) 
4. handle the case for 1000 and add it to total which is 11.


