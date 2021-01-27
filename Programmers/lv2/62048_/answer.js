function solution(w, h) {
  const gcd = w > h ? GCD(w, h) : GCD(h, w);
  return w * h - gcd * (w / gcd + h / gcd - 1);
}

function GCD(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(solution(8, 12));
console.log(solution(4, 5));
