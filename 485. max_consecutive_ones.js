/**
 * 485. Max Consecutive Ones
Easy
3.9K
418
company
Google
company
Amazon
company
Microsoft
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
Accepted
816.7K
Submissions
1.4M
Acceptance Rate
56.4%
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let tempCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (tempCount > count) {
                count = tempCount;
            }
            tempCount = 0;
        } else {
            tempCount++;
        }
    }
    if (tempCount > count) {
        return tempCount;
    } else {
        return count;
    }
};