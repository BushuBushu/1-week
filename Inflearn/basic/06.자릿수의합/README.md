# 06. 자릿수의합


## 설계
### main
1. n 입력
    ```python
     n = int(input())
    ```
2. n개의 숫자 입력
    
    🎅 lambda를 사용하여 숫자를 문자열로 입력받고 ` map(int, list(x))`로 각 숫자가 자릿 수마다 분리되도록 하였다.
    ```python
   nums = list(map(lambda x: [x, map(int, list(x))], input().split()))
   
   # 출력(실제): [['125', <map object at 0x00000184CE83FA58>], ['15232', <map object at 0x00000184CE83FD30>], ['97', <map object at 0x00000184CE55B080>]]
   # 출력(보기 쉽게): [['125', [1, 2, 5]], ['15232', [1, 5, 2, 3, 2]], ['97', [9, 7]]]
    ```
3. digit_sum 호출 

### digit_sum
반복문을 통해 nums 리스트를 순회하면서 각 자릿수에 대한 합을 구한다. 그리고 그 합이 max_sum을 비교했을 때 크면 max_sum과 answer를 업데이트해준다.
    - sums : 두 주사위의 숫자에 대한 합의 횟수를 저장하는 리스트
 ```python
max_sum, answer = -math.inf, -1
for num, num_list in nums:
    _sum = sum(num_list)
    if max_sum < _sum:
         max_sum, answer = _sum, num
print(answer)
```

## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
