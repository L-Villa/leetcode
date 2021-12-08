function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  return solver(root, targetSum, [], []);
}

const solver: ISolver = (root, targetSum, storage, result) => {
  if (!root) return result;

  storage.push(root.val);

  if (root.val === targetSum && !root.left && !root.right) {
    const t = [...storage];
    result.push(t);
  }

  solver(root.left, targetSum - root.val, storage, result);
  solver(root.right, targetSum - root.val, storage, result);

  storage.pop();

  return result;
};

interface ISolver {
  (
    root: TreeNode | null,
    targetSum: number,
    storage: number[],
    result: number[][]
  ): number[][];
}
