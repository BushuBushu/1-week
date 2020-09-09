n = int(input())

for _ in range(n):
    n, string = input().split()
    strings = list(string)
    answer = ''.join(map(lambda x: x*int(n), strings))
    print(answer)
