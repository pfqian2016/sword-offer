/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */
function reOrderArray(arr) {
    if(!Array.isArray(arr)) return false;
    let oddArr = [],
        evenArr = [];
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] & 0x1) === 0) {
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i])
        }
    }
    return oddArr.concat(evenArr);
}