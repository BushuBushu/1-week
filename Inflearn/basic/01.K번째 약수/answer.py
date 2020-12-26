import sys
import math


def solution(n, k):
    divisors = []
    for d in range(1, math.ceil(n ** 0.5)):
        divisors.append(d)
        divisors.append(n // d)
    divisors.sort()
    if k > len(divisors):
        print(-1)
        return
    print(divisors[k - 1])



if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n, k = map(int, input().split())
    solution(n, k)
