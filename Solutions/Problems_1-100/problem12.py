# primes to consider
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
# divisor count
divisorsCount = 0;
# powers of tau function to be multiplied at end
primePower = {2: 0, 3: 0, 5: 0, 7: 0, 11: 0, 13: 0, 17 : 0, 19: 0, 23 : 0, 29: 0, 31:0, 37:0, 41:0, 43:0, 47:0, 53:0, 59:0, 61:0, 67:0, 71:0, 73:0, 79:0, 83:0, 89:0, 97:0}
n = 2

while divisorsCount < 500:
    # initial count is 1. This is because tau function states divisorcount = (a-1)(b-1)(c-1).. where a,b and c are prime factors power
    divisorsCount = 1
    # initially for each triangular number set the power to be calculated to default
    for key in primePower.keys():
        primePower[key] = 0
    # determine the triangular number
    sum = int((n * (n + 1)) / 2)
    # determining the power of each prime factor which is a divisor
    for prime in primes:
        while prime <= sum and sum % prime == 0 and sum != 1:
            primePower[prime] = primePower[prime] + 1
            sum = sum / prime
    # calculating the number of divisors
    for key in primePower.keys():
        divisorsCount = divisorsCount * (primePower[key] + 1)
    n = n + 1
# output to be displayed
sum = int(((n - 1) * n) / 2)
print(sum)
