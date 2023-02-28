/**
 * 2574. Left and Right Sum Differences
Easy
152
8
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

 

Example 1:

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
Example 2:

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 105
Accepted
20.5K
Submissions
23.1K
Acceptance Rate
88.8%
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
    if (nums.length < 2) return [0];

    let pointer = 0;
    let arr = [];

    while (pointer < nums.length) {
        let lSum = 0;
        let rSum = 0;

        for (let i = 0; i < pointer; i++) {
            lSum += nums[i];
        }

        for (let i = pointer + 1; i < nums.length; i++) {
            rSum += nums[i];
        }

        arr.push(Math.abs(lSum - rSum));
        pointer++;
    }
    return arr;
};