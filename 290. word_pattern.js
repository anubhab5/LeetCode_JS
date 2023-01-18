/**
 * 290. Word Pattern
Easy
5.8K
676
company
Adobe
company
Amazon
Bolt
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
Accepted
494K
Submissions
1.2M
Acceptance Rate
41.7%
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    let hashMap = {};

    let wordList = s.split(' ');

    if(pattern.length !== wordList.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (!hashMap[pattern[i]] && Object.values(hashMap).indexOf(wordList[i]) === -1) {
            hashMap[pattern[i]] = wordList[i];
        }

        if (!hashMap[pattern[i]] && Object.values(hashMap).indexOf(wordList[i]) !== -1) {
            return false;
        }

        if (hashMap[pattern[i]] && hashMap[pattern[i]] !== wordList[i]) {
            return false;
        }
    }
    return true;
};