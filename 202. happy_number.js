/**
 * 202. Happy Number
Easy
8.2K
1K
company
Amazon
company
Google
company
Yahoo
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
Accepted
1.1M
Submissions
2M
Acceptance Rate
54.7%
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let result = n;
const visited = {};
const getDigits = number => `${number}`.split('').map(str => Number(str));

// escape loop if result is 1
while (result !== 1) {
    let digits = getDigits(result);
    result = digits.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
    
    // memorized visited results. it's not a happy number when revisit occurs
    if (visited[result] === undefined) {
        visited[result] = true;
    } else {
        return false
    }
} 

return true;
};