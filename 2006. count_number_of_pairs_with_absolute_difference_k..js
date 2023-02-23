/**
 * 2006. Count Number of Pairs With Absolute Difference K
Easy
1.2K
28
company
Amazon
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
Example 2:

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.
Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
1 <= k <= 99
Accepted
87.8K
Submissions
106.2K
Acceptance Rate
82.7%
Seen this question in a real interview before?
1/4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {

    let i = 0;
    let j = 1;
    let count = 0;
    while (i < nums.length) {
        if (j >= nums.length) {
            i++;
            j = i + 1;
        }
        if (Math.abs(nums[i] - nums[j]) === k) {
            count++;
        }
        j++;
    }
    return count;
};