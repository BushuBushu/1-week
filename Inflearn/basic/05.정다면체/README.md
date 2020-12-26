# 05.정다면체


## 설계
### main
1. n, m 입력
    ```python
     n, m = map(int, input().split())
    ```
2. 이중반복문 outer, inner 미리 정하기
    ```python
   outer, inner = [n+1, m+1] if n > m else [m+1, n+1]
    ```
3. solution 호출 

### solution
1. n각형, m각형 주사위를 던졌을 때 나오는 숫자들의 합에 대한 횟수 구하기
    - sums : 두 주사위의 숫자에 대한 합의 횟수를 저장하는 리스트
    ```python
   sums = {}
    for num1 in range(1, outer):
        for num2 in range(1, inner):
            sum = num1 + num2
            if sum not in sums.keys():
                sums[sum] = 1
                continue
            sums[sum] += 1
    ```
2. 가장 많이 나온 두 눈의 합 구하기 
    - candidates : 가장 많이 나온 합을 저장하는 리스트
    - max_cnt: 현재까지 가장 많이 나온 합에 대한 최대 횟수를 저장하는 변수
    ```python
   candidates, max_cnt = [], -math.inf
    for num, cnt in sums.items():
        if max_cnt < cnt:
            max_cnt = cnt
            candidates = []
            candidates.append(num)
        elif max_cnt == cnt:
            candidates.append(num)
    ```
3. 나올 가능성이 가장 높은 합 출력
    ```python
       print(' '.join(map(str, candidates)))
    ```

## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
