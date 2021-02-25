function solution(N, number) {
  if (N === number) return 1;

  const groups = getGroups(N);
  const cases = getCases();

  for (let i = 1; i < 8; i++) {
    for (let j = 0; j < cases[i].length; j++) {
      const [c1, c2] = cases[i][j];
      groups[i] = new Set([
        ...groups[i],
        ...getCombination(groups[c1 - 1], groups[c2 - 1]),
      ]);
      groups[i] = [...groups[i]];
      if (groups[i].includes(number)) {
        return i + 1;
      }
    }
  }
  return -1;
}

// getGroups() : 숫자 N을 사용한 회수에 따라 1에서 8까지 나눈 그룹 초기화
const getGroups = (N) =>
  Array(8)
    .fill(null)
    .map((_, idx) => {
      return [+String(N).repeat(idx + 1)];
    });

// getCases() : 8개 그룹에 대한 숫자 N 사용하는 모든 경우의 수 찾기
const getCases = () =>
  Array(8)
    .fill(null)
    .map((_, idx) => {
      if (idx + 1 === 1) return null;
      const cases = [];
      const mid = Math.floor((idx + 1) / 2);
      Array(mid)
        .fill(null)
        .forEach((_, i) => {
          cases.push([i + 1, idx - i]);
        });
      return cases;
    });

const getCombination = (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++)
    for (let j = 0; j < b.length; j++) {
      const numbers =
        a[i] > b[i] ? getNumbers(a[i], b[j]) : getNumbers(b[j], a[i]);
      result.push(...numbers);
    }
  return result;
};

const MAX_NUM = 32000;

const operation = {
  "+": (x, y) => x + y,
  "-": (x, y) => Math.abs(x - y),
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

const calculate = (operator, number1, number2) =>
  operation[operator](number1, number2);

const getNumbers = (a, b) => {
  let numbers = [];
  ["+", "-", "*", "/"].map((operator) => {
    const result = calculate(operator, a, b);
    0 <= result &&
      result < MAX_NUM &&
      Number.isInteger(result) &&
      numbers.push(result);
  });
  return numbers;
};

function check(cb, right) {
  console.log(cb);
  return cb === right;
}

console.log(check(solution(5, 1010), 7));
// console.log(check(solution(5, 4), 3));
// console.log(check(solution(5, 12), 4));
// console.log(check(solution(2, 11), 3));
// console.log(check(solution(5, 5), 1));
// console.log(check(solution(5, 10), 2));
// console.log(check(solution(5, 31168), -1));
// console.log(check(solution(1, 1121), 7));
// console.log(check(solution(3, 4), 3));
// console.log(check(solution(5, 5555), 4));
// console.log(check(solution(5, 5550), 5));
// console.log(check(solution(5, 20), 3));
// console.log(check(solution(5, 30), 3));
// console.log(check(solution(6, 65), 4));
// console.log(check(solution(5, 2), 3));

// console.log(check(solution(1, 1), 1));
// console.log(check(solution(1, 11), 2));
// console.log(check(solution(1, 111), 3));
// console.log(check(solution(1, 1111), 4));
// console.log(check(solution(1, 11111), 5));
// console.log(check(solution(7, 7776), 6));
// console.log(check(solution(7, 7784), 5));
// console.log(check(solution(2, 22222), 5));
// console.log(check(solution(2, 22223), 7));
// console.log(check(solution(2, 22224), 6));
// console.log(check(solution(2, 11111), 6));
// console.log(check(solution(2, 11), 3));
// console.log(check(solution(2, 111), 4));
// console.log(check(solution(2, 1111), 5));
// console.log(check(solution(9, 36), 4));
// console.log(check(solution(9, 37), 6));
// console.log(check(solution(9, 72), 3));
// console.log(check(solution(3, 18), 3));
// console.log(check(solution(2, 1), 2));
// console.log(check(solution(4, 17), 4));
