// Variable array:

let arr = [2, 5, 6, 4, 5];

// Less efficient solution:
var findDuplicate = function() {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j ++){
            console.log(arr[i]);
            return arr[i];
        } 
    }
}

// More efficient solution:
var firstDup = function() {
    var dupArr = [];
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i]
        if (dupArr[val]) {
            console.log(val);
            return val;
        }
        else {
            console.log(val);
            dupArr[val] = true;
        }
    }
}
firstDup(arr);