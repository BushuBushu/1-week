function solution(brown, yellow) {
  let sqr = new Set();
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) sqr.add([i, yellow / i]);
  }
  for (let [h, w] of sqr) {
    if (w * 2 + h * 2 + 4 === brown) return [w + 2, h + 2];
  }
}

console.log(solution(10, 2));
