function solution(n) {
  const base = ["4", "1", "2"];

  let answer = [];
  while (n > 0) {
    answer = [base[n % 3], ...answer];
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer.join("");
}

console.log(solution(10));
