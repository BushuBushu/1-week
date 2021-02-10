function solution(p) {
  if (p === "") return p; // 1 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.

  // 2.입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
  let point = getCuttingPoint(p);
  let u = p.slice(0, point);
  let v = p.slice(point);

  // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
  // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
  if (checkCorrectness(u)) {
    return u + solution(v);
  } else {
    //4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
    const _v = "(" + solution(v) + ")";
    const _u = u
      .substr(1, u.length - 2)
      .replace(/[\(]|[\)]/g, (a) => (a === ")" ? "(" : ")"));
    // const _u = reverse(u.slice(1, u.length - 1));
    return _v + _u;
  }
}

const getCuttingPoint = (string) => {
  let openNum = 0;
  let closeNum = 0;
  const length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] === "(") openNum++;
    else if (string[i] === ")") closeNum++;

    if (openNum === closeNum) return i + 1;
  }

  return -1;
};

const checkCorrectness = (string) => {
  let count = 0;
  const length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] === "(") count++;
    else if (string[i] === ")") count--;

    if (count < 0) return false;
  }
  return true;
};

const reverse = (string) => {
  const reversed = [];
  const length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] === "(") reversed.push(")");
    else if (string[i] === ")") reversed.push("(");
  }
  return reversed.join("");
};

// console.log(solution("(()())()"));
// console.log(solution(")("));
console.log(solution("()))((()"));
//"()(())()"
