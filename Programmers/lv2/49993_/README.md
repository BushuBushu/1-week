# 49993번 스킬트리 

[문제보기](https://programmers.co.kr/learn/courses/30/lessons/49993)

## 설계
1. skill tree 재정의
`split()`으로 모든 스킬 트리 문자열 자르고 `filter()`을 통해 skill에 없는 문자는 지운 문자열을 저장한다.

```javascript
const trees = skill_trees.map((tree) => {
  return tree.split("").filter((char) => skill.includes(char));
});
```

2. 모든 tree와 skill 확인하기

```javascript
let count = trees.length;
trees.map((tree) => {
  let isRight = true;
  let index = 0;
  for (let char of tree) {
    if (skill.includes(char)) {
      if (skill[index++] !== char) {
        isRight = false;
        break;
      }
    }
  }
  if (!isRight) count--;
});
```

## 새롭게 알게되거나 공유해서 알게된 점


## 고생한 점
- skill이 주어지는데, tree가 그 skill의 맨 앞 부터가 아닌 부분별로 만족하면 되는 걸로 착각해서 계속 오답이 나왔다. skill을 만족하려면 무적권 순서대로 skill을 만족해야하는 걸 알게되었다. 문제를 꼼꼼히 읽자! 
- 시간복잡도를 줄이고 싶은데 어떻게 하면 될까 고민하다가 정규표현식을 떠올렸는데 어떻게 해야할지 모르겠어서 시도해보았지만 실패했다..
