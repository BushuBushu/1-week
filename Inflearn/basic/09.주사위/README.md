# 08. 뒤집은소수


## 설계
### main
1. n 입력
- n : 주사위 게임 시행 횟수

2. solution 호출 

### solution
```python
def solution():
    max_prize = -math.inf
    for _ in range(n):
        prize = getPrize(list(map(int, input().split())))
        if prize > max_prize:
            max_prize = prize
    print(max_prize)
```
반복문을 통해 게임시행 횟수(n)만큼 순회하면서 3개의 주사위에서 나온 눈의 수를 이용하여 상금을 구한다. 소수인지 확인 후 answer 리스트에 추가한다.

현재 구한 상금이 최대 상금보다 큰지 확인해서 최대 상금을 업데이트한다.
    


### getPrize
```python
def getPrize(nums):
    _nums = set(nums)
    _nums_list = list(_nums)
    if len(_nums) == 1:
        return 10000 + _nums_list[0] * 1000
    elif len(_nums) == 2:
        dup, check = -1, []
        while nums:
            num = nums.pop()
            if num in check:
                dup = num
                break
            check.append(num)
        return 1000 + dup * 100
    elif len(_nums) == 3:
        return max(_nums_list) * 100
```

set을 이용해서 3개의 주사위를 던져서 나온 눈의 수(nums)에 대한 중복 값을 제거해보았다.

- nums : 3개의 주사위에서 나온 눈의 수를 저장한 리스트
- _nums: nums 리스트에서 중복을 제외한 수를 저장한 집합(set)
- _nums_list: _nums 집합에 대한 리스트

_nums 리스트의 길이가 1인 경우, 3개 주사위에서 모두 같은 눈의 수가 나온 것이다. 그러므로 상금은 `10000 + _nums_list[0] * 1000`이 된다.
    - _nums는 자료형이 set이기 때문에 indexing을 이용하기 위해 _nums_list를 이용하였다.

_nums 리스트의 길이가 2인 경우, 2개 주사위에서 같은 눈의 수가 나온 것이다. 상금을 계산하기 위해서, 2번 중복된 눈의 수를 구해야 한다. 여기서 `리스트의 내장 함수 pop()` , `check 리스트` 를 이용하여 중복된 눈의 수 `dup`을 구했다.

```python
dup, check = -1, []
while nums:
    num = nums.pop()
    if num in check:
        dup = num
        break
    check.append(num)
```

_nums 리스트의 길이가 3인 경우, 3개 주사위에서 같은 눈의 수가 각각 다른 것이다. `내장함수 max()`으로 _nums_list의 최대값를 구하고 상금을 계산하였다.

  
  
## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
