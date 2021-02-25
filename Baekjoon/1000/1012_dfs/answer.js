const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
`
)
  .trim()
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let field,
  isVisited,
  answer = [];
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let T = +input();
while (T--) {
  const [w, h, n] = input()
    .split(" ")
    .map((v) => +v);
  field = Array.from(Array(w), () => Array(h).fill(false));
  isVisited = Array.from(Array(w), () => Array(h).fill(false));

  const dfs = (x, y) => {
    isVisited[x][y] = true;

    for (let d of dir) {
      const nx = x + d[0];
      const ny = y + d[1];

      if (!(0 <= nx && nx < w && 0 <= ny && ny < h)) continue;
      if (!field[nx][ny] || isVisited[nx][ny]) continue;

      dfs(nx, ny);
    }
  };

  for (let i = 0; i < n; i++) {
    const [r, c] = input()
      .split(" ")
      .map((v) => +v);
    field[r][c] = true;
  }

  let count = 0;
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      if (field[x][y] && !isVisited[x][y]) {
        dfs(x, y);
        count++;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"));
