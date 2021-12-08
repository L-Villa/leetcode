function hammingDistance(x: number, y: number): number {
  let first = x.toString(2);
  let second = y.toString(2);

  return first.length < second.length
    ? check(first, second, 0)
    : check(second, first, 0);
}

const check = (shortest: string, longest: string, hammer: number): number => {
  for (let i = longest.length - 1, j = shortest.length - 1; i >= 0; i--, j--) {
    if (
      (j >= 0 && shortest[j] !== longest[i]) ||
      (j < 0 && longest[i] === "1")
    ) {
      hammer++;
    }
  }

  return hammer;
};
