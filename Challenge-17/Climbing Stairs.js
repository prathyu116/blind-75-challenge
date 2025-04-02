/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/climbing-stairs/submissions/713423865/
 */
function numberOfWays(n, memo) {
    if (n == 0)
        return 1;
    if (n < 0) {
        return 0
    };
    if (n == 1)
        return 1

    if (memo[n] != -1)
        return memo[n]

    return memo[n] = numberOfWays(n - 1, memo) + numberOfWays(n - 2, memo)
}
var climbStairs = function (n) {
    var cur = 0
    var memo = new Array(n + 1).fill(-1)
    var ans = numberOfWays(n, memo)


    return ans
};