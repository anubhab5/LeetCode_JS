/**
 * 168. Excel Sheet Column Title
Easy
3.5K
512
company
Microsoft
company
Apple
company
Amazon
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
 

Constraints:

1 <= columnNumber <= 231 - 1
Accepted
358.8K
Submissions
1M
Acceptance Rate
35.1%
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {

    let str = '';
    while (columnNumber >= 1) {
        let remainder = columnNumber % 26;
        columnNumber = parseInt(columnNumber / 26);
        if (remainder == 0) {
            remainder = 26;
            columnNumber = columnNumber - 1;
        }
        str += String.fromCharCode(remainder + 64);
    }
    return str.split('').reverse().join('');
};

console.log(convertToTitle(701));