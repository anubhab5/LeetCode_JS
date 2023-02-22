/**
 * 344. Reverse String
Easy
6.9K
1.1K
company
Apple
company
Amazon
company
Adobe
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
Accepted
2M
Submissions
2.6M
Acceptance Rate
76.6%
Seen this question in a real interview before?
1/4
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++;
        right--;
    }
    return s;
};