/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

type ListNode = {
  val: number;
  next: ListNode | null;
};

var addTwoNumbers = function (l1: ListNode, l2: ListNode): ListNode | null {
  // @ts-ignore
  const list: any = new ListNode(0);
  let store: any = list;

  let remainder = 0;
  while (l1 || l2 || remainder) {
    const value1 = l1 ? l1.val : 0;
    const value2 = l2 ? l2.val : 0;

    let curr = value1 + value2 + remainder;
    remainder = Math.floor(curr / 10);
    curr = curr % 10;
    // @ts-ignore
    store.next = new ListNode(curr);

    store = store.next;
    // @ts-ignore
    l1 = l1 ? l1.next : null;
    // @ts-ignore
    l2 = l2 ? l2.next : null;
  }

  return list.next;
};
