/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const alpha = Array(26).fill(0);
  s.split("").forEach((c) => ++alpha[c.charCodeAt(0) - 97]);

  let result = "";
  t.split("").every((c) => {
    if (--alpha[c.charCodeAt(0) - 97] < 0) result = c;
    return result.length === 0;
  });
  return result;
};
