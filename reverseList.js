/**
 * 输入一个链表，反转链表后，输出链表的所有元素。
 */
function ReverseList(pHead) {
    if(pHead === null) return null;
    let reverseHead = null,
    current = pHead,
    prev = null;
    while(current) {
        let cache = current.next;
        if(cache === null) {
            reverseHead = current;
            reverseHead.next = prev;
        }
        current.next = prev;
        prev = current;
        current = cache;
    }
    return reverseHead;
}
