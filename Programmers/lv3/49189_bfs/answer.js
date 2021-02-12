function solution(n, edge) {
  // 그래프 연결관계 만들기
  const g = {};
  for (let i = 1; i <= n; i++) g[i] = [];
  edge.map(([s, e]) => {
    g[s].push(e);
    g[e].push(s); // 주의! 양방향 연결이기 때문
  });

  // 방문체크 및 depth를 저장하는 배열
  let visited = Array(n + 1).fill(-1);

  let max = 0; //
  let q = [1]; // 탐색 시작 노드는 1번 노드
  visited[1] = 1; // 첫 번째 노드 depth(height) 1로

  while (q.length) {
    const now = q.shift();
    const nextNodes = g[now];
    for (let next of nextNodes) {
      // 현재 노드에 연결되어 있는 모든 노드
      if (visited[next] === -1) {
        q.push(next);
        visited[next] = visited[now] + 1; // depth 1 증가
        max = Math.max(max, visited[next]);
      }
    }
  }

  // 맨 끝 노드 개수 세기
  let answer = 0;
  for (let v of visited) {
    if (max == v) answer++;
  }
  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
