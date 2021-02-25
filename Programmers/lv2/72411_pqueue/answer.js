function solution(orders, course) {
  let answer = [];

  const _orders = orders.map((order) => order.split("").sort());

  const info = new Map();
  for (let c of course) {
    let temp = [];
    let max = 2;

    for (let order of _orders) {
      if (order.length < c) continue;
      for (let menu of combination(order, c)) {
        const _menu = menu.sort().join("");

        if (!info.has(_menu)) info.set(_menu, 0);

        info.set(_menu, 1 + info.get(_menu));

        const value = info.get(_menu);
        if (max === value) temp.push(_menu);

        if (max < value) {
          max = value;
          temp = [_menu];
        }
      }
    }
    answer = [...answer, ...temp];
  }
  answer.sort();
  return answer;
}

// 조합 공부 !!
function combination(arr, num) {
  const result = [];
  if (num == 1) return arr.map((v) => [v]);

  arr.forEach((fix, i, array) => {
    const rest = array.slice(i + 1);
    const combinations = combination(rest, num - 1);
    const arr = combinations.map((combination) => [fix, ...combination]);
    result.push(...arr);
  });
  return result;
}
console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);

// solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);
