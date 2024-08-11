word_map = {1:3, 2:3, 3:5, 4:4, 5:4, 6:3, 7:5, 8:5, 9:4, 10:3, 11:6, 12:6, 13:8, 14:8, 15:7, 16:7, 17:9, 18:8, 19:8, 20:6, 30:6, 40:5, 50:5, 60:5, 70:7, 80:6, 90:6, "hundredand":10, "hundred":7, "thousand":8};

total = 0

for i in range(1, 1001):

    if i < 20:
        total = total + word_map[i];
    elif i < 100 and i >= 20:
        tensPlace = int(i / 10)
        temp = 0;
        if i % 10 != 0:
            temp = word_map[(tensPlace * 10)] + word_map[int(i % 10)]
        else:
            temp = word_map[(tensPlace * 10)]
        if i not in word_map:
            word_map[i] = temp
        total = total + temp
        temp = 0
    elif i >= 100 and i != 1000:
        hundredPlace = int(i / 100)
        temp = 0
        if i % 100 != 0:
            temp = word_map[hundredPlace] + word_map["hundredand"] + word_map[int(i % 100)]
        else:
            temp = word_map[hundredPlace] + word_map["hundred"]
        if i not in word_map:
            word_map[i] = temp
        total = total + temp
        temp = 0
    elif i == 1000:
        total = total + word_map[1] + word_map["thousand"]
        if i not in word_map:
            word_map[i] = 11

print(total)
print(word_map)
