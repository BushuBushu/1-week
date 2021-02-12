// 큰 수 만들기
function solution(number, k) {
  const stack = [];
  for (let num of number) {
    while (k > 0 && stack.slice(-1)[0] < num) {
      console.log(k);
      console.log(stack);
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  return stack.join("").substr(0, number.length - k);
}

console.log(solution("1231234", 3));
// const indexArr = Array(number.length)
//   .fill(0)
//   .map((_, i) => i);
// const cases = combination(indexArr, number.length - k);
// let max = -1;
// for (let c of cases) {
//   let now = [];
//   for (let idx of c) {
//     now.push(number[idx]);
//   }
//   max = Math.max(max, +now.sort((a, b) => a > b).join(""));
// }
// return max;
