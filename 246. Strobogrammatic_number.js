/**
 * 246. Strobogrammatic Number
Easy
529
934
company
Facebook
company
Uber
company
Google
Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 

Example 1:

Input: num = "69"
Output: true
Example 2:

Input: num = "88"
Output: true
Example 3:

Input: num = "962"
Output: false
 

Constraints:

1 <= num.length <= 50
num consists of only digits.
num does not contain any leading zeros except for zero itself.
Accepted
157.1K
Submissions
328.9K
Acceptance Rate
47.8%
Seen this question in a real interview before?
1/4
Yes
No
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
    const StrobMap = {
        1: 1,
        6: 9,
        8: 8,
        9: 6,
        0: 0
    };
    const numStr = num + '';
    let str = '';

    for (let i = numStr.length - 1; i >= 0; i--) {
        if (StrobMap[num[i]] === null || StrobMap[num[i]] === undefined) return false;
        str += StrobMap[num[i]];
    }
    return num == Number(str);
};