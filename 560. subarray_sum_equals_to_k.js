/**
 * 560. Subarray Sum Equals K
Medium
17.1K
501
company
Facebook
company
Amazon
company
Mathworks
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
Accepted
926.7K
Submissions
2.1M
Acceptance Rate
43.8%
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    // let count = 0;
    // let sum = 0;
    // let sPointer = 0;
    // let ePointer = sPointer;
    // while (sPointer < nums.length) {

    //     if (ePointer === nums.length) {
    //         sPointer++;
    //         ePointer = sPointer;
    //         sum = 0;
    //     }

    //     sum += nums[ePointer];
    //     if (sum === k) {
    //         count++;
    //         ePointer++
    //     } else {
    //         ePointer++;
    //     }
    // }
    // return count;
    
    let map = new Map(), sum = 0, count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        map.set(sum, (map.get(sum) || 0) + 1) 
    }
    return count;
};

console.log(subarraySum([1, -1, 0], 0));