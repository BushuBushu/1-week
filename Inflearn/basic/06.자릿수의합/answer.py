import math
import sys

def digit_sum():
    max_sum, answer = -math.inf, -1
    for num, num_list in nums:
        _sum = sum(num_list)
        if max_sum < _sum:
            max_sum, answer = _sum, num
    print(answer)

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n = int(input())
    nums = list(map(lambda x: [x, map(int, list(x))], input().split()))

    digit_sum()
