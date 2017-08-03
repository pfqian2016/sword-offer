/**
 * 给定二维数组，数组按从左到右，从上到下依次递增，输入一个整数，查找是否存在于二维数组中
 */
function Find(target, array) {
    for(let i = array[0].length - 1; i >= 0; i--) {
        let ref = array[0][i];
        if(ref === target) {
            return true;
        }else if(ref > target) {
            continue;
        }else {
            for(let j = 1; j < array.length; j++) {
                if(array[j][i] === target) {
                    return true;
                }else if(array[j][i] > target) {
                    break;
                }
            }
        }
    }
    return false;
}
