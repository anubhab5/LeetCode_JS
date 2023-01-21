/**
 * 2423. Remove Letter To Equalize Frequency
Easy
303
683
company
tcs
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

The frequency of a letter x is the number of times it occurs in the string.
You must remove exactly one letter and cannot chose to do nothing.
 

Example 1:

Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
Example 2:

Input: word = "aazz"
Output: false
Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.
 

Constraints:

2 <= word.length <= 100
word consists of lowercase English letters only.
Accepted
21.6K
Submissions
116.6K
Acceptance Rate
18.5%
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {

    let sortedList = word.split('').sort((a, b) => a - b);

    let hasEqualFreq = false;
    for (let i = 0; i < sortedList.length; i++) {
        let modified =  [...sortedList.slice(0, i), ...sortedList.slice(i + 1)] //sortedList.slice(i, 1);
        const map = getFrequency(modified);
        const frequencyList = Object.values(map).sort((a, b) => a - b);
        let uniqueFreq = [...new Set(frequencyList)];
        if (uniqueFreq.length > 1) {
            continue;
        } else {
            return true;
        }
    }

    function getFrequency(sortedList) {
        let map = {};
        for (let i = 0; i < sortedList.length; i++) {
            if (!map[sortedList[i]]) {
                map[sortedList[i]] = 1;
            } else {
                map[sortedList[i]] += 1;
            }
        }
        return map;
    }

    return false;
};