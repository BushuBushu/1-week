import sys


def solution(n, m, nums):
    answer = -1
    _nums = sorted(nums)
    l, r = 0, n
    while l <= r:
        mid = (l + r) // 2
        print(mid, _nums[mid], m, len(_nums), _nums, )
        if _nums[mid] == m:
            answer = mid
            break
        if _nums[mid] > m:
            r = mid - 1
        elif _nums[mid] < m:
            l = mid + 1
    return answer + 1


if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n, m = map(int, input().split())
    nums = map(int, input().split())
    print(solution(n, m, nums))
