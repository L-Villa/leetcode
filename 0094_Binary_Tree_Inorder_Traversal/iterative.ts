interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const inorderTraversal = function (root: TreeNode | null): number[] {
  const stack = [root];
  const answer = [];
  while (stack.length !== 0) {
    const storage: any = stack.pop();
    if (storage && typeof storage === "object") {
      storage.right && stack.push(storage.right);
      stack.push(storage.val);
      storage.left && stack.push(storage.left);
    } else if (storage && typeof storage === "number") {
      answer.push(storage);
    }
  }

  return answer;
};
