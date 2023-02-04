/**
 * 914. X of a Kind in a Deck of Cards
Easy
1.6K
381
company
Google
You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
 

Constraints:

1 <= deck.length <= 104
0 <= deck[i] < 104
Accepted
101K
Submissions
320.1K
Acceptance Rate
31.5%
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {

    if (deck.length < 2) return false;

    let digitMap = {};
    for (let i = 0; i < deck.length; i++) {
        if (digitMap[deck[i]] === undefined) {
            digitMap[deck[i]] = 1;
        } else {
            digitMap[deck[i]] += 1;
        }
    }

    let valueList = Object.values(digitMap);
    let result = findGCD(valueList, valueList.length);

    if (result > 1) return true;
    else return false;
    console.log('test');

    function gcd(a, b) {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }

    // Function to find gcd of array of 
    // numbers 
    function findGCD(arr, n) {
        let result = arr[0];
        for (let i = 1; i < n; i++) {
            result = gcd(arr[i], result);

            if (result == 1) {
                return 1;
            }
        }
        return result;
    }
};