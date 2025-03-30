/**
 * @param {number} n
 * @return {number[]}
 * https://leetcode.com/problems/counting-bits/
 */
var countBits = function (n) {
    const ans = []
    for (var i = 0; i <= n; i++) {
        const binary = i.toString(2);
        let count = 0
        console.log("binary", binary)
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] === '1') count++;
        }
        ans.push(count)
    }
    return ans
};