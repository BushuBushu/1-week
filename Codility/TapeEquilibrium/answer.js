// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let sum = A.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  let partialSum = 0;
  let min = Infinity;
  for (let i = 0; i < A.length - 1; i++) {
    partialSum += A[i];
    let diff = Math.abs(sum - partialSum - partialSum);
    if (min > diff) {
      min = diff;
    }
  }
  return min;
}

console.log(solution([3, 1, 2, 4, 3]));
