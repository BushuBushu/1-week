# 17676번 추석 트래픽

[문제보기](https://programmers.co.kr/learn/courses/30/lessons/17676)

## 설계
1. timeStamps 구하기: 스트링 파싱

걸린시간을 이용하여 시작 시간을 구하기 위해 `getTimestamps()` 함수를 정의하였다. 모든 시간 단위는 최소 단위인 `ms`로 바꾸었다.
배열 `timestamps`에 로그 한 개당 시작 시간과 끝나는 시간을 push하였다.

```javascript
function getTimestamps(lines) {
  const timestamps = [];
  lines.map((line) => {
    const [_, time, duration] = line.split(" ");

    _time = time.split(":");
    hour = parseInt(_time[0]) * 1000;
    min = parseInt(_time[1]) * 1000;
    sec = parseFloat(_time[2]) * 1000;
    mil = hour * 3600 + min * 60 + sec;

    _duration = parseFloat(duration.substr(0, duration.length - 1)) * 1000;

    // [시작, 종료]
    timestamps.push([mil - _duration + 1, mil]);
  });
  return timestamps;
}
```

2. 시작시간 기준 정렬하기 

```javascript
timestamps.sort((a, b) => (a[0] < b[0] ? -1 : 1));
```

3. 정렬된 timestamps 순회
시작 시간과 끝나는 시간이 있는 배열 `timestamps`에서 초당 최대 처리량이 가장 많을 경우는 시작 시간은 로그들의 시작 혹은 끝 중에 있다.

초씩 건너뛰며 검사하는 것은 많은 시간이 걸리기 때문에 더 효율적인 방법인 시작초와 끝초만을 검사한다.

```javascript
timestamps.forEach((timestamp) => {
  let count1 = check(timestamp[0], timestamps);
  let count2 = check(timestamp[1], timestamps);

  counts.push(count1);
  counts.push(count2);
});
```

반복문으로 순회하며 다음의 조건에 해당하면 count를 1 증가시킨다. 
  - 시작점이 범위에 포함
  - 끝점이 범위에 포함
  - 시작점과 끝점사이가 범위에 포함

```javascript
function check(time, timestamps) {
  let count = 0;
  let start = time;
  let end = time + 1000;

  for (let timestamp of timestamps) {
    const [_start, _end] = timestamp;


    if (
      (_start >= start && _start < end) ||
      (_end >= start && _end < end) ||
      (_start <= start && _end >= end)
    ) {
      ++count;
    }
  }
  return count;
}
```

4. 초당 최대 처리량이 가장 많을 경우 찾기
```javascript
 const max = counts.reduce(function (previous, current) {
    return previous > current ? previous : current;
  });

```

## 새롭게 알게되거나 공유해서 알게된 점
- 배열에서 최대값 찾는 함수
  - Math.max.apply()
  [더 알아보기](https://programmingsummaries.tistory.com/108)


## 고생한 점
- string 파싱하는게 힘들었다. datetime 객체를 쓰는 연습을 해야겠다.
