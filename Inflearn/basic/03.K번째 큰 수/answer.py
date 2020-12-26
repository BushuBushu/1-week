import sys

def solution():
    num = list(map(int, input().split()))
    num.sort()
    print(sum(num[-2:]) + num[-(2 + k)])

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n, k = map(int,input().split())
    solution()
    # main()
