/**
 * 326. Power of Three
Easy
2.5K
239
company
Apple
company
Google
company
Bloomberg
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).
 

Constraints:

-231 <= n <= 231 - 1
 

Follow up: Could you solve it without loops/recursion?
Accepted
661K
Submissions
1.5M
Acceptance Rate
45.5%
Seen this question in a real interview before?
1/4
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {

    if (n === 0) return false;
    while (n !== 1) {
        n /= 3;
        if (!Number.isInteger(n)) return false;
    }
    if (n === 1) return true;
};