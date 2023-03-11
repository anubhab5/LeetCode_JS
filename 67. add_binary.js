/**
 * 67. Add Binary
    Easy
    6.6K
    687
    company
    Apple
    company
    Amazon
    Hudson River Trading
    Given two binary strings a and b, return their sum as a binary string.

    

    Example 1:

    Input: a = "11", b = "1"
    Output: "100"
    Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"
    

    Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
    Accepted
    1M
    Submissions
    2M
    Acceptance Rate
    51.5%
    Seen this question in a real interview before?
    1/4
    Yes
    No
 */

/**
* @param {string} a
* @param {string} b
* @return {string}
*/
var addBinary = function (a, b) {

    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
};

console.log(addBinary('1', '1'));