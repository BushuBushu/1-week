# 07. 소수

## 설계
### main
1. n 입력
    ```python
     n = int(input())
    ```

2. solution 호출 

### solution
 1. 소수인지 확인할 수 있는 리스트 생성
  
    인덱스는 0번부터 시작하니까 n+1을 해준다. 
     ```python
    checks = [True] * (n+1)
    ```
  
 2. 소수인지 아닌지 확인
    
    반복문을 통해 checks 리스트의 2번째부터 n의 제곱근번째까지 확인한다. 이 때 각 수(num)의 배수에 대해서 False 처리해준다.
     
    - `math.ceil(n ** 0.5)+1`으로 시간복잡도를 줄였다.
    - `range(num*2, n+1, num)`으로 num은 제외하고 num의 2번째 배수부터 False가 될 수 있도록 하였다.
        
    ```python
     for num in range(2, math.ceil(n ** 0.5)+1):
        if checks[num]:
            for mul in range(num*2, n+1, num):
                checks[mul] = False
    ```
  
  3. 소수 찾기
   
   반복문을 통해 check 리스트의 2번째부터 n번째 사이에 있는 값이 True인 것만 리스트에 저장한다.
  
    ```python
    answer = [num for num in range(2, n+1) if checks[num]]
    ```
  
## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
