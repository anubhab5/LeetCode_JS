/**
 * company
    Amazon
    company
    Apple
    company
    Google
    Given an array of integers nums, return the number of good pairs.

    A pair (i, j) is called good if nums[i] == nums[j] and i < j.

    

    Example 1:

    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
    Example 2:

    Input: nums = [1,1,1,1]
    Output: 6
    Explanation: Each pair in the array are good.
    Example 3:

    Input: nums = [1,2,3]
    Output: 0
    

    Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100
    Accepted
    392.3K
    Submissions
    444.5K
    Acceptance Rate
    88.2%
 */

/**
* @param {number[]} nums
* @return {number}
*/
var numIdenticalPairs = function (nums) {

    let sortedArr = nums.sort((a, b) => a - b);
    let counter = 0;
    let i = 0;
    let pointer = 1;
    while (i < sortedArr.length) {
        if (sortedArr[i] === sortedArr[pointer]) {
            counter++;
            pointer++;
        } else if (sortedArr[i] !== sortedArr[pointer] || pointer === sortedArr.length - 1) {
            i++;
            pointer = i + 1;
        }
    }
    return counter;
};