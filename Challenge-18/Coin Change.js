/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode.com/problems/coin-change/description/
 */
function ANS(arr, index, T, dp) {

    if (index == 0) {
        if (T % arr[0] == 0) return T / arr[0];
        else return 1e9;
    }
    if (dp[index][T] !== -1) return dp[index][T]
    var notTaken = 0 + ANS(arr, index - 1, T, dp)

    var taken = 1e9;
    if (arr[index] <= T)
        taken = 1 + ANS(arr, index, T - arr[index], dp);

    return dp[index][T] = Math.min(notTaken, taken);
}
var coinChange = function (arr, target) {
    var n = arr.length
    var dp = []
    for (var i = 0; i <= n; i++) {
        dp[i] = new Array(target + 1).fill(-1)
    }

    var ans = ANS(arr, n - 1, target, dp)
    if (ans >= 1e9) return -1;
    return ans

};