# 11.격자판회문수

## 설계

### main
1.  solution 호출 

### solution
1. 변수 정의 및 초기화
    - total : 격자배열에서 찾은 총 회문수
    - cols : 격자배열에 대한 열에 대한 정보를 저장하는 딕셔너리

    ```python
    total, cols = 0, {}
    for idx in range(7):
        cols[idx] = []
    ``` 
2. 7번 순회하여 1개의 행에 대한 회문을 구하고, 각 7개 열에 대한 정보를 업데이트한다.
    ```python
    for idx in range(7):
        row = input().strip().split()
        total += getCircular(row)
        for _idx, num in enumerate(row): cols[_idx].append(num)
    ```
3. 7번 순회하여 1개의 열에 대한 회문을 구한다.
    ```python
    for col in cols.values():total += getCircular(col)
    ```

### getCircular
길이가 7인 `리스트 nums`에서 길이가 5인 회문을 찾는다.

`리스트 nums`에서 회문의 시작 인덱스는 0, 1, 2가 된다. 

```python
def getCircular(nums):
    cnt = 0
    for idx in range(3):
        _slice = nums[idx : idx+5]
        if _slice[0] == _slice[4] and _slice[1] == _slice[3]:
            cnt += 1
    return cnt
```
## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
