/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。
 */
function merge(pHead1, pHead2) {
    let node1 = pHead1,
        node2 = pHead2;
    if(pHead1 === null) {
        return pHead2
    } else if(pHead2 === null) {
        return pHead1;
    }
    let mergeHead = null;
    while(node1 !== null && node2 !== null) {
        if(node1.val < node2.val) {
            mergeHead = node1;
            mergeHead.next = merge(node1.next, node2);
        }else {
            mergeHead = node2;
            mergeHead.next = merge(node1, node2.next);
        }
    }
    return mergeHead;
}
