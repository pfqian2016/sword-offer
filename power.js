/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。
 * 求base的exponent次方
 */
function power(base, exponent) {
    let result = 1;
    if(base === 0 && exponent < 0) {
        return 0;
    }
    if(exponent < 0) {
        let absExponent = -exponent;
        result = powerWithUnsignedExp(base, absExponent);
        result = 1 / result;
        return result;
    } else {
        result = powerWithUnsignedExp(base, exponent);
        return result;
    }
}
/**
 * 使用高效的解法，简化了连续exp-1次乘法，用O(logn)时间求解
 */
function powerWithUnsignedExp(base, exponent) {
    if(exponent === 0) {
        return 1;
    }
    if(exponent === 1) {
        return base;
    }
    let result = powerWithUnsignedExp(base, exponent >> 1);
    result *= result;
    if(exponent & 1 === 1) {
        result *= base;
    }
    return result;
}
