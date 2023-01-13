/**
 * 171. Excel Sheet Column Number
    Easy
    3.9K
    317
    company
    Microsoft
    company
    Facebook
    company
    Google
    Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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

    Input: columnTitle = "A"
    Output: 1
    Example 2:

    Input: columnTitle = "AB"
    Output: 28
    Example 3:

    Input: columnTitle = "ZY"
    Output: 701
    

    Constraints:

    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].
    Accepted
    568K
    Submissions
    921K
    Acceptance Rate
    61.7%
 */

/**
* @param {string} columnTitle
* @return {number}
*/
var titleToNumber = function (columnTitle) {
    let sum = 0;
    for (let i = columnTitle.length - 1, j=0; i >= 0; i--, j++) {
        console.log(sum);
        sum += ((columnTitle.charCodeAt(i) - 65 + 1) * Math.pow(26, j));
        console.log(sum);
    }

    return sum;
};

console.log(titleToNumber('AB'));