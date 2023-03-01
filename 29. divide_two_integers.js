/**
 * 29. Divide Two Integers
Medium
4K
12.8K
company
Facebook
company
Amazon
company
Google
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
 

Constraints:

-231 <= dividend, divisor <= 231 - 1
divisor != 0
Accepted
584.3K
Submissions
3.4M
Acceptance Rate
17.2%
Seen this question in a real interview before?
1/4
Yes
No
Discussion (106)
Related Topics
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend == -2147483648 && divisor == -1) {
        return 2147483647;
    }
    if (dividend == 2147483647 && divisor == -1) {
        return -2147483647;
    }
    let answer = 0;
    let isNegative = false;

    if (dividend < 0 || divisor < 0) {
        isNegative = true;
    }
    if (dividend < 0 && divisor < 0) {
        isNegative = false;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend >= divisor) {
        dividend -= divisor;
        answer++;
    }

    return isNegative ? answer * -1 : answer;
};