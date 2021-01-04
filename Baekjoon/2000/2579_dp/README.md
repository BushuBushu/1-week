# 2579번 계단오르기
[문제 보러가기](https://www.acmicpc.net/problem/2579)

## 설계
### main
1. n 입력
    ```python
   n = int(input())
    ```
2. 계단에 대한 점수 정보를 저장하는 `리스트 stairs` 선언 및 초기화 
    ```python
   stairs = [0]
    for _ in range(1, n+1):
        stairs.append(int(input()))
    ```
3. solution 호출 

### solution
1. 계단에 대한 누척점수(총점수)를 저장하는 `리스트 scores` 생성
2. 계단개수 n에 대한 조건 분기
    
    계단 개수 n이 1개일 경우, 2개일 경우, 3개일 경우, 4개 이상일 때를 나눈다.

    만약 해당 조건문들이 없으면, 계단개수와 점수를 저장하는 계단 리스트(stairs)에 대한 접근에서 꼬여 런타임에러가 날 수 있다.   

    계단 개수 n이 4개 이상일 때, `하나 직전 계단 점수`와 `두 개전 계단까지 더한 총점` 각각을 현재 계단 점수에 더한다. 
    하나 직전계단까지 더한 총점을 계산할 때 주의할 점이 있다. 세 개의 계단을 연속으로 밟을 수 없기 때문에 직전 계단의 총점이 아닌
    `세 개 계단 전 총점`에 직전 계단과 현재 계단의 점수를 더한다
    
    두 개의 값 중 큰 값을 현재 계단에 대한 총점으로 기록한다.  
    
 ```python
def solution(n, stairs):
    scores = [0, ]
    if n >= 1:
        scores.append(stairs[1])
    if n >= 2:
        scores.append(stairs[1] + stairs[2])
    if n >= 3:
        scores.append(max(stairs[1] + stairs[3], stairs[2] + stairs[3]))
    if n >= 4:
        for idx in range(4, n+1):
            scores.append(max(scores[idx-3] + stairs[idx-1] + stairs[idx], scores[idx-2] + stairs[idx]))
    return scores.pop()
```


## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
