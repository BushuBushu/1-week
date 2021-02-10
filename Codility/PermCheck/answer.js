function solution(A) {
  const max = Math.max.apply(null, A);
  const length = A.length;
  const _length = Array.from(new Set(A)).length;
  if (max != length || _length != length) return 0;
  return 1;
}

console.log(solution([4, 1, 3, 2]));
