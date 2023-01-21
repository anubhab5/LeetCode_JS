/**
 * 205. Isomorphic Strings
Easy
5.9K
1.2K
company
LinkedIn
company
Amazon
company
Adobe
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
Accepted
776.2K
Submissions
1.8M
Acceptance Rate
42.7%
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    if (s.length !== t.length) return false;

    let str = '';
    let i = 0;
    let anaMap = {};

    while (i < s.length) {
        if (!anaMap[s[i]] && Object.values(anaMap).indexOf(t[i]) === -1) {
            anaMap[s[i]] = t[i];
            str += t[i];
        } else {
            str += anaMap[s[i]];
        }
        i++;
    }
    return t == str;
};
