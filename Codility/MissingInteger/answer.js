function solution(A) {
  const _A = Array.from(new Set(A));

  const isVisited = Array(1000001).fill(false);

  let end = -1;
  for (let number of _A) {
    end = Math.max(end, number);
    isVisited[number] = true;
  }

  if (end < 0) return 1;
  for (let i = 1; i < end; i++) {
    if (!isVisited[i]) {
      return i;
    }
  }
  return end + 1;
}

console.log(solution([1, 1, 1, 1, 1, 1]));
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -2]));
