/**
 * 1832. Check if the Sentence Is Pangram
    Easy
    2.1K
    47
    company
    Google
    company
    Goldman Sachs
    company
    Bloomberg
    A pangram is a sentence where every letter of the English alphabet appears at least once.

    Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

    

    Example 1:

    Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
    Output: true
    Explanation: sentence contains at least one of every letter of the English alphabet.
    Example 2:

    Input: sentence = "leetcode"
    Output: false
    

    Constraints:

    1 <= sentence.length <= 1000
    sentence consists of lowercase English letters.
    Accepted
    207K
    Submissions
    247.3K
    Acceptance Rate
    83.7%
    Seen this question in a real interview before?
    1/4
    Yes
    No
    Related Topics
    Copyright ©️ 2023 LeetCode All rights reserved
 */

/**
* @param {string} sentence
* @return {boolean}
*/
var checkIfPangram = function (sentence) {

    // if the length of the sentence is less than 26 then it should not have all alphabets
    if (sentence.length < 26) return false;

    // if the length of the sentence is 26 and contains space then it should not have all the aphabets
    if (sentence.length === 26 && sentence.indexOf(' ') > -1) return false;

    let hashMap = {};

    for (let i = 0; i < sentence.length; i++) {
        if (!hashMap[sentence[i]] && sentence[i] !== ' ') {
            hashMap[sentence[i]] = 1;
        }
        if (Object.keys(hashMap).length === 26) return true;
    }
    return false;
};