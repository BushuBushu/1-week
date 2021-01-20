import math
import sys


def checkNums(data):
    return len(set(data)) == 9


def solution():
    cols, sqrs = {}, {}
    for idx in range(9):
        cols[idx], sqrs[idx] = set(), []
    for idx in range(9):
        row = input().split()
        if not checkNums(row): return "NO"

        for _idx, num in enumerate(row):
            cols[_idx].add(num)

        sqrs[0 + 3 * (idx // 3)].extend(row[:3])
        sqrs[1 + 3 * (idx // 3)].extend(row[3:6])
        sqrs[2 + 3 * (idx // 3)].extend(row[6:])

        if idx % 3 == 2:
            for _idx in range(idx - 2, idx + 1):
                if not checkNums(sqrs[_idx]): return "NO"

    for col in cols.values():
        if not checkNums(col): return "NO"

    return "YES"


if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    print(solution())
