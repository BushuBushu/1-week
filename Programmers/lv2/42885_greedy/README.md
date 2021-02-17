# PRG 42885 구명보트

[문제보러가기🚗🚕](https://programmers.co.kr/learn/courses/30/lessons/42885)

```jsx
function solution(people, limit) {
  people.sort((a, b) => a - b); // 그냥 sort하면 2자리 이상일 때 정렬안됨

  let count = 0;
  let l = 0;
  let r = people.length - 1;
  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    count++;
    r--; //최소값과 최댓값이 limit보다 크면 최댓값을 보트태워보낸다
  }
  return count;
}
```

### 🌈 설계 🌈

1. **최대한 2명의 몸무게를 limit에 근접**하도록! **안된다면 2명 중 상대적으로 무거운 사람의 무게가  limit에 근접**할 수 있는 것이 구명보트의 최소개수를 구할 수 있을 것이라 생각했다.

## 🧸 후기 🧸

1. **문제 조건 제대로 읽기**

   처음 문제를 풀 때, `구명보트는 작아서 한번에 최대 2명씩 탈 수 밖에` 라는 조건을 기억하지 못한 채 풀었다. 그래서 하나의 구명보트에 최대한 많은 사람들을 하나의 구명보트에 태워보내는 방식으로 최소 구명보트 개수를 구했었다.

2. **javascript에서 sort함수의 기본 동작방식은 string으로 변환하여 unicode 기준 정렬**

   처음에는 sort함수 인자로 따로 콜백함수를 넘겨주지 않고 기본으로 사용했다. 하지만 숫자가 두 자리 이상이 될 경우 제대로 정렬되지 않는 경우가 있었다. 열심히 인터넷 검색을 해보니 javascript에서 sort함수가 실행되면 정렬되는 대상인 객체 내 각각의 원소를 string으로 변환한다는 것을 알았다.  즉, unicode 기준으로 정렬하기 때문에 두 자리 이상의 숫자들이 제대로 정렬이 되지 않는 것이다. 그래서 콜백함수를 인자로 넘겨주었다.  