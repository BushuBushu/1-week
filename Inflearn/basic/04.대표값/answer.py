import sys
import math

def solution():
    avg = round(sum(nums)/len(nums))
    diffs = []
    for idx, num in enumerate(nums):
        diffs.append([idx, num, abs(avg-num)])
    min_diff, max_num, answer   = math.inf, -math.inf, -1
    for idx, num, diff in diffs:
        if diff < min_diff:
            min_diff, max_num, answer = diff, num, idx
        elif diff == min_diff:
            if max_num < num:
                max_num, answer = num, idx

    print(f'{avg} {answer+1}')

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n = int(input())
    nums = list(map(int, input().split()))
    solution()
    # main()
