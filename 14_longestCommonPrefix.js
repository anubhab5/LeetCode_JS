/**
 * Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".    

    Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

    Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.    

    Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.
 */


/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
   let longestCommonPrefix = '';
   const firstItem = strs[0];
   for (let i = 0; i < firstItem.length; i++) {
      for (let j = 1; j < strs.length; j++) {
         if (firstItem[i] === strs[j][i]) {
            continue;
         } else {
            return longestCommonPrefix;
         }
      }
      longestCommonPrefix += firstItem[i];
   }
   return longestCommonPrefix;
};

const arr = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(arr));