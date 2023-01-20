/**
 * 1002. Find Common Characters
Easy
2.8K
233
company
Apple
company
Amazon
company
Uber
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.
Accepted
168.9K
Submissions
246.9K
Acceptance Rate
68.4%
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    if (words.length === 0) return [];
    let list = [];

    let i = 0;
    let j = words.length - 1;

    for (let i = 0; i < words[0].length; i++) {
        let isPresent = true;
        j = words.length - 1;
        while (j >= 1) {
            let test = words[j].indexOf(words[0][i])
            if (words[j].indexOf(words[0][i]) === -1) {
                isPresent = false;
                break;
            } else {
                const index = words[j].indexOf(words[0][i]);
                words[j] = words[j].slice(0, index) + words[j].slice(index + 1);
                j--;
            }
        }
        if (isPresent) {
            list.push(words[0][i]);
        }
    }
    return list;
};