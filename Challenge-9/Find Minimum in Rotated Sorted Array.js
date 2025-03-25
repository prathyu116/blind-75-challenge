var findMin = function (nums) {
    var s = 0, e = nums.length - 1;
    var res = nums[0];

    while (s <= e) {
        if (nums[s] < nums[e]) {
            res = nums[s];
            break
        }
        var mid = Math.floor((s + e) / 2);
        res = Math.min(res, nums[mid]);
        if (nums[s] <= nums[mid]) { //left sort
            s = mid + 1; //got to right
        } else {
            e = mid;
        }
    }
    return res;

};