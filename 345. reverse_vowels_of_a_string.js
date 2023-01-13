/**
 * Easy
3.1K
2.3K
company
Apple
company
Bloomberg
company
Yahoo
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
Accepted
472.2K
Submissions
946.5K
Acceptance Rate
49.9%
 */

/**
 * @param {string} s
 * @return {string}
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowelList = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    // hello
    let startPointer = 0;
    let endPointer = s.length - 1;
    let charList = [];
    while (startPointer <= endPointer) {
        if (vowelList.indexOf(s[startPointer]) > -1 && vowelList.indexOf(s[endPointer]) > -1) {
            // swap
            charList[startPointer] = s[endPointer];
            charList[endPointer] = s[startPointer];
            startPointer++;
            endPointer--;
        }
        if (vowelList.indexOf(s[startPointer]) > -1 && vowelList.indexOf(s[endPointer]) === -1) {
            // reduce the endPointer
            charList[endPointer] = s[endPointer];
            endPointer--;
        }
        if (vowelList.indexOf(s[startPointer]) === -1 && vowelList.indexOf(s[endPointer]) > -1) {
            // increase the startPointer
            charList[startPointer] = s[startPointer];
            startPointer++;
        }
        if (vowelList.indexOf(s[startPointer]) === -1 && vowelList.indexOf(s[endPointer]) === -1) {
            // increase the startPointer
            charList[startPointer] = s[startPointer];
            charList[endPointer] = s[endPointer];
            startPointer++;
            endPointer--;
        }
    }
    return charList.join('');
};