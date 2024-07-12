# global mapping for collatz length for each number from 2 to 999999
covered_nums = {}

def calculateCollatzSequenceLength(num):
    temp = num
    count = 1
    while num != 1:
        if num % 2 == 0:
            num = num / 2
        else:
            num = num * 3 + 1
        if num is covered_nums.keys():
            count = count + covered_nums[num]
            break # because this will calculate the count for num totally
        else:
            count = count + 1

    # updating the global map by adding mapping for current num
    if temp not in covered_nums.keys():
        covered_nums[temp] = count

for i in range(2, 1000000):
    calculateCollatzSequenceLength(i)

maxKey = -1
maxValue = -1

for key in covered_nums.keys():
    if maxValue < covered_nums[key]:
        maxValue = covered_nums[key]
        maxKey = key

print(maxKey)
