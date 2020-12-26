import math
import sys

def solution():
    checks = [True] * (n+1)
    for num in range(2, math.ceil(n ** 0.5)+1):
        if checks[num]:
            for mul in range(num*2, n+1, num):
                checks[mul] = False
    answer = [num for num in range(2, n+1) if checks[num]]
    print(len(answer))

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n = int(input())
    solution()
