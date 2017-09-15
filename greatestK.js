function greatestK(arr, k) {
    var lens = arr.length;
    if (!lens || k <= 0 || k > lens) return;
    var start = 0;
    var end = lens - 1;
    var index = partition(arr, start, end);
    while(index !== (k - 1)) {
        if (index > (k - 1)) {
            end = index - 1;
            index = partition(arr, start, end);
        } else {
            start = index + 1;
            index = partition(arr, start, end);
        }
    }
    var ret = [];
    for(var i = 0; i <= index; i++) {
        ret.push(arr[i]);
    }
    return ret.sort((a, b) => a - b);
}

function partition(arr, low, high) {
    var pivot = arr[low];
    while(low < high) {
        while(low < high && arr[high] >= pivot) --high;
        arr[low] = arr[high];
        while(low < high && arr[low] <= pivot) ++low;
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

console.log(greatestK([4,5,1,6,2,7,3,8], 4));
