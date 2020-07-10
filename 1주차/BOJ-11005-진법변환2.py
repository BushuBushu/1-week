number, base = map(int, input().split())
baseList = [str(x) for x in range(10)]
if base >= 10:
    for y in range(65, 65+(base-10)):
        baseList.append(chr(y))
newNumber = []
while number > 0:
    newNumber.append(baseList[number % base])
    number = number//base
print(''.join(reversed(newNumber)))