/**
 * company
    Amazon
    Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

    

    Example 1:

    Input: s = "leetcodeisacommunityforcoders"
    Output: "ltcdscmmntyfrcdrs"
    Example 2:

    Input: s = "aeiou"
    Output: ""
    

    Constraints:

    1 <= s.length <= 1000
    s consists of only lowercase English letters.
    Accepted
    91.6K
    Submissions
    100.9K
    Acceptance Rate
    90.8%
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
    let str = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) === -1) {
            str += s[i];
        }
    }
    return str;
};


// Better Solution 
// var removeVowels = function (s) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return s.split('').map(character => vowels.indexOf(character) === -1 ? character: '').join('');
// };