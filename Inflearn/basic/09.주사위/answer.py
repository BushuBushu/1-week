import math
import sys

def getPrize(nums):
    _nums = set(nums)
    _nums_list = list(_nums)
    if len(_nums) == 1:
        return 10000 + _nums_list[0] * 1000
    elif len(_nums) == 2:
        dup, check = -1, []
        while nums:
            num = nums.pop()
            if num in check:
                dup = num
                break
            check.append(num)
        return 1000 + dup * 100
    elif len(_nums) == 3:
        return max(_nums_list) * 100


def solution():
    max_prize = -math.inf
    for _ in range(n):
        prize = getPrize(list(map(int, input().split())))
        if prize > max_prize:
            max_prize = prize
    print(max_prize)

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n = int(input())
    solution()
