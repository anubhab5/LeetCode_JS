/**
 * 342. Power of Four
Easy
2.9K
334
company
Amazon
company
Adobe
company
Qualcomm
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

 

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true
 

Constraints:

-231 <= n <= 231 - 1
 

Follow up: Could you solve it without loops/recursion?
Accepted
444.2K
Submissions
964.1K
Acceptance Rate
46.1%
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) return false;
    while (n !== 1) {
        n /= 4;
        if (!Number.isInteger(n)) return false;
    }
    if (n === 1) return true;
};