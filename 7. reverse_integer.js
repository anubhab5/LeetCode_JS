/**
 * 7. Reverse Integer
    Medium
    9.5K
    11.4K
    company
    Amazon
    company
    Apple
    company
    Adobe
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    

    Example 1:

    Input: x = 123
    Output: 321
    Example 2:

    Input: x = -123
    Output: -321
    Example 3:

    Input: x = 120
    Output: 21
    

    Constraints:

    -231 <= x <= 231 - 1
    Accepted
    2.4M
    Submissions
    8.8M
    Acceptance Rate
    27.3%
 */

/**
* @param {number} x
* @return {number}
*/
var reverse = function (x) {
    let arr = (x + '').split('');
    let isNegative = false;
    if (arr[0] === '-') {
        isNegative = true;
        arr.shift();
    }
    let str = arr.reverse().join('');
    if (isNegative) {
        str = '-' + str;
    }

    if (Number(str) >= -Math.pow(2, 31) && Number(str) <= Math.pow(2, 31)) {
        return Number(str);
    }
    else {
        return 0;
    }
};