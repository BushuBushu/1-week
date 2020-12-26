# 10. 점수계산


## 설계
### main
1. n, scores 입력
    
    ```python
    n = int(input())
    scores = list(filter(None, input().replace(" ", "").split("0")))
    ```

    우선, O/X점수에 대한 사용자 입력값(input)에 대해서 공백을 지워준다. 그 다음 '0'을 기준으로 문자열을 잘라 리스트로 만든다. filter로 빈문자열을 제거한다.

    > (ex) 
    > 사용자 입력: 1 0 1 1 1 0 0 1 1 0
    > 공백처리: 1011100110
    > '0'으로 분리: ['1', '111', '', '11', '']
    > filter로 빈문자열 제거: ['1', '111', '11']

2. solution 호출 



### solution
range함수를 이용하여 1부터 scores 배열의 각 요소의 길이까지 수열을 만든다. 해당 수열에 대한 sum을 구하여 sum_score에 누적한다.
    
```python
def solution():
    sum_score = 0
    for score in scores:
        sum_score += sum(range(1, len(score)+1))
    print(sum_score)
```
  
  
## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
