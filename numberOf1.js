/**
 * 输入一个整数，输出该数二进制表示中1的个数。
 * 其中负数用补码表示。
 */
function numberOf1(n) {
    let count = 0,
        flag = 1;
    while(flag) {
        if(n & flag) {
            count++;
        }
        flag = flag << 1;
    }
    return count;
}
/**
 * The most effective way
 */
function numberOf1_1(n) {
    let count = 0;
    while(n) {
        ++count;
        n = n & (n - 1);
    }
    return count;
}
