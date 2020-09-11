console.log('1111')
function solution(strings, n) {
  const answer = strings;
  answer.sort((a,b)=>{
      if (a[n]== b[n]){
        return a < b? -1: 1;
      }
      return a[n] < b[n]? -1: (a[n] > b[n]? 1: 0);
  })
  return answer;
}
console.log(solution(["abce", "abcd", "cdx"], 2));