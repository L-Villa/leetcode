/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s: string): number {
  const key: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (key[s[i]] < key[s[i + 1]]) {
      answer = answer + key[s[i + 1]] - key[s[i]];
      i++;
    } else {
      answer = answer + key[s[i]];
    }
  }
  return answer;
};
