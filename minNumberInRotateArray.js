/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，
 * 我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，
 * 输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}
 * 的一个旋转，该数组的最小值为1。
 */
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length === 0) {
        return 0;
    }
    let lowerBound = 0,
        upperBound = rotateArray.length - 1;
    while(lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2);
        if(rotateArray[mid] > rotateArray[lowerBound]) {
            lowerBound = mid;
        } else if(rotateArray[mid] < rotateArray[lowerBound]) {
            upperBound = mid;
        } else {
            return rotateArray[upperBound];
        }
    }
}
