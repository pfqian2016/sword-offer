/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 * 注意检查代码鲁棒性
 * 1.头结点为空时
 * 2.k为空时
 * 3.k大于链表长度时
 */
function findKthToTail(head, k) {
    if(head === null || k === 0) {
        return null;
    }
    let pAhead = head,
        pBehind = null;
    for(let i = 0; i < k - 1; i++) {
        if(pAhead.next !== null) {
            pAhead = pAhead.next;
        } else {
            return null;
        }
    }
    pBehind = head;
    while(pAhead.next !== null) {
        pAhead = pAhead.next;
        pBehind = pBehind.next;
    }
    return pBehind;
}
