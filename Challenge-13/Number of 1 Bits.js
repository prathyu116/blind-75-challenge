/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/number-of-1-bits/
 */

var hammingWeight = function (n) {
    var count = 0;
    while (n != 0) {
        if (n & 1) {
            count++;
        }
        n = n >> 1;
    }
    return count;

};
