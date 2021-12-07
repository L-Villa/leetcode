interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const isSymmetric = function (root: TreeNode | null): boolean {
  // @ts-ignore
  return traverse(root.left, root.right);
};

// @ts-ignore
const traverse = (l: TreeNode | null, r: TreeNode | null): boolean => {
  if (!l && !r) return true;
  // @ts-ignore
  if ((!l && r) || (l && !r) || l.val !== r.val) return false;
  // @ts-ignore
  return traverse(l.left, r.right) && traverse(l.right, r.left);
};
