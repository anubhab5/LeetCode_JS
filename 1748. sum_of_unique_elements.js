/**
 * 1748. Sum of Unique Elements
Easy
1.1K
23
company
Facebook
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
Accepted
103.3K
Submissions
136K
Acceptance Rate
76.0%
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let sum = 0;
    let sortedList = nums.sort((a, b) => a - b);
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
            sum += nums[i];
        }
        i++;
    }
    return sum;
};