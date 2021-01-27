function solution(n) {
  a = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    a.push((a[i - 1] + a[i - 2]) % 1000000007);
  }

  return a[n];
}

console.log(solution(4));
