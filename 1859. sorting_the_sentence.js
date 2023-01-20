/**
 * 1859. Sorting the Sentence
Easy
1.6K
49
company
Facebook
company
Adobe
company
Google
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
Example 2:

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
 

Constraints:

2 <= s.length <= 200
s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
The number of words in s is between 1 and 9.
The words in s are separated by a single space.
s contains no leading or trailing spaces.
Accepted
101K
Submissions
119.8K
Acceptance Rate
84.3%
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {

    let sentenceList = s.split(' ');
    let finalSenttence = [];

    for (let i = 0; i < sentenceList.length; i++) {
        const index = sentenceList[i][sentenceList[i].length - 1];
        finalSenttence[index] = sentenceList[i].substring(0, sentenceList[i].length - 1);
    }
    return finalSenttence.join(' ').trim();
};