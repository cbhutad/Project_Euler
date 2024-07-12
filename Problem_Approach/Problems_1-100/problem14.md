# Approach

Here the main thing to notice is the collatz sequence will at one point will reach to a number whose collatz sequence should be calculate before it.

### Example demonstration

for 5 this follows the flow

`5 -> 16 -> 8 -> 4 -> 2 -> 1`. Length is 6

and for 7

`7 -> 22 -> 11 -> 34 -> 17 -> 52 -> 26 -> 13 -> 40 -> 20 -> 10 -> 5` and from here same sequence is followed as was for 5. So here length will be 17 which is 11 till 10 and 6 for 5.

So in this way we will cache the lengths for previous encountered numbers and used them in future larger number collatz sequence count.

So we create a dictionary (or map) and store the key as number whose collatz sequence must be calculate and length calculated.

### Pseudocode

define empty map global variable.

for num from 2 to 1000000
  calculateCollatzLength(num) -> function to calculate the collatz sequence length

calculateCollatzLength(num) {
  temp = num # as num will be modified
  count = 1 #collatz sequence length count. starts with 1 as 1 needs to included

  while num != 1
    if num is even
      num = num / 2
    else num is odd
      num = num * 3 + 1
    now if num is present in map we just need to add the count from map for given number and break
    if num present in map.keys
      count = count + map.get(num)
    else
      count = count + 1 -> this is as the key in not map we just increase count by 1

  after while loop we update map to include num mapping. but since num  is 1 so we use temp initialized earlier

  if temp not in map.keys
    map.set(temp) = count

Once map is generated for every number in range of 2 to 1000000
we check the max value key and print the key


}
