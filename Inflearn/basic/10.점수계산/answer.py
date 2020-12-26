import sys


def solution():
    sum_score = 0
    for score in scores:
        sum_score += sum(range(1, len(score)+1))
    print(sum_score)


if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n = int(input())
    print(input().replace(" ", "").split("0"))
    # scores = list(filter(None, input().replace(" ", "").split("0")))
    # solution()
