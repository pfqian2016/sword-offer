/**
 * 给定二维数组，数组按从左到右，从上到下依次递增，输入一个整数，查找是否存在于二维数组中
 */
function Find(target, array) {
    var bool = false;
    var rows = array.length;
    var columns = array[0].length;
    var row = 0,
        column = columns - 1;
    while(row < rows && column >= 0) {
        if(array[row][column] === target) {
            bool = true;
            break;
        } else if(array[row][column] > target) {
            column--;
        } else{
            row++;
        }
    }
    return bool;
}
