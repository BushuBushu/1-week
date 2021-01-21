function solution(progresses, speeds) {
  let days = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });

  let day = 0;
  let answer = [];

  while (days.length) {
    let now = days.shift();

    if (now > day) {
      answer.push(1);
      day = now;
      continue;
    }
    answer[answer.length - 1]++;
  }
  return answer;
}
