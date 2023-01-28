/**
 * 
 *  53. Maximum Subarray
    Medium
    27.7K
    1.2K
    company
    Amazon
    company
    Cisco
    company
    Apple
    Given an integer array nums, find the 
    subarray
    with the largest sum, and return its sum.

    

    Example 1:

    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
    Example 2:

    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.
    Example 3:

    Input: nums = [5,4,-1,7,8]
    Output: 23
    Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
    

    Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    

    Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

    Accepted
    3M
    Submissions
    5.9M
    Acceptance Rate
    50.1%
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currentSum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
};