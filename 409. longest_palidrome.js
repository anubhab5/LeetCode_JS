/**
 * 409. Longest Palindrome
Easy
4.5K
272
company
Amazon
company
Apple
company
Microsoft
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
Accepted
482.6K
Submissions
889K
Acceptance Rate
54.3%
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let ans = 0;
let keys = {};

for (let char of s) {
  keys[char] = (keys[char] || 0) + 1;
  if (keys[char] % 2 == 0) ans += 2;
}
return s.length > ans ? ans + 1 : ans;
};