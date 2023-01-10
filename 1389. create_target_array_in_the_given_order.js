/**
 * Easy
    1.5K
    1.5K
    company
    Uber
    company
    Visa
    Given two arrays of integers nums and index. Your task is to create target array under the following rules:

    Initially target array is empty.
    From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    Repeat the previous step until there are no elements to read in nums and index.
    Return the target array.

    It is guaranteed that the insertion operations will be valid.

    

    Example 1:

    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    Output: [0,4,1,3,2]
    Explanation:
    nums       index     target
    0            0        [0]
    1            1        [0,1]
    2            2        [0,1,2]
    3            2        [0,1,3,2]
    4            1        [0,4,1,3,2]
    Example 2:

    Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
    Output: [0,1,2,3,4]
    Explanation:
    nums       index     target
    1            0        [1]
    2            1        [1,2]
    3            2        [1,2,3]
    4            3        [1,2,3,4]
    0            0        [0,1,2,3,4]
    Example 3:

    Input: nums = [1], index = [0]
    Output: [1]
    

    Constraints:

    1 <= nums.length, index.length <= 100
    nums.length == index.length
    0 <= nums[i] <= 100
    0 <= index[i] <= i
    Accepted
    176.7K
    Submissions
    205.8K
    Acceptance Rate
    85.9%
 */

/**
* @param {number[]} nums
* @param {number[]} index
* @return {number[]}
*/

// Brute force

// var createTargetArray = function (nums, index) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (arr[index[i]] !== undefined) {
//             let end = arr.length - 1;
//             let j = end;
//             while (j >= index[i]) {
//                 arr[j + 1] = arr[j];
//                 j--
//             }
//         }
//         arr[index[i]] = nums[i];
//     }
//     return arr;
// };

console.log(createTargetArray([0,1,0], [0,1,0]));
