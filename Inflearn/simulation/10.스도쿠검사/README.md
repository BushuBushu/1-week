# 10.스도쿠검사

## 설계

### main
1.  solution 호출 

### solution
1. 변수 정의 및 초기화
    - row : 격자배열에 대한 행에 대한 정보를 저장하는 리스트
    - cols : 격자배열에 대한 열에 대한 정보를 저장하는 딕셔너리
    - sqrs : 격자배열에 대한 `3*3` 사각형(격자)에 대한 정보를 저장하는 딕셔너리
    ```python
    cols, sqrs = {}, {}
    for idx in range(9):
        cols[idx], sqrs[idx] = set(), []
    for idx in range(9):
        nums = input().split()
    ```
2. 1개 행에 대한 체크
    ```python
    for idx in range(9):
        row = input().split()
        if not checkNums(row): return "NO"
    ```
3. 9개 열에 대한 정보 업데이트 
   ```python
   for _idx, num in enumerate(row):
       cols[_idx].add(num)
   ```

4. 3*3 격자에 대한 정보 업데이트
    ```python
   sqrs[0 + 3 * (idx // 3)].extend(row[:3])
   sqrs[1 + 3 * (idx // 3)].extend(row[3:6])
   sqrs[2 + 3 * (idx // 3)].extend(row[6:])
   
   if idx % 3 == 2:
       for _idx in range(idx - 2, idx + 1):
           if not checkNums(sqrs[_idx]): return "NO"
   ```

5. 열에 대한 체크
    ```python
    for col in cols.values():
        if not checkNums(col): return "NO"
    ```

### checkNums
리스트에 대한 중복을 제거하고 다시 리스트화 하여
```python
def checkNums(data):
    return len(set(data)) == 9
```

## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
