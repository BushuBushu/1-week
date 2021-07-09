const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `500000000000000000 500000000000000002
`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const gcd = (a, b) => (!b ? a : gcd(b, a % b));

function solution() {
  let answer = [];
  const [a, b] = input()
    .split(" ")
    .map((v) => BigInt(v));

  const n = a > b ? gcd(a, b) : gcd(b, a);
  const _n = +("" + n).replace(/[^0-9]/g, "");

  Array(_n)
    .fill()
    .forEach(() => answer.push(1));
  return answer.join("");
}
console.log(solution());
