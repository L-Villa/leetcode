function minCostToMoveChips(position: number[]): number {
  let even = 0,
    odd = 0;
  for (let i = 0; i < position.length; i++) {
    position[i] % 2 === 0 ? even++ : odd++;
  }
  return Math.min(even, odd);
}
