/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/container-with-most-water/
 */

var maxArea = function (h) {
    let left = 0
    let right = h.length - 1
    let maxWater = 0
    while (left < right) {
        let minH = Math.min(h[left], h[right])
        maxWater = Math.max(maxWater, minH * (right - left))
        if (h[left] < h[right]) left++
        else right--

    }




    return maxWater
};
