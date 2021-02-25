# PRG 42842 카펫

[문제보러가기🚗🚕](https://programmers.co.kr/learn/courses/30/lessons/42842)

```jsx
function solution(brown, yellow) {
  let sqr = new Set();
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) sqr.add([i, yellow / i]);
  }
  for (let [h, w] of sqr) {
    if (w * 2 + h * 2 + 4 === brown) return [w + 2, h + 2];
  }
}
```

### 🌈 설계 🌈

1. 노란색 직사각형의 세로, 가로는 주어진 yellow의 약수들로 이루어진다. yellow의 최댓값이 **200만**이기 때문에 전탐색을 하는 것보다 **yellow의 제곱근까지** 반복하여 해당 숫자로 나누어 떨어지는 약수를 하나의 쌍으로 sqr에 저장하였다. 
2. 카페의 **가로길이는 세로길이와 같거나 더 길기** 때문에  h, w 순으로 하여 구조분해하였다. 현재 노란색 직사각형의 세로, 가로길이로 구한 갈색 칸이 같은지 확인했다. 서로 같을 경우에 노란색 세로와 길이에 **각 꼭짓점을 붙여주기 위해 +2**해주었다.