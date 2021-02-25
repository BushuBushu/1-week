function solution(A) {
  return (
    Array(A.length + 1)
      .fill(1)
      .map((val, idx) => val + idx)
      .reduce((acc, cur) => acc + cur, 0) - A.reduce((acc, cur) => acc + cur, 0)
  );
}

console.log(solution([1, 2, 3, 5]));
