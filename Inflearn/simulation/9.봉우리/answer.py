import sys
from queue import Queue

def getGrid(n):
    grid = []
    grid.append([0 for _ in range(n + 2)])
    for _ in range(5):
        num = [0]
        num.extend(map(int, input().split()))
        num.append(0)
        grid.append(num)
    grid.append([0 for _ in range(n + 2)])
    return grid

def solution(n):
    grid = getGrid(n)
    total = 0
    moves = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    for row in range(1, n+1):
        for col in range(1, n+1):
            isPeak = True
            for dx, dy in moves:
                new_row = row + dx
                new_col = col + dy
                if grid[row][col] <= grid[new_row][new_col]:
                    isPeak = False
                    break
            if isPeak:
                total += 1
    return total

if __name__ == "__main__":
    sys.stdin = open("data/data.txt", "rt")
    n = int(input())
    print(solution(n))
