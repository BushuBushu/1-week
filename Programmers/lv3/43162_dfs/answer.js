function solution(n, computers) {
  let count = 0;
  const visited = Array(n)
    .fill()
    .map(() => false);

  for (let i = 0; i < n; ++i) {
    if (!visited[i]) {
      visited[i] = true;
      ++count;
      dfs(i);
    }
  }

  function dfs(node) {
    for (let other = 0; other < n; ++other) {
      if (node === other) continue;
      if (computers[node][other] && !visited[other]) {
        visited[other] = true;
        dfs(other);
      }
    }
  }

  return count;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
