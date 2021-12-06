/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // @ts-ignore
  const answer = new ListNode();
  const storage = answer;

  traverse(l1, l2, storage);

  return answer.next;
}

const traverse = (
  list1: ListNode | null,
  list2: ListNode | null,
  storage: ListNode | null
): void => {
  if (!list1 && !list2) return;

  const v1: number | null = list1 !== null ? list1.val : null;
  const v2: number | null = list2 !== null ? list2.val : null;

  if (!list1 && list2) {
    // @ts-ignore
    [storage, list2] = cleaner(v2, list2, storage);
    return traverse(null, list2, storage.next);
  } else if (!list2 && list1) {
    // @ts-ignore
    [storage, list1] = cleaner(v1, list1, storage);
    return traverse(list1, null, storage.next);
    // @ts-ignore
  } else if (v1 > v2) {
    // @ts-ignore
    [storage, list2] = cleaner(v2, list2, storage);
  } else {
    // @ts-ignore
    [storage, list1] = cleaner(v1, list1, storage);
  }

  traverse(list1, list2, storage.next);
};

const cleaner = (
  value: number,
  list: ListNode,
  storage: ListNode
): ListNode[] => {
  // @ts-ignore
  storage.next = new ListNode(value);
  // @ts-ignore
  list = list ? list.next : null;
  return [storage, list];
};
