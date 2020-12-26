import math
import sys


def reverse(x):
    reversed_x = reversed(x)
    return int(''.join(reversed_x))


def isPrime(x):
    div, _x  = [], reverse(x)
    for d in range(1, math.ceil(_x**0.5)+1):
        if _x//d == _x/d:
            div.append(d)
            div.append(_x//d)
    if _x != 1 and len(div) <= 2:
        return (str(_x), True)
    return (str(_x), False)


def solution():
    answer = []
    for num, check in nums:
        if check:
            answer.append(num)
    print(' '.join(answer))


if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n = int(input())
    nums = map(isPrime, input().split())
    solution()
