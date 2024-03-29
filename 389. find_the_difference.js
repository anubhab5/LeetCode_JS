/**
 * 389. Find the Difference
Easy
3.5K
409
company
Google
company
Amazon
company
Apple
You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

 

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
 

Constraints:

0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lowercase English letters.
Accepted
466.2K
Submissions
774.7K
Acceptance Rate
60.2%
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let newList = s.split('');
    for (let i = 0; i < t.length; i++) {
        if (newList.indexOf(t[i]) === -1) {
            return t[i];
        } else {
            newList.splice(newList.indexOf(t[i]), 1);
        }
    }
};