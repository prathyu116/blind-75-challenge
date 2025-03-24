var maxProduct = function (arr) {
    let res = arr[0];
    let currMin = 1
    let currMax = 1
    for (var i = 0; i < arr.length; i++) {
        let temp = currMax
        currMax = Math.max(arr[i], arr[i] * currMax, arr[i] * currMin)
        currMin = Math.min(arr[i], arr[i] * temp, arr[i] * currMin)
        res = Math.max(res, currMax)
    }
    return res
};