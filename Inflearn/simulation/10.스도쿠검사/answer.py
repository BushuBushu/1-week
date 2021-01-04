import math
import sys


def checkNums(data):
    return len(set(data)) == 9


def solution():
    cols, sqrs = {}, {}
    for idx in range(9):
        cols[idx], sqrs[idx] = set(), []
    for idx in range(9):
        nums = input().split()
        if not checkNums(nums): return "NO"

        for _idx, num in enumerate(nums):
            cols[_idx].add(num)

        sqrs[0 + 3 * (idx // 3)].extend(nums[:3])
        sqrs[1 + 3 * (idx // 3)].extend(nums[3:6])
        sqrs[2 + 3 * (idx // 3)].extend(nums[6:])

        if idx % 3 == 2:
            for _idx in range(idx - 2, idx + 1):
                if not checkNums(sqrs[_idx]): return "NO"

    for col in cols.values():
        if checkNums(col) != 9: return "NO"

    return "YES"


if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    print(solution())
