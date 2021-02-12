# 42883번 큰수만들기

[문제보기](https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript)

## 설계

```javascript
function solution(number, k) {
  const stack = [];
  for (let num of number) {
    while (k > 0 && stack.slice(-1)[0] < num) {
      stack.pop(); //현재 number가 stack 위에있는 숫자보다 작으므로 stack에서 제거
      k--; // k는 제거해야하는 횟수; 제거 1회했으므로 1 감소 
    }
    stack.push(num);
  }

  return stack.join("").substr(0, number.length - k);
}
```
## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
첫 시도에서는 뽑을 수 있는 모든 숫자 조합을 구해서 최대값을 구하는 방식으로 제출했었다. 에러도 나서 해결을 하려고 했었고 해결을 했더니 시간초과가 났었다.

두 번째 방법에서는 처음에 `0` 부터 `전체길이 - k` 까지의 원소 중에서 최댓값을 구하고, 그 다음에는 구했던 최댓값의 다음 인덱스부터 `전체길이 - k +1` 까지 원소 중에서 최댓값을 구하는 방식으로 진행했었다. 왜 때문인지 한 개?의 케이스에서 시간초과가 나서 다시 바꾸어 이 방식으로 진행하였다.