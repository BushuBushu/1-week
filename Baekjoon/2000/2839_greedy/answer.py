import math
import sys

def solution(n):
    three, five = 0, n//5
    rem = n % 5

    while five >= 0:
        if rem % 3 == 0:
            three = rem//3
            rem %= 3
            break
        rem += 5
        five -= 1

    if rem == 0:
        return three+five
    return -1

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    print(solution(int(input())))
