/**
 * 58. Length of Last Word
    Easy
    2.5K
    138
    company
    Apple
    company
    Amazon
    company
    Google
    Given a string s consisting of words and spaces, return the length of the last word in the string.

    A word is a maximal 
    substring
    consisting of non-space characters only.

    

    Example 1:

    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.
    Example 2:

    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.
    Example 3:

    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.
    

    Constraints:

    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.
    Accepted
    994K
    Submissions
    2.4M
    Acceptance Rate
    41.7%
 */

/**
* @param {string} s
* @return {number}
*/
var lengthOfLastWord = function (s) {

    // const wordList = s.trim().split(' ');
    // return wordList[wordList.length - 1].length;
    let count = 0;
    let str = s.trim();
    let i = str.length - 1;
    while (str[i] !== ' ' && i>=0) {
        count++;
        i--;
    }
    return count;
};

console.log(lengthOfLastWord("s"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));