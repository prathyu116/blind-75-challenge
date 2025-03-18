var twoSum = function (nums, target) {
    let obj = {}
    for (i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (obj[diff] != null) {
            return [obj[diff], i]
        } else {
            obj[nums[i]] = i
            console.log(obj)
        }
    }
};
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));