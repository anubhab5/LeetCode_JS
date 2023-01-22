/**
 * 242. Valid Anagram
Easy
8K
259
company
Bloomberg
company
Amazon
company
Google
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

Accepted
1.9M
Submissions
3.1M
Acceptance Rate
62.9%
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    // if (s.length !== t.length) return false;
    // const tList = t.split('');
    // for (let i = 0; i < s.length; i++) {
    //     const index = tList.indexOf(s[i]);
    //     if (index === -1) {
    //         return false;
    //     } else {
    //         tList.splice(index, 1);
    //     }
    // }
    // return true;
    return s.split('').sort().join('') === t.split('').sort().join('');
};