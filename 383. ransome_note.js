/**
 * 383. Ransom Note
Easy
3.5K
396
company
Amazon
company
Spotify
company
Apple
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
Accepted
680K
Submissions
1.2M
Acceptance Rate
57.9%
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    const magazineList = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineList.indexOf(ransomNote[i]) === -1) {
            return false;
        }
        magazineList.splice(magazineList.indexOf(ransomNote[i]), 1);
    }
    return true;
};