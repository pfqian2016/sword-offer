/**
 * 给定一个数，返回斐波那契数列的第n项
 */
function Fibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    let ac1 = 0,
        ac2 = 1;
    for(let i  = 2; i <= n; i++) {
        [ac1, ac2] = [ac2, ac1 + ac2];
    }
    return ac2;
}
