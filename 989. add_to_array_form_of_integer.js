/**
 * 989. Add to Array-Form of Integer
Easy
2.6K
222
company
Facebook
company
Bloomberg
The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

Example 1:

Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
 

Constraints:

1 <= num.length <= 104
0 <= num[i] <= 9
num does not contain any leading zeros except for the zero itself.
1 <= k <= 104
Accepted
191.5K
Submissions
409K
Acceptance Rate
46.8%
 */

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let kList = k.toString().split('');
    let carry = 0;
    let sum = 0;
    let arr = [];
    for (let i = kList.length - 1, j = num.length - 1; j >= 0 || i >= 0; i--, j--) {
        if (i >= 0 && j >= 0) {
            sum = (Number(kList[i]) + Number(num[j]) + carry).toString().split('');
        } else if (j < 0) {
            sum = (Number(kList[i]) + carry).toString().split('');
        } else {
            sum = (Number(num[j]) + carry).toString().split('');
        }
        if (sum.length === 1) {
            arr.unshift(Number(sum[0]));
            carry = 0;
        } else {
            arr.unshift(Number(sum[1]));
            carry = 1;
        }
    }
    if (carry === 1) {
        arr.unshift(1);
    }
    return arr;
};