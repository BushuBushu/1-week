function solution(A) {
  if (A.length === 0) return 0;
  if (A.length === 1) return Math.abs(A[0]);

  // 일단 절댓값으로 그 값만 가져오기
  // const _A = A.map((el) => Math.abs(el));
  // const total = _A.reduce((acc, cur) => acc + cur, 0);
  // console.log(_A);
  // console.log(total);

  A.sort();
  let l = 0;
  let r = A.length - 1;
  let min = Math.abs(A[r] + A[l]);
  while (l <= r) {
    const now = A[r] + A[l];
    min = Math.min(min, Math.abs(now));
    if (now <= 0) l++;
    else r--;
  }
  return min;
}

console.log(solution([1, 5, 2, -2]));
console.log(solution([2, -4, 6, -3, 9]));
console.log(solution([1, 1, 1, 1, 4]));
