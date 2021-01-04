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

"5킬로그램 봉지를 최대로 들고가는게 좋다!"
 ↓
"들고가야하는 `N 킬로그램 설탕 무게`에 근접하는 `5킬로그램 봉지 개수`를 구하는 게 좋겠다!"

1. three, five, rem 변수 정의 및 초기화
    - three : 3킬로그램 봉지 개수
    - five : 5킬로그램 봉지 개수
    - rem : 총 들고가야하는 n 킬로그램 설탕 무게에 대해 5로 나누었을 때 나머지

`변수 five`의 초기값으로 `n 킬로그램 설탕 무게`를 5로 나누었을 때 몫을 저장하였다. 
이는 n 킬로그램에 가장 근접한 5킬로그램짜리 봉지 개수를 구한 것이다. 

2. `3*three + 5*five = 최솟값`을 충족하는 three, five 구하기
    
    n을 5로 나눈 몫 `five`를 1씩 줄여 n을 5로 나눈 나머지 `변수 rem`의 값이 3으로 나누어떨이질 경우를 구한다.
    
```python
def solution(n):
    three, five = 0, n//5
    rem = n % 5
   
    while five >= 0:
        if rem % 3 == 0:
            three = rem//3
            rem %= 3
            break
        rem += 5
        five -= 1

    if rem == 0:
        return three+five
    return -1
```

## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
