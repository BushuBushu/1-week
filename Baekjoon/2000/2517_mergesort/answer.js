const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `8
2
8
10
7
1
9
4
15
`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numOfRunner) {
  let runner = [];
  let sorted = [];
  let rank = [];
  for (let i = 1; i <= numOfRunner; i++) {
    runner[i] = new Runner(i, +input());
    rank[i] = i;
  }

  const merge = (left, mid, right) => {
    let start1 = left;
    let start2 = mid + 1;
    let index = left;

    while (start1 <= mid && start2 <= right) {
      // 왼쪽 배열에 있는 선수가 오른쪽 배열에 있는 선수보다 달리기 속도가 빠를 때
      if (runner[start1].speed > runner[start2].speed) {
        sorted[index++] = runner[start1++];
        continue;
      }
      sorted[index++] = runner[start2];
      // ** 핵심
      // 오른쪽 배열에 있는 선수가 왼쪽 배열에 있는 선수보다 달리기 속도가 빠를 때
      // start1 ... end1/ start2 ... end2
      // 현재 start2에 있는 선수의 달리기 실력이 더 빠르기 때문에 앞지를 수 있다.
      // 병합될 때 현재 위치, index와 start2에 있는 선수가 달리고 있는 기존 위치를 비교한다.
      // start2에 있는 선수는 기존 위치(start2)에서 index만큼 뺀 값만큼 왼쪽으로 움직일 수 있다.
      // 즉, start2에 있는 선수의 등수가 올라간다(5=>1)
      rank[runner[start2++].index] -= start2 - index;
    }

    while (start1 <= mid) {
      sorted[index++] = runner[start1++];
    }
    while (start2 <= right) {
      sorted[index++] = runner[start2++];
    }
    for (let i = left; i <= right; i++) {
      runner[i] = sorted[i];
    }
  };
  const mergeSort = (left, right) => {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    mergeSort(left, mid);
    mergeSort(mid + 1, right);
    merge(left, mid, right);
  };

  mergeSort(1, numOfRunner);

  return rank.slice(1);
}

class Runner {
  constructor(index, speed) {
    this.index = index;
    this.speed = speed;
  }
}

const answer = solution(+input());
console.log(answer.join("\n"));
