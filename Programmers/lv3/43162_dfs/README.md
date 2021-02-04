# 60058번 네트워크

[문제보기](https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript)

## 설계
- count : 네트워크 개수를 세는 변수
- visited : 해당 노드를 방문했는지 확인하는 배열

```javascript
let count = 0;
const visited = Array(n)
  .fill()
  .map(() => false);
```

### N개의 모든 노드에 대해서 깊이우선탐색 시작
첫 번째 노드부터 그 노드에 연결되어있는 노드를 확인하기 위해 깊이우선탐색을 한다. **`visited` 배열로 앞서 확인한 노드의 네트워크에 속했는지 아닌지**를 확인한다. 

```javascript
for (let i = 0; i < n; ++i) {
  if (!visited[i]) {
    visited[i] = true;
    ++count;
    dfs(i);
  }
}
```

### 시작노드에서 연결되어있는 모든 노드 탐색
문제에서 주어진 2차원 배열`computers`은 노드들에 대한 인접행렬이다. `computers`의 [노드]번째 행을 보면 해당 노드에 다른 노드들이 연결되어 있는지 확인할 수 있다. 다른 노드들의 존재 유무는 0과 1로 표현되어 있다. 즉, `computers[node][other]`이 1일 때 해당 노드와 다른 노드가 연결되어 있다는 것이다.  

```javascript
function dfs(node) {
  for (let other = 0; other < n; ++other) {
    if (node === other) continue;
    if (computers[node][other] && !visited[other]) {
      visited[other] = true;
      dfs(other);
    }
  }
}
```

## 새롭게 알게되거나 공유해서 알게된 점
- 자바스크립트에서 함수는 객체
새로운 함수를 만들어서 사용할 때, `solution()` 영역밖에서 선언해서 사용했었다. 하지만 그럴 필요가 없다. 그래서 `dfs()` 함수를 `solution()` 안에 선언해서 사용해보았다. 이론적으로 공부했지만 막상 적용할 때 그만큼 생각하기 힘든 것 같다. 

## 고생한 점
- `Array().fill()`을 이용하여 n 길이만큼 배열 visited를 false로 초기화했었다. 하지만 `fill()`함수가 불안정(?)하여 Array에서 특정 원소의 값을 바꿀 때 모든 원소의 값이 바뀌는 불상사가 일어났다. 이는 fill로 채워질 때 모든 원소에 대한 레퍼런스가 동일하기 때문에 발생하는 거라고 한다. 그래서 `map()`를 추가적으로 이용하여 초기화해주었다.
