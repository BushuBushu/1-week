function solution(n) {
  const sum = (n * (n + 1)) / 2;
  const dir = [
    [1, 0], //아래
    [0, 1], //왼쪽
    [-1, -1], //왼쪽윗대각선
  ];

  const shells = Array.from(new Array(n), () => new Array(n).fill(0));
  let X = 0;
  let Y = 0;
  let dirIdx = 0;

  Array(sum)
    .fill(1)
    .map((val, idx) => {
      shells[X][Y] = val + idx;
      const [dx, dy] = dir[dirIdx];
      const nextX = X + dx;
      const nextY = Y + dy;
      if (
        nextX < 0 ||
        nextX >= n ||
        nextY < 0 ||
        nextY >= n ||
        shells[nextX][nextY] !== 0
      ) {
        dirIdx = (dirIdx + 1) % 3; // 다른 방향으로 바꾸기
        const [dx, dy] = dir[dirIdx];
        X += dx;
        Y += dy;
      } else {
        X = nextX;
        Y = nextY;
      }
    });

  const result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result.push(shells[i][j]);
    }
  }
  return result;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
