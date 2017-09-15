function printMatrixClockwisely (arr, cols, rows) {
    if (!arr || cols <= 0 || rows <= 0) return;
    var start = 0
    while(cols > start * 2 && rows > start * 2) {
        print(arr, cols, rows, start);
        ++start;
    }
}

function print (arr, cols, rows, start) {
    var endX = cols - 1 - start;
    var endY = rows - 1 - start;
    //print row from left to right
    for(var i = start; i <= endX; i++) {
        console.log(arr[start][i]);
    }

    //print col from up to down
    if(endY > start) {
        for(var i = start + 1; i <= endY; i++) {
            console.log(arr[i][endX]);
        }
    }

    //print row from right to left
    if(endY > start && endX > start) {
        for(var i = endX - 1; i >= start; i--) {
            console.log(arr[endY][i]);
        }
    }

    //print col from down to up
    if(endX > start && endY > start + 1) {
        for(var i = endY - 1; i > start; i--) {
            console.log(arr[i][start]);
        }
    }
}

var arr = [[1,2],[3,4]]
printMatrixClockwisely(arr, arr[0].length, arr.length);
