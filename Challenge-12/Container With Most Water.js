/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function (h) {
    let maxWater = 0
    for (var i = 0; i < h.length; i++) {
        for (var j = i + 1; j < h.length; j++) {
            let width = j - i
            let height = Math.min(h[i], h[j])
            let water = width * height
            maxWater = Math.max(maxWater, water)

        }


    }
    return maxWater
};