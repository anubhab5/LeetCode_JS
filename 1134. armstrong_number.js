/**
 * 1134. Armstrong Number
    Easy
    174
    19
    company
    Amazon
    Given an integer n, return true if and only if it is an Armstrong number.

    The k-digit number n is an Armstrong number if and only if the kth power of each digit sums to n.

    

    Example 1:

    Input: n = 153
    Output: true
    Explanation: 153 is a 3-digit number, and 153 = 13 + 53 + 33.
    Example 2:

    Input: n = 123
    Output: false
    Explanation: 123 is a 3-digit number, and 123 != 13 + 23 + 33 = 36.
    

    Constraints:

    1 <= n <= 108
    Accepted
    31K
    Submissions
    39.7K
    Acceptance Rate
    78.1%
 */

/**
* @param {number} n
* @return {boolean}
*/
var isArmstrong = function (n) {
    let number = '' + n;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Math.pow(number[i], number.length);
    }
    if (sum === n) {
        return true;
    } else {
        return false;
    }
};