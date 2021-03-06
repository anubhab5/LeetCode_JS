/**
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    

    Example 1:

    Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false
    

    Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let processessedBracketList = [];

    if (s.length % 2 !== 0) return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            processessedBracketList.push(s[i]);
        } else if ((s[i] === ')' && processessedBracketList[processessedBracketList.length - 1] === '(') ||
            s[i] === '}' && processessedBracketList[processessedBracketList.length - 1] === '{' ||
            s[i] === ']' && processessedBracketList[processessedBracketList.length - 1] === '[') {
            processessedBracketList.pop();
        } else {
            return false;
        }
    }

    if (!processessedBracketList.length) return true;
    else return false;
};

s = "[({}]{}"

console.log(isValid(s));