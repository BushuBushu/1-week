function solution(people, limit) {
  people.sort((a, b) => a - b); // 그냥 sort하면 2자리 이상일 때 정렬안됨

  let count = 0;
  let l = 0;
  let r = people.length - 1;
  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    count++;
    r--; //최소값과 최댓값이 limit보다 크면 최댓값을 보트태워보낸다
  }
  return count;
}

console.log(solution([40, 50, 60, 90], 90));
// console.log(solution([70, 50, 80, 50], 100));
// console.log(solution([50, 50, 50, 50], 100));
