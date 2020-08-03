now = int(input())
seconds = 0
for _ in range(int(input())):
    time, result = input().split()
    seconds += int(time)
    if seconds >= 210:
        print(now)
        break
    if result == 'T':
        now += 1
        if now > 8:
            now = 1
