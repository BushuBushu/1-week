# 08. 뒤집은소수


## 설계
### main
1. n, nums 입력
    
    input을 공백 단위로 split한 각각의 값에 대하여 map 함수로 isPrime함수를 연결해주었다. 
    
   ```python
    n = int(input())
    nums = map(isPrime, input().split())
    ```

2. solution 호출 

### isPrime
div, _x를 선언해준다. _x는 reverse함수를 이용하여 구한다.
    - _x : x를 뒤집은 값을 저장하는 변수
    - div : _x를 나눌 수 있는 모든 값을 저장하는 리스트

반복문을 통해 _x를 1부터 _x의 제곱근까지 나누어본다. 나눌 때, _x를 d로 나눈 몫과 _x를 d로 나눈 값과 같은지 확인한다.
이 두 값이 같을 경우에 div 리스트에 d와 _x//d를 저장한다. 

_x가 1이 아니고 div 리스트의 길이가 2 이하일 때, string으로 변환된 _x와 True를 반환해준다.

   ```python
def isPrime(x):
    div, _x  = [], reverse(x)
    for d in range(1, math.ceil(_x**0.5)+1):
        if _x//d == _x/d:
            div.append(d)
            div.append(_x//d)
    if _x != 1 and len(div) <= 2:
        return (str(_x), True)
    return (str(_x), False)
   ```
    
### reverse
reversed함수를 이용하여 문자열 x를 뒤집어 reversed_x에 저장한다. ex) 123 → [1, 2, 3]
join함수로 reversed_x를 붙여 int로 casting하여 반환한다. 

 ```python
def reverse(x):
    reversed_x = reversed(x)
    return int(''.join(reversed_x))
 ```


### solution
반복문을 통해 nums을 순회하면서 소수인지 확인 후 answer 리스트에 추가한다.
    
```python
def solution():
    answer = []
    for num, check in nums:
        if check:
            answer.append(num)
    print(' '.join(answer))
```
  
  
## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
