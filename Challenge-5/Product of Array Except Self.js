var productExceptSelf = function (nums) {
    const arr = []
    const prefixArr = []
    const suffixArr = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prefixArr[i] = 1


        } else {
            prefixArr[i] = prefixArr[i - 1] * nums[i - 1]
        }

    }
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            suffixArr[i] = 1
        } else {
            suffixArr[i] = suffixArr[i + 1] * nums[i + 1]
        }
    }
    for (let i = 0; i < nums.length; i++) {
        arr[i] = prefixArr[i] * suffixArr[i]


    };
    return arr
}


