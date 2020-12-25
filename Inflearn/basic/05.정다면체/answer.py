import math
import sys

def solution():
    sums = {}
    for num1 in range(1, outer):
        for num2 in range(1, inner):
            sum = num1 + num2
            if sum not in sums.keys():
                sums[sum] = 1
                continue
            sums[sum] += 1
    candidates, max_cnt = [], -math.inf
    for num, cnt in sums.items():
        if max_cnt < cnt:
            max_cnt = cnt
            candidates = []
            candidates.append(num)
        elif max_cnt == cnt:
            candidates.append(num)
    print(' '.join(map(str, candidates)))

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n, m = map(int, input().split())
    outer, inner = [n+1, m+1] if n > m else [m+1, n+1]
    solution()
