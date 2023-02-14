/**
 * 243. Shortest Word Distance
Easy
1.2K
101
company
LinkedIn
company
Amazon
company
Microsoft
Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

 

Example 1:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
Example 2:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
 

Constraints:

2 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] consists of lowercase English letters.
word1 and word2 are in wordsDict.
word1 != word2
Accepted
197.3K
Submissions
303.7K
Acceptance Rate
65.0%
 */

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
    let minDistance = wordsDict.length - 1;
    let wordOnePointer = -1;
    let wordTwoPointer = -1;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            wordOnePointer = i;
        }
        if (wordsDict[i] === word2) {
            wordTwoPointer = i;
        }

        if (wordOnePointer !== -1 && wordTwoPointer !== -1 && Math.abs(wordOnePointer - wordTwoPointer) < minDistance) {
            minDistance = Math.abs(wordOnePointer - wordTwoPointer);
        }
    }
    return minDistance;
};