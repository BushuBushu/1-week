/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  // 문자열 s 길이와 문자열 t 길이가 서로 다를 경우 false 반환한다
  if (s.length !== t.length) return false;

  /*
    문자열 `s`을 split하여 각 알파벳이 몇 번 등장하는지 세서 
    Map객체 alpha를 업데이트한다
  */
  let alpha = new Map();
  s.split("").forEach((c) => {
    const count = alpha.get(c);
    alpha.set(c, count ? count + 1 : 1);
  });

  /*
    split한 문자열 `t`를 순회하여 
    각 알파벳이 Map 객체 alpha에 있으면(alpha.get(c) > 0) alpha를 업데이트하고 
    없으면(alpha.get(c) <= 0 || undefined) 순회를 멈춘다 
  */
  return t.split("").every((c) => {
    const count = alpha.get(c);
    if (count) alpha.set(c, count - 1);
    return count;
  });
};
