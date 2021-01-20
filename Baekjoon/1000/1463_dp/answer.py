import sys

def solution(n):
    count = [0 for _ in range(n+1)]

    for idx in range(2, n+1):
        count[idx] = count[idx-1] + 1

        if idx % 2 == 0:
            count[idx] = min(count[idx], count[idx // 2] + 1)

        if idx % 3 == 0:
            count[idx] = min(count[idx], count[idx // 3] + 1)
    return count[n]

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    print(solution(int(input())))

