# 1463번 1로 만들기
[문제 보러가기](https://www.acmicpc.net/problem/1463)

## 설계

"dp! n에서 1로 가야한다면, 반대로 1에서 n으로 가보자!"

"연산은 반대로 생각해보자!"

### main
1. solution 인자로 n 만큼 입력
2. solution 호출 
```python
print(solution(int(input())))
```

### solution
count 리스트는 0이 아니라 1로 시작하는 것으로 했다. 즉, 사용자가  5를 입력했다면, count는 `[0, 0, 0, 0, 0, 0]`로 총 길이는 6이다.

첫 번째 셀 경우인 `count[1]`은 아무 연산이 적용되지 않은 초기값이기 때문에 무조건 0이다. 따라서 반복문이 2부터 n까지 순회하도록 였다.

반복문에서,
 - 1을 뺏을 경우, 이전 연산횟수 `count[idx-1]`에서 1 증가시킨다.
 - 현재 값(현재 인덱스) `idx`가 2로 나누어지면, 1을 뺀 연산횟수`count[idx]`와 
 2로 나눈 몫에 대한 누적합에 1을 더한 `count[idx // 2] + 1` 비교 후, 최대값을 현재 값에 대한 누적합으로 저장
 - 현재 값(현재 인덱스) `idx`가 3으로 나누어지면, 1을 뺀 연산횟수`count[idx]`와 
 3으로 나눈 몫에 대한 누적합에 1을 더한 `count[idx // 3] + 1` 비교 후, 최대값을 현재 값에 대한 누적합으로 저장

```python
def solution(n):
    count = [0 for _ in range(n+1)]

    for idx in range(2, n+1):
        count[idx] = count[idx-1] + 1

        if idx % 2 == 0:
            count[idx] = min(count[idx], count[idx // 2] + 1)

        if idx % 3 == 0:
            count[idx] = min(count[idx], count[idx // 3] + 1)
    return count[n]
```

## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
