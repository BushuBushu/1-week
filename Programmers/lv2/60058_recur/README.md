# 60058번 괄호변환 

[문제보기](https://programmers.co.kr/learn/courses/30/lessons/60058?language=javascript)

## 설계
### "문제 조건에 맞는 재귀함수 구현하기"
1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
```javascript
if (p === "") return p;
```

2. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
`getCuttingPoint` 함수를 정의하여 u와 v를 분리하는 지점을 구했다. 분리하는 지점은 열린괄호와 닫힌 괄호의 수가 동일해지는 지점으로 했다.
```javascript
  let point = getCuttingPoint(p);
  let u = p.slice(0, point);
  let v = p.slice(point);
```

```javascript
const getCuttingPoint = (string) => {
  let openNum = 0;
  let closeNum = 0;
  const length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] === "(") openNum++;
    else if (string[i] === ")") closeNum++;

    if (openNum === closeNum) return i + 1;
  }

  return -1;
};
```
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
 
```javascript
if (checkCorrectness(u)) {
    return u + solution(v);
  } 
```

```javascript
const checkCorrectness = (string) => {
  let count = 0;
  const length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] === "(") count++;
    else if (string[i] === ")") count--;

    if (count < 0) return false;
  }
  return true;
};
```

4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
- 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
- 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
- ')'를 다시 붙입니다. 
- u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
- 생성된 문자열을 반환합니다.

```javascript
 if (checkCorrectness(u)) {...}
else {
    const _v = "(" + solution(v) + ")";
    const _u = reverse(u.slice(1, u.length - 1));
    return _v + _u;
  }
```

처음에는 `reverse`를 구현하여 괄호를 하나씩 반대로 뒤집었다. 
```javascript
const reverse = (string) => {
  const reversed = [];
  const length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] === "(") reversed.push(")");
    else if (string[i] === ")") reversed.push("(");
  }
  return reversed.join("");
};
```

두 번째는 replace와 정규표현식을 이용하여 괄호를 뒤집어보았다.
```javascript
const _u = u
      .substr(1, u.length - 2)
      .replace(/[\(]|[\)]/g, (a) => (a === ")" ? "(" : ")"));
```

## 새롭게 알게되거나 공유해서 알게된 점
- 요구사항에 따라 재귀함수로 구현하니 뭔가 코드 가독성이 반복문에 비해 좋은 것 같았다. 

## 고생한 점
- 빨리 쓰려고 반복문에 초기화하는 부분 `let i=0`이 아닌 `let i`으로 해서 개고생했다.. 조심하자

- 문자열 u에서 첫 글자와 마지막 문자를  잘라서 괄호를 뒤집어야 하는 경우가 있었다. 처음에 slice를 썼는데 반환되는 것이 없어서 에러가 났었다. slice는 **원본 문자열**에 접근하여 인자에 준 start부터 끝까지 자른다. 따라서 새로 문자열을 반환하지 않는 것이다. slice와 splice 차이점에 대해서 다시 복기할 수 있었다.

- concat.... 새로운 문자열을 반환하는 함수이다. 원본에 문자가 추가되지 않기 때문에 해당 변수에 다시 할당해주어야 된다.. reverse할 때 고생함 ...  

- reverse 함수가 아닌 substr과 정규표현식을 이용해서 괄호를 뒤집을 수 있다는 것을 알게 되었다.
  - substr과 substring의 인자 의미 차이.. 에고 많다
    - substr의 두번째 인자는 자르는 문자열의 길이를 지정한다.
    - substring의 두 번째 인자는 종료 인덱스를 의미한다.
  - replace 인자에는 콜백함수를 줄 수 있다!!!!!!!!! 나에게 정규표현식은 아직 어려웁다 ㅜㅜ..

    > 주어진 regexp 또는 substr에 일치하는 요소를 대체하는 데 사용될 새 하위 문자열을 생성하기 위해 호출되는 함수

    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace