import sys

def solution(n, lines):
    answer = -1
    l, r = 1, max(lines)
    while l < r:
        total = 0
        mid = (l + r) // 2
        for line in lines:
            total += (line // mid)

        if total >= n:
            answer = mid
            l = mid + 1
        elif total < n:
            r = mid - 1

    return answer


if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    k, n = map(int, input().split())
    lines = [int(input()) for _ in range(k)]
    print(solution(n, lines))
