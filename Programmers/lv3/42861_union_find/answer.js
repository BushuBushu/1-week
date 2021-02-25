function solution(n, costs) {
  let parent = Array(n + 1)
    .fill()
    .map((_, i) => i);

  const find = (x) => {
    if (x === parent[x]) return x;

    return (parent[x] = find(parent[x]));
  };

  const union = (a, b) => {
    a = find(a);
    b = find(b);

    // 두 정점의 부모 정점이 똑같은 번호일 경우
    // 즉, 사이클이기 때문에 합치지 않는다
    if (a === b) return false;

    // 두 정점 중 작은 번호를 가진 정점이 부모
    if (a > b) parent[a] = b;
    else parent[b] = a;
    return true;
  };

  costs.sort((a, b) => a[2] - b[2]); //비용 기준 정렬

  return costs.reduce(
    (acc, cost) => (union(cost[0], cost[1]) ? acc + cost[2] : acc),
    0
  );
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
