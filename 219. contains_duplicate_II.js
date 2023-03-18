/**
 * 219. Contains Duplicate II
Easy
4.6K
2.5K
company
Amazon
company
Facebook
company
Google
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
Accepted
650.1K
Submissions
1.5M
Acceptance Rate
42.5%
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    for (let i = 0; i < nums.length; i++) {
        const tempList = nums.slice(i+1, i+k+1);
        if (tempList.indexOf(nums[i]) > -1) {
            return true;
        }
    }
    return false;
};