function solution(priorities, location) {
  const _priorities = priorities.map((val, idx) => [val, idx]);
  let count = 0;
  while (_priorities.length) {
    let now = _priorities.shift();
    if (_priorities.filter((val) => val[0] > now[0]).length > 0) {
      _priorities.push(now);
      continue;
    }
    count++;
    if (now[1] === location) return count;
  }
}

console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
