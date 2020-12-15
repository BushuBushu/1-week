import sys

answers = []
while True:
    line = sys.stdin.readline().strip()
    if not line:
        break
    else:
        a, b, c = map(int, line.split())
        answers.append(max(b-a-1, c-b-1))
for answer in answers:
    print(answer)