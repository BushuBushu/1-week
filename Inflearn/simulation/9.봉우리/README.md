# 10.스도쿠검사

## 설계

### main
1. n 입력 
2. solution 호출 
 ```python
n = int(input())
print(solution(n))
```
   
### solution
    
1. 변수 정의 및 초기화
    - grid : 입력 받은 격자배열에 0으로 둘러쌓은 격자배열을 저장하는 리스트 
    - total : 봉우리 개수
    - moves : 하나의 격자에 대해 상하좌우에 있는 격자의 값을 비교하기 위해 필요한 리스트
    ```python
       grid = getGrid(n)
       total = 0
       moves = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    ```
2. 격자배열 grid 순회하며 봉우리 개수 탐색

 ```python
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
```

### getGrid

```python
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
```

## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
