/**
 * 2444. Count Subarrays With Fixed Bounds
Hard
1.7K
32
company
DoorDash
Oracle
You are given an integer array nums and two integers minK and maxK.

A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

The minimum value in the subarray is equal to minK.
The maximum value in the subarray is equal to maxK.
Return the number of fixed-bound subarrays.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
Example 2:

Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.
 

Constraints:

2 <= nums.length <= 105
1 <= nums[i], minK, maxK <= 106
Accepted
41.2K
Submissions
68.8K
Acceptance Rate
59.9%
Seen this question in a real interview before?
1/4
 */

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    let sum = 0;
    let start = 0, minStart = 0, maxStart = 0;
    let minf = false, maxf = false;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num < minK || num > maxK) {
            minf = false;
            maxf = false;
            start = i + 1;
        }

        if (num === minK) {
            minf = true
            minStart = i;
        }

        if (num === maxK) {
            maxf = true
            maxStart = i;
        }

        if (minf && maxf) {
            sum += (Math.min(minStart, maxStart) - start + 1)
        }
    }

    return sum
};