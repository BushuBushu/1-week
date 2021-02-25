const map = {
  A: 1,
  C: 2,
  G: 3,
  T: 4,
};
function solution(S, P, Q) {
  return P.map((s, idx) => {
    let str = S.slice(s, Q[idx] + 1);
    for (let key in map) if (str.indexOf(key) > -1) return map[key];
  });
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
