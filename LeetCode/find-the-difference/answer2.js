/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const isAnagram = function (s, t) {
  return String.fromCharCode(
    t.split("").reduce((acc, cur) => acc + cur.charCodeAt(), 0) -
      s.split("").reduce((acc, cur) => acc + cur.charCodeAt(), 0)
  );
};
