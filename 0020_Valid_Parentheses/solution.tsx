/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s: string): boolean {
  const storage: string[] = [];
  if (s[0] === ")" || s[0] === "]" || s[0] === "}") return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      storage.push(s[i]);
    } else {
      if (storage.length === 0) {
        return false;
      } else if (
        (s[i] === ")" && storage[storage.length - 1] === "(") ||
        (s[i] === "}" && storage[storage.length - 1] === "{") ||
        (s[i] === "]" && storage[storage.length - 1] === "[")
      ) {
        storage.pop();
      } else {
        return false;
      }
    }
  }
  if (storage.length === 0) return true;

  return false;
};
