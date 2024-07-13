num = 2;

# Expressing 1000 as 8 x 125. so 2 raised to 1000 is 2 raised to 8 multiplied by 2 raised to 125
num = num ** 125
num = num ** 8

str_num = str(num)
sum = 0

for i in str_num:
    sum = sum + int(i)

print(sum)
