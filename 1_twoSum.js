/**
 * @author Anubhab Mukherjee (anubhabmukherjee5@gmail.com)
 * @date 01 Jan 2022
 * @file 1_twoSum.js
 * @param {*} nums An array of numbers
 * @param {*} target The target sum value
 * @returns Array of index of the sum of the numbers are present
 */
var twoSum = function (nums, target) {
  let firstNumber, secondNumber;
  for (let i = 0; i < nums.length; i++) {
    firstNumber = nums[i];
    secondNumber = target - firstNumber;
    if (nums.indexOf(secondNumber) > -1 && i !== nums.indexOf(secondNumber)) {
      return [i, nums.indexOf(secondNumber)];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
