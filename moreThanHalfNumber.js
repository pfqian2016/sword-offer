/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
 * 超过数组长度的一半，因此输出2。如果不存在则输出0。
 */
function moreThanHalfNumber(numbers) {
    // if(!Array.isArray(numbers)) return 0;
    // if(numbers.length === 0) return 0;
    // let lens = numbers.length;
    // let hashmap = {};
    // numbers.forEach((val) => {
    //     if(!hashmap[val]) {
    //         hashmap[val] = 0;
    //     }
    //     hashmap[val]++;
    // });
    // let keys = Object.keys(hashmap);
    // for(let i = 0, key; key = keys[i++];) {
    //     if(hashmap[key] > Math.floor(lens / 2)) {
    //         return key;
    //     }
    // }
    // return 0;
    if(!Array.isArray(numbers)) return 0;
    if(numbers.length === 0) return 0;
    let lens = numbers.length;
    let max = 0;
    let maxNum = 0;
    let hashmap = {};
    numbers.forEach((val) => {
        if(!hashmap[val]) {
            hashmap[val] = 0;
        }
        hashmap[val]++;
        //这种方法只需要遍历一次数组即可完成找出出现次数最多的数
        if(hashmap[val] > max) {
            max = hashmap[val];
            maxNum = val;
        }
    });
    return max > Math.floor(lens / 2) ? maxNum : 0;
}
