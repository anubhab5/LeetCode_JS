/**
 * 520. Detect Capital
Easy
3.1K
441
company
Google
company
Amazon
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
 

Constraints:

1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
Accepted
381.6K
Submissions
668.4K
Acceptance Rate
57.1%
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let characterCodeOfA = 'A'.charCodeAt(0);
    let characterCodeOfZ = 'Z'.charCodeAt(0);

    let capitalCount = 0;
    let smallCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i].charCodeAt(0) >= characterCodeOfA && word[i].charCodeAt(0) <= characterCodeOfZ) {
            capitalCount++;
        } else {
            smallCount++;
        }
    }
    if (capitalCount === word.length) {
        return true;
    }
    if (capitalCount === 1 && smallCount === (word.length - 1) &&
        (word[0].charCodeAt(0) >= characterCodeOfA && word[0].charCodeAt(0) <= characterCodeOfZ)) {
        return true;
    }
    if (smallCount === word.length) {
        return true;
    }
    return false;
};