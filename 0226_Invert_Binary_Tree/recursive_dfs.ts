function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  const left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
