import math
import sys

def getCircular(nums):
    cnt = 0
    for idx in range(3):
        _slice = nums[idx : idx+5]
        if _slice[0] == _slice[4] and _slice[1] == _slice[3]:
            cnt += 1
    return cnt

def solution():
    total, cols = 0, {}
    for idx in range(7):
        cols[idx] = []

    for idx in range(7):
        row = input().strip().split()

        total += getCircular(row)

        for _idx, num in enumerate(row):
            cols[_idx].append(num)

    for col in cols.values():
        total += getCircular(col)
    return total

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    print(solution())
