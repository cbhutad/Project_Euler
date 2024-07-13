# Approach

In order to solve this problem we need to calculate the value of big power for a given base 2. To solve this we just break down the bigger power in terms of its prime factors and their respective power

So 1000 becomes 500 x 2, 250 x 4, 125 x 8 where 125 is 5<sup>3</sup> and 8 is 2<sup>3</sup>.

2<sup>1000</sup> = 2<sup>2<sup>3</sup> x 5<sup>3</sup></sup>

or (((((((2)<sup>2</sup>)<sup>2</sup>)<sup>2</sup>)<sup>5</sup>)<sup>5</sup>)<sup>5</sup>)

calculating this gives us the required number whose digits sum we must calculate.
