import sys
import math


def solution(idx):
    _, s, e, k = map(int, input().split())
    num = list(map(int, input().split()))
    cut_num = num[s - 1:e]
    cut_num.sort()
    print(f'#{idx} {cut_num[k-1]}')


if __name__ == "__main__":
    sys.stdin = open("data/in1.txt", "rt")
    tcs = int(input())
    for idx in range(1, tcs+1):
        solution(idx)