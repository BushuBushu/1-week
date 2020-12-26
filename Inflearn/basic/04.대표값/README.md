# 04. 대표값


## 설계
### main
1. n, nums 입력
2. solution 호출 

### solution
1. nums 리스트에 대한 평균 구하기
    ```python
    avg = round(sum(nums)/len(nums))
    ```
2. nums 리스트 요소와 평균과 차이
    - diffs : nums 리스트 각 요소와 평균과 차이 저장
        - idx : num 의 인덱스 번호
        - num : num 값
        - diff : 평균과 num의 차이값
    
    ```python
    diffs = []
        for idx, num in enumerate(nums):
            diffs.append([idx, num, abs(avg-num)])
    ```
3. 평균과 가장 가까운 수 구하기
    
    최소 차이값,  최대 숫자(num)값, 최종답이 되는 인덱스 번호에 대한 변수 min_diff, max_num, answer를 따로 두었다.
    
    반복문을 통해 diffs 리스트를에 순차적으로 접근한다. 
    - min_diff보다 diff가 작을 경우
        
        현재 diff를 min_diff에 저장한다. 현재 num을 max_num에 저장한다. 현재 인덱스 번호를 answer에 저장한다.
    
    - min_diff보다 diff가 같을 경우
        - 현재 숫자(num)가 max_num보다 클 때
        
            현재 num을 max_num에 저장한다. 현재 인덱스 번호를 answer에 저장한다.
        ```python
          min_diff, max_num, answer   = math.inf, -math.inf, -1
          for idx, num, diff in diffs:
              if diff < min_diff:
                  min_diff, max_num, answer = diff, num, idx
              elif diff == min_diff:
                  if max_num < num:
                      max_num, answer = num, idx
        ```

4. 평균과 평균과 가까운 수 출력
    ```python
       print(f'{avg} {answer+1}')
    ```

## 새롭게 알게되거나 공유해서 알게된 점

### round_half_even vs round_half_up
- round_half_even
    
    소수점 아래를 버리고 짝수
  
    <b>Python에서 제공하는 기본함수 round()는 round_half_even을 따른다.</b>
    하지만 일반적으로 알고 있는 반올림은 0.5이상일 때 올림을 하고 0.5미만일 때 버림을 하는 것이다.
    이와 같은 방식을 round_half_up이라 부른다. 
    즉, 일반적인 상식과 같은 방향으로 동작하게 하기위해서는 round()를 쓰면 안되고 다른 방식을 써야 한다.
    
- round_half_up

    소수점 0.5 이상일 때 올림, 소수점 0.5 미만일 때 버림

    해결방식   
   ```python
    result = int(num/d + 0.5)
    ```
## 고생한 점
